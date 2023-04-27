import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import useSWR from 'swr';
import { useAtom} from "jotai";
import { atomWithStorage } from 'jotai/utils';
import axios from '../axios';
const fetcher = url => axios.get(url).then(res => res.data)
const productStore = atomWithStorage('data', null);
const ProductList = () => {
  const navigate=useNavigate();
  const { data, error, isLoading } = useSWR('/products', fetcher)
  const [products,setProducts] = useAtom(productStore);
  useEffect(() => {
    if(data!==undefined){
     setProducts(data)
    }
  }, [data]);
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 p-4 ">
      <div className='grid grid-cols-3'>
      {products?.map((product)=>(
          <div className="card w-96 bg-base-100 shadow-xl m-2" key={product.id}>
          <figure><img src="https://e7.pngegg.com/pngimages/75/649/png-clipart-adidas-shoe-sneakers-women-shoes-purple-white-thumbnail.png" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {product?.title}
              <div className="badge badge-secondary">{product?.price}</div>
            </h2>
            
            <p>{product?.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline" onClick={()=>navigate(`/product/${product?.id}`)}>View</div>
              <div className="badge badge-outline">Delete</div>
            </div>
          </div>
        </div>
      ))}
     </div>
</div>
<Footer/>
</>
  )
}

export default ProductList