import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
// import { cartAtom } from "./ProductDescription";
// import { useAtom } from "jotai";
const Cart = () => {
  const [cartProduct, setcartProduct] = useState([{
      title: "react-typescript axios-test",
      category: "react-typescript",
      price: "59000",
      description: "First practice with react-typescript",
      id: 24
    },
    {
      title: "Cargo pant",
      description: "Cargo pant description very good product",
      category: "Jeans",
      price: "1200",
      id: 25
    },
    {
      title: "Cargo pant",
      description: "Caro pant a very smart one",
      category: "Jeans",
      price: "1200",
      id: 23
    },{
      title: "Cargo pant",
      description: "Cargo pant description",
      category: "Jeans",
      price: "1200",
      id: 22
    },
    {
      title: "Cargo pant",
      description: "Cargo pant description",
      category: "Jeans",
      price: "1200",
      id: 21
    }
  ]);
  // const [cartvalue, setcartvalue] = useAtom(cartAtom);
  // console.log("cartpro",cartvalue);
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 p-4 artboard artboard-horizontal phone-1">
    <div className="flex flex-col w-full">
      {cartProduct?.map((product)=>(
        <div key={product.id}>
          <div className="card card-side bg-base-100 shadow-xl">
  <figure className="w-6/12 h-full"> 
    <img src="https://e7.pngegg.com/pngimages/75/649/png-clipart-adidas-shoe-sneakers-women-shoes-purple-white-thumbnail.png" alt="Shoes" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{product?.title}</h2>
    <p>{product?.description}</p>
    <div className="badge badge-secondary">{product?.price}</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Remove</button>
    </div>
  </div>
</div>
  <div className="divider"></div> 
        </div>
      ))}
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-end">
      <button className="btn m-2" onClick={()=>navigate("/")}>Cancel</button>
  <button className="btn btn-active ">Order</button>
</div>
</div>
</div>
<Footer/>
</>
  )
}

export default Cart