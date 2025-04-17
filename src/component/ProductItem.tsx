import { IProduct } from "../type/server"

type TProductItem = IProduct


function ProductItem({ title, price, description, image }: TProductItem) {
    
     const shortTitle = title.split(" ").slice(0, 2).join(" ");

  return (
    
        <div className="border-dashed border-1 shadow-md border-blue-300 rounded-md">
  <div className="flex justify-center items-center p-4">
    <img src={image} alt="img" className="rounded-md object-contain w-32 h-32" />
  </div>
  <div className="flex justify-between p-4">
    <h3>{shortTitle}</h3>
    <span>{price} $</span>
  </div>
  <div className="p-4">
    <p className="line-clamp-2">{description}</p>
  </div>
</div>
    
  )
}

export default ProductItem
