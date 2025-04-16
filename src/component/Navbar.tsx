import { FaCartShopping } from "react-icons/fa6";
import Container from "./Container";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between h-14 shadow-md">
    <Container>
    <div className="flex justify-between flex-row-reverse p-4 items-center ">
        <div>
        <ul className="flex flex-row-reverse gap-5">
            <li className="hover:text-blue-400" ><Link to="/">خانه</Link></li>
            <li className="hover:text-blue-400" ><Link to="/products">محصولات</Link></li>
        </ul>
        </div>
        <div className="flex flex-row-reverse items-center gap-5">
            <button>سبد خرید</button>
            <FaCartShopping />
        </div>
    </div>
    </Container>
    </div>
  )
}

export default Navbar
