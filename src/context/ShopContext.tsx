import { createContext, useContext, useState } from "react"

interface IShopContext {
    children: React.ReactNode;
}


interface ICartItem {
    id: number;
    qty: number;
}

interface IShoppingCardContext {
    cartItems: ICartItem[];
}

export const ShoppingCardContext = createContext({} as IShoppingCardContext)


export const useShoppingCartContext = () => {
    return useContext(ShoppingCardContext)
}

function ShopContext({ children }: IShopContext) {
    const [cartItems,setCartItem] = useState<ICartItem[]>([])
    return (
        <ShoppingCardContext.Provider value={{cartItems}}>
            {children}
      </ShoppingCardContext.Provider>
  )
}

export default ShopContext