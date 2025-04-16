
function CartItem() {
  return (
    <div className="flex flex-row-reverse border-b-2 border-dashed border-blue-300 pb-4">
        <img src="" alt="img" />
        <div className="mr-4">
              <h3>عنوان محصول</h3>
              <div className="mt-3">
                  <button className="bg-red-400 rounded-sm text-white mr-3 p-2 cursor-pointer">remove</button>
              <button className="bg-red-400 rounded-sm text-white mr-3 p-2 cursor-pointer">+</button>
              <span className="mr-3">{2}</span>
              <button className="bg-red-400 rounded-sm text-white p-2 cursor-pointer">-</button>
              </div>
        </div>
    </div>
  )
}

export default CartItem