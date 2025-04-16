import { Link } from "react-router-dom"
import Container from "../component/Container"
import ProductItem from "../component/ProductItem"

function Products() {
  return (
    <div>
      <Container>
        <div className="text-right p-4 text-xl text-blue-400">
          <h2>محصولات</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link to={`/product/${1}`}>
          <ProductItem />
          </Link>
          
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </Container>
    </div>
  )
}

export default Products

