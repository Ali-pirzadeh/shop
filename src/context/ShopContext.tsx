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
    handelIncreaseProduct: (id: number) => void
    handelDecreaseProduct: (id: number) => void
    getProductItem: (id: number) => number
    handelerRemove : (id : number) => void
}

export const ShoppingCardContext = createContext({} as IShoppingCardContext)


export const useShoppingCartContext = () => {
    return useContext(ShoppingCardContext)
}

function ShopContext({ children }: IShopContext) {
    const [cartItems,setCartItem] = useState<ICartItem[]>([])

    function handelIncreaseProduct(id: number) {
        setCartItem((currentItems) => {
            let selectItem = currentItems.find((item) => item.id == id);
            if (selectItem == null) {
                return [...currentItems, { id : id , qty : 1}]
            } else {
                return currentItems.map((item) => {
                    if (item.id == id) {
                        return {...item , qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
            }
    })
    }
    
    function handelDecreaseProduct(id: number) {
        setCartItem((currentItems) => {
            let selectItem = currentItems.find((item) => item.id == id);
            if (selectItem?.qty === 1) {
                return currentItems.filter((item) => item.id !== id)
            } else {
                return currentItems.map((item) => {
                    if (item.id == id) {
                        return {...item , qty: item.qty - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function getProductItem(id: number) {
        return cartItems.find((item) => item.id === id)?.qty || 0;
    }

    function handelerRemove(id: number) {
        setCartItem(current => current.filter((item) => item.id != id))
    }

    return (
        <ShoppingCardContext.Provider value={{cartItems , handelIncreaseProduct , handelDecreaseProduct , getProductItem , handelerRemove}}>
            {children}
      </ShoppingCardContext.Provider>
  )
}

export default ShopContext