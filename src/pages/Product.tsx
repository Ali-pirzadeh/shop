import { Link, useParams } from "react-router-dom"
import Container from "../component/Container"
import { useEffect, useState } from "react"
import { getProduct } from "../apiServer/api"
import { IProduct } from "../type/server"
import { useShoppingCartContext } from "../context/ShopContext"




function Product() {

  const params = useParams<{ id: string }>()
  const [product, setProduct] = useState<IProduct>()
  
    const {handelerRemove , getProductItem ,handelDecreaseProduct ,handelIncreaseProduct , cartItems } = useShoppingCartContext()
  
  console.log(cartItems);
  useEffect(() => {
    getProduct(params.id as string).then((result)=>{setProduct(result)})
  }, [])


       const shortTitle = product?.title.split(" ").slice(0, 2).join(" ");

  

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 shadow-md mt-4 rounded-md mx-5">
            <div className="col-span-10 p-4">
            <h2 className="text-right text-2xl">{shortTitle}</h2>
                <div>
              <p className="text-right text-xl">  $ قیمت : { product?.price}</p>
              <p className="text-right">{ product?.description}</p>
                </div>
            </div>
          <div className="col-span-2 rounded-md">
            <div className="flex justify-center items-center mb-3">
              <img src={product?.image} alt="img" className="object-contain w-25 h-25" />
            </div>
            <div className="flex items-center justify-center mb-2">

                {getProductItem(parseInt(params.id as string)) === 0 ? (<button onClick={() => handelIncreaseProduct(parseInt(params.id as string))} className="px-4 py-2 bg-red-500 text-white rounded-md">Add to Cart</button>)
                : (<>
                  <div className="grid grid-cols-1">
                <div className="grid grid-cols-3 gap-2">
                    <button onClick={() => handelDecreaseProduct(parseInt(params.id as string))} className="px-4 py-2 bg-red-500 text-white rounded-md"> - </button>
                    <span className="flex justify-center items-center">{ getProductItem(parseInt(params.id as string))}</span>
                    <button onClick={() => handelIncreaseProduct(parseInt(params.id as string))} className="px-4 py-2 bg-red-500 text-white rounded-md"> + </button>
                  </div>
                  <div className="flex justify-center items-center mt-3">
                    <button onClick={() => handelerRemove(parseInt(params.id as string))} className="px-4 py-2 bg-red-500 text-white rounded-md"> Remove </button>
                    </div>
                    </div>
                 </>)
}

            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
