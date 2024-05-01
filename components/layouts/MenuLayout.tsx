import Menu_Navbar from "@/app/(routes)/restaurant/[restaurantCode]/_components/Navbar"
// import { Outlet } from "react-router-dom"
// import Filter from "../../pages/Menu/components/Filter"
import { Content } from "antd/es/layout/layout"
import { Layout } from "antd"

const Menu_Layout = ({children}: any) => {
  return (
    <div>
      <Layout className="min-h-[100vh] bg-white">
        <Content>
          <Menu_Navbar />
          <div className="content">
          {children}
          </div>
          {/* <Filter /> */}
        </Content>
      </Layout>
    </div>
  )
}

export default Menu_Layout
