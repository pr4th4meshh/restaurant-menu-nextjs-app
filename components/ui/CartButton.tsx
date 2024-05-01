import { ShoppingOutlined } from "@ant-design/icons"
import { FloatButton } from "antd"
import { useSelector } from "react-redux"
import Link from "next/link"
import { totalCartItems } from "../../utils/globalUtils"

const CartButton = () => {
  const cartItems = useSelector((state: any) => state.cart?.items)
  const totalQuantity = totalCartItems({cartItems})
  return (
    <div>
      {
        cartItems.map((quantity: any) => (
          quantity.quantity > 0 ? <Link key={1} href="/cart">
          <FloatButton
          key={quantity.quantity}
            className=" fixed "
            tooltip={<h1>Your cart</h1>}
            badge={{ count: totalQuantity, color: "green" }}
            icon={<ShoppingOutlined className="text-2xl" />}
            style={{
              height: 60,
              width: 60,
            }}
          />
        </Link> : null
        ))
      }
    </div>
  )
}

export default CartButton
