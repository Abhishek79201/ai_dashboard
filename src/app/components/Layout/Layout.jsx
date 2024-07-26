import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Header />
      <div className="z-[1000]">
        <Sidebar />
      </div>
      {children}
    </div>
  );
};

export default Layout;
