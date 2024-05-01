interface CartItemProps {
    cartItems: { quantity: number }[]
  }
  
  export const totalCartItems = ({ cartItems }: CartItemProps) => {
    return cartItems?.reduce((total, item) => total + (item.quantity || 0), 0)
  }
  
  export const gstConversion = (percentage, total) => {
    const calculatedAmount = (percentage / 100) * total
    return calculatedAmount.toFixed(2)
  }
  
  export const calculateTotalPrice = (subTotal, gstPercentage) => {
    const gstAmount = (gstPercentage / 100) * subTotal
    const totalPrice = subTotal + gstAmount
    const roundedTotalPrice = Math.round(totalPrice * 100) / 100
    return roundedTotalPrice
  }
  