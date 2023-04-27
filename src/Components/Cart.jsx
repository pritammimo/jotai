import React,{useState} from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import { cartDetailsAtom,cartPriceAtom,cartAtom} from "../store/page";
import { useAtom } from "jotai";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const [cartvalue,removecart] = useAtom(cartAtom);
  const [cartdetails] = useAtom(cartDetailsAtom);
  const navigate=useNavigate()
  const [toast, settoast] = useState(false);
    const [cartprice]=useAtom(cartPriceAtom);
   console.log("cart",cartprice);
    console.log("cartdetails",cartdetails);
    console.log("cartvalue",cartvalue);
    const handleRemove=(id)=>{
     let currentcart=cartvalue?.filter((product)=>product?.id !=id)
    removecart(currentcart)
    }
    const handleorder=()=>{
     settoast(true)
     removecart([])
     navigate("/")
    }
  return (
    <>
    <Navbar/>
    {toast && 
    <div className="toast toast-top toast-end">
    <div className="alert alert-success">
      <div>
        <span>Ordered successfully.</span>
      </div>
    </div>
  </div>
    }
    
    <div className="container mx-auto px-4 p-4 artboard artboard-horizontal phone-1">
    <div className="flex flex-col w-full">
      {cartdetails?.map((product)=>(
        <div key={product.id}>
          <div className="card card-side bg-base-100 shadow-xl">
  <figure className="w-6/12 h-full"> 
    <img src="https://e7.pngegg.com/pngimages/75/649/png-clipart-adidas-shoe-sneakers-women-shoes-purple-white-thumbnail.png" alt="Shoes" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{product?.title}</h2>
    <p>{product?.description}</p>
    <div className="badge badge-secondary">{product?.price * product?.number}</div>
    <div>Items:{product?.number}</div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handleRemove(product?.id)}>Remove</button>
    </div>
  </div>
</div>
  <div className="divider"></div> 
        </div>
      ))}
      <div className='flex justify-end m-2'>Total amount:${cartprice}</div>
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-end">
      <button className="btn m-2" onClick={()=>navigate("/")}>Cancel</button>
  <button className="btn btn-active " onClick={handleorder}>Order</button>
</div>
</div>
</div>

<Footer/>


</>
  )
}

export default Cart