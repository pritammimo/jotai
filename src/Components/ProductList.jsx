import React,{useState} from 'react'

const ProductList = () => {
  const [productList, setproductList] = useState([{
    title: "react-typescript axios-test",
    category: "react-typescript",
    price: "59000",
    description: "First practice with react-typescript",
    id: 24
  },
  {
    title: "Cargo pant",
    description: "Cargo pant description",
    category: "Jeans",
    price: "1200",
    id: 25
  },
  {
    title: "Cargo pant",
    description: "Cargo pant description",
    category: "Jeans",
    price: "1200",
    id: 25
  },{
    title: "Cargo pant",
    description: "Cargo pant description",
    category: "Jeans",
    price: "1200",
    id: 25
  },
  {
    title: "Cargo pant",
    description: "Cargo pant description",
    category: "Jeans",
    price: "1200",
    id: 25
  }
]);
  return (
    <div className="container mx-auto px-4 p-4 flex">
      {productList?.map((product)=>(
          <div className="card w-96 bg-base-100 shadow-xl m-2" key={product.id}>
          <figure><img src="https://e7.pngegg.com/pngimages/75/649/png-clipart-adidas-shoe-sneakers-women-shoes-purple-white-thumbnail.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {product?.title}
            </h2>
            <div className="badge badge-secondary">{product?.price}</div>
            <p>{product?.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Add to cart</div>
              <div className="badge badge-outline">Edit</div>
              <div className="badge badge-outline">Delete</div>
            </div>
          </div>
        </div>
      ))}
 
</div>
    
  )
}

export default ProductList