import { Link } from "react-router-dom"
import Container from "../component/Container"

function Product() {
  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 shadow-md mt-4 rounded-md mx-5">
            <div className="col-span-10 p-4">
                <h2 className="text-right">عنوان محصول</h2>
                <div>
                    <p className="text-right">  $ قیمت : 50</p>
                    <p className="text-right">dkslfsfnsldfsdf;njsdflsjfjlsfjskfsfsflksfks;ffdsf;sdfsdfjsfksfksdfkslklsdjksdh</p>
                </div>
            </div>
            <div className="col-span-2 bg-blue-300 rounded-md">
            <img src="" alt="img" />
            <div className="flex items-center justify-center">
              <Link to="/cart" >
                <button className="px-4 py-2 bg-red-500 text-white rounded-md">Add to Cart</button>
                </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Product
