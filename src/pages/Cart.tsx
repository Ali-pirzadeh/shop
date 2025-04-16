import CartItem from "../component/CartItem"
import Container from "../component/Container"

function Cart() {
  return (
    <div className="mt-4">
        <Container>
            <div>
                  <CartItem />
              </div>
              <div className="bg-blue-200 mt-3 text-right px-3 rounded-sm">
                  <p>قیمت محصولات : 555</p>
                  <p className="mt-2">تخفیف : 20</p>
                  <p className="mt-2">قیمت کل : 123</p>
              </div>
              <button className="bg-red-400 text-white p-3 rounded-md mt-3 cursor-pointer">ثبت نهایی</button>
        </Container>
    </div>
  )
}

export default Cart