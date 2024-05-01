import { Content } from "antd/es/layout/layout"
import { Layout } from "antd"
import CheckoutButton from "../../app/(routes)/cart/_components/CheckoutButton"
import Cart_Navbar from "../../app/(routes)/cart/_components/Navbar"
import { useSelector } from "react-redux"
import { totalCartItems } from "../../utils/globalUtils"
import { LeftOutlined } from "@ant-design/icons"
import { Suspense } from "react"
import Loading from "../ui/loading"
import ErrorBoundary from "../ui/ErrorBoundary"

const Cart_Layout = ({ children }: any) => {
  const cartItems = useSelector((state) => state.cart?.items)
  const totalQuantity = totalCartItems({ cartItems })

  return (
    <div>
      <ErrorBoundary>
        {totalQuantity > 0 ? (
          <Layout className="min-h-[100vh] bg-white">
            <Suspense fallback={<Loading />}>
              <Content>
                <Cart_Navbar />
                <div className="content">{children}</div>
                <CheckoutButton />
              </Content>
            </Suspense>
          </Layout>
        ) : (
          <div className="h-[90vh] text-3xl flex flex-col justify-center items-center ">
            <h1>YOUR CART IS EMPTY</h1>
            <h1 className="text-orange-500" onClick={() => history.back()}>
              {" "}
              <LeftOutlined /> Go back
            </h1>
          </div>
        )}
      </ErrorBoundary>
    </div>
  )
}

export default Cart_Layout
