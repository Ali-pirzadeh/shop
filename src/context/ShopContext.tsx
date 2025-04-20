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
    handelIncreaseProduct: (id : number) => void
}

export const ShoppingCardContext = createContext({} as IShoppingCardContext)


export const useShoppingCartContext = () => {
    return useContext(ShoppingCardContext)
}

function ShopContext({ children }: IShopContext) {
    const [cartItems,setCartItem] = useState<ICartItem[]>([])

    function handelIncreaseProduct(id: number) {
        setCartItem((curentItems) => {
            let selectItem = curentItems.find((item) => item.id == id);
            if (selectItem == null) {
                return [...curentItems, { id : id , qty : 1}]
            } else {
                return curentItems.map((item) => {
                    if (item.id == id) {
                        return {...item , qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
            }
    })
}

    return (
        <ShoppingCardContext.Provider value={{cartItems , handelIncreaseProduct}}>
            {children}
      </ShoppingCardContext.Provider>
  )
}

export default ShopContext