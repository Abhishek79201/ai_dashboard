'use client'
import { useEffect, useRef } from 'react'
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { queryDatabase, setChatList } from '../../redux/slices/chatSlice'
import sendIcon from '@/app/assets/InputBar/sendIcon.svg'
import DatabaseSidebar from '../DatabaseSidebar/DatabaseSidebar'

const InputBar = ({ directoryName }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const chatList = useSelector(state => state.chat.chatList)
  const inputRef = useRef(null)

  useEffect(() => {
    const handleEnterPress = event => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault()
        form.submit()
      }
    }

    if (inputRef.current) {
      inputRef.current.resizableTextArea.textArea.addEventListener(
        'keydown',
        handleEnterPress
      )
    }

    return () => {
      if (inputRef.current) {
        inputRef.current.resizableTextArea.textArea.removeEventListener(
          'keydown',
          handleEnterPress
        )
      }
    }
  }, [inputRef, form])

  const onFinish = values => {
    const { message } = values
    if (message) {
      dispatch(setChatList([...chatList, { user_question: message }]))
      dispatch(
        queryDatabase({
          query_string: message,
          folder_name: directoryName
        })
      )
    }
    form.resetFields()
  }

  return (
    <Form
      form={form}
      name='chat_input'
      onFinish={onFinish}
      className='w-full m-auto bg-white rounded-lg shadow-lg flex md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px]'
    >
      <div className='flex p-4 gap-2 w-full flex-col'>
        <div className='flex justify-between gap-2'>
          <Form.Item
            name='message'
            rules={[{ required: false, message: 'Please enter a message' }]}
            className='w-full m-0'
          >
            <Input.TextArea
              autoSize={{ minRows: 1, maxRows: 10 }}
              placeholder='Chat with Your Data here or Try Existing Database...'
              className='rounded-md w-full my-0 border-none p-4'
              ref={inputRef}
            />
          </Form.Item>
          <button type='submit'>
            <img src={sendIcon.src} alt='sendIcon' />
          </button>
        </div>
      </div>
    </Form>
  )
}

export default InputBar
