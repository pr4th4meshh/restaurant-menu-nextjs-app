"use client"
import { useSelector } from "react-redux"
import CartList from "../../../components/lists/CartList"
import Suggestions from "./_components/Suggestions"
import BillDetails from "./_components/BillDetails"
import ReviewOrder from "./_components/ReviewOrder"
import Cart_Layout from "@/components/layouts/CartLayout"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart?.items)

  const getItemQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId)
    return item ? item.quantity : 0 
  }

  const individualItemPrice = (item) => {
    return item.price * getItemQuantity(item.id)
  }

  return (
    <Cart_Layout>
      <div className="px-3 border-b">
        {cartItems?.map((menu: any) => (
          <CartList
          key={(item) => item.id}
            itemTitle={(item) => item.title}
            itemQuantity={(item) => getItemQuantity(item.id)}
            itemTotalPrice={(item) => individualItemPrice(item)}
            dataSource={[menu]}
          />
        ))}
        <Suggestions />
      </div>
      <div className="px-3">
        <BillDetails />
        <ReviewOrder />
      </div>
    </Cart_Layout>
  )
}

export default Cart