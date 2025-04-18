import { createContext, useState } from "react"

interface IShopContext {
    children: React.ReactNode;
}


interface IShoppingCardContext {
    cartItem: [];
}

export const ShoppingCardContext = createContext<IShoppingCardContext>({cartItem:[]})

function ShopContext({ children }: IShopContext) {
    const [cartItem,setCartItem] = useState<[]>([])
    return (
        <ShoppingCardContext.Provider value={{cartItem}}>
            {children}
      </ShoppingCardContext.Provider>
  )
}

export default ShopContext