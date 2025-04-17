import { Link } from "react-router-dom"
import Container from "../component/Container"
import ProductItem from "../component/ProductItem"
import { useEffect, useState } from "react"
import { getProducts } from "../apiServer/api"
import { IProduct } from "../type/server"

function Products() {
  const [products , setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    getProducts().then((result)=>{setProducts(result)})
  } , [])
  return (
    <div>
      <Container>
        <div className="text-right p-4 text-xl text-blue-400">
          <h2>محصولات</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <ProductItem {...item} />
            </Link>
))}
        </div>
      </Container>
    </div>
  )
}

export default Products

