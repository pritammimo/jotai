import React,{useState,useEffect} from "react";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import MinusIcon from "@heroicons/react/24/outline/MinusIcon";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAtom,atom} from "jotai";
import { cartAtom,productAtom} from "../store/page";
import { atomWithStorage } from "jotai/utils";
const finalproduct=atom({})
const productStore = atomWithStorage('data', null);
const ProductPage = () => {
    let { id } = useParams();
    const [item, setitem] = useState(0);
    const [cartvalue,addcart] = useAtom(cartAtom);
    const [products]=useAtom(productStore)
    const [product,setProduct] = useAtom(finalproduct)
    useEffect(() => {
      if(products!==null){
         setProduct(products?.filter((pro)=>pro.id==id)[0])
      }
    }, [products]);
    const handlecount=(status)=>{
     if(status ==="plus"){
      setitem((prev)=>prev+1)
     }
     else if(status ==="minus"){
      setitem((prev)=>prev-1)
     }
    }
    const handlecart=()=>{
      let value=[...cartvalue]
      let filterexist=value?.filter((item)=>item?.id===id)
      if(filterexist?.length===0){
       value.push({
        id,
        number:item
       })
      }
      else {
        let objIndex = value.findIndex((obj => obj?.id == id));
        value[objIndex].number=item
      }
      addcart(value)
    }
  return (
    <>
    <Navbar/>
    <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 dark:bg-gray-900">
    <div className="pt-8">
      <div className="flex items-center dark:text-white">
        <ol className="flex items-center w-full overflow-hidden">
          <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 last:pr-0 hover:text-heading">
            <Link href="/">Home</Link>
          </li>
          <li className="text-base text-body mt-0.5">/</li>
          <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 last:pr-0 hover:text-heading">
            <Link className="capitalize" href={`/product/${product?.id}`}>
              {product?.description}
            </Link>
          </li>
        </ol>
      </div>
    </div>
    <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
      <div className="col-span-5 grid grid-cols-2 gap-2.5">
        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
          <img
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/product-overview/p-20-1.png"
            alt="Maniac Red Boys--0"
            className="object-cover w-full"
          />
        </div>
        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
          <img
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/product-overview/p-20-2.png"
            alt="Maniac Red Boys--1"
            className="object-cover w-full"
          />
        </div>
        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
          <img
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/product-overview/p-20-3.png"
            alt="Maniac Red Boys--2"
            className="object-cover w-full"
          />
        </div>
        <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
          <img
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/product-overview/p-20-4.png"
            alt="Maniac Red Boys--3"
            className="object-cover w-full"
          />
        </div>
      </div>
      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="">
          <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold dark:text-white mb-3.5">
            {product?.title}
          </h2>
          <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 dark:text-gray-300">
            {product?.description}
          </p>
          <div className="flex items-center mt-5 dark:text-gray-300">
            <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pr-2 md:pr-0 lg:pr-2 2xl:pr-0">
              ${product?.price}
            </div>
          </div>
          <div className="py-6 dark:text-gray-300">
          <ul className="text-sm space-y-5 pb-1">
            <li className="flex">
              <span className="font-semibold text-heading inline-block pr-2">
                Category:
              </span>
              <div
                className="transition hover:underline hover:text-heading"
              >
                {product?.category}
              </div>
            </li>
          </ul>
        </div>
        </div>
        <div className="flex gap-2 items-center space-s-4 md:pr-32 lg:pr-12 2xl:pr-32 3xl:pr-48  dark:text-gray-300 border-gray-300">
          <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
            <button
              className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading"
              disabled={item===0?true:null}
              onClick={()=>handlecount("minus")}
            >
              <MinusIcon className="h-3 w-3 cursor-pointer"/>
            </button>
            <span className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">
              {item}
            </span>
            <button className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading"
            onClick={()=>handlecount("plus")}
            >
              <PlusIcon className="h-3 w-3 cursor-pointer" />
            </button>
          </div>
          <button className="h-11 md:h-12 py-2 w-full md:w-6/12 xl:w-full  rounded-md bg-indigo-600 px-3.5  text-base font-semibold leading-7 text-white hover:bg-indigo-500"
          onClick={handlecart}
          >
            Add to cart
          </button>
        </div>
        
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default ProductPage

