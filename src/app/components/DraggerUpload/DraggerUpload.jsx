// DraggerUpload.jsx
import { useState } from 'react'
import { Upload, Button, Popover } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { createDatabase } from '../../redux/slices/chatSlice'

const DraggerUpload = () => {
  const [files, setFiles] = useState([])
  const [popoverVisible, setPopoverVisible] = useState(false)
  const dispatch = useDispatch()

  const handleFileChange = info => {
    const fileList = info.fileList.map(file => file.originFileObj)
    setFiles(fileList)
  }

  const handleUpload = () => {
    const fileBlobURLs = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file)
    }))
    dispatch(
      createDatabase({
        files: fileBlobURLs,
        folderName: null
      })
    )
    setFiles([])
    setPopoverVisible(false)
  }

  const content = (
    <div>
      <Upload.Dragger
        onChange={handleFileChange}
        directory
        name='file'
        beforeUpload={() => false}
        fileList={files}
        style={{
          border: '2px dashed #d9d9d9',
          borderRadius: '6px'
        }}
      >
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>
          Click or drag file to this area to upload
        </p>
        <p className='ant-upload-hint'>Support for a single or bulk upload.</p>
      </Upload.Dragger>
      <Button type='primary' onClick={handleUpload}>
        Upload Files
      </Button>
    </div>
  )

  return (
    <Popover
      content={content}
      title='Upload Files'
      trigger='click'
      visible={popoverVisible}
      onVisibleChange={setPopoverVisible}
    >
      <Button icon={<InboxOutlined />}>Upload Files</Button>
    </Popover>
  )
}

export default DraggerUpload
