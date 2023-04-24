import React from "react";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import MinusIcon from "@heroicons/react/24/outline/MinusIcon";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductPage = () => {
    let { id } = useParams();
  return (
    <>
    <Navbar/>
    <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16 dark:bg-gray-900">
    <div className="pt-8">
      <div className="flex items-center dark:text-white">
        <ol className="flex items-center w-full overflow-hidden">
          <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 last:pr-0 hover:text-heading">
            <a href="#">Home</a>
          </li>
          <li className="text-base text-body mt-0.5">/</li>
          <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 last:pr-0 hover:text-heading">
            <a className="capitalize" href="#">
              products
            </a>
          </li>
          <li className="text-base text-body mt-0.5">/</li>
          <li className="text-sm text-body px-2.5 transition duration-200 ease-in first:pl-0 last:pr-0 hover:text-heading">
            <a className="capitalize" href="#">
              short sleeve shirts for men
            </a>
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
        <div className="pb-7 mb-7 border-b border-gray-300">
          <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold dark:text-white mb-3.5">
            Maniac Red Boys
          </h2>
          <p className="text-body text-sm lg:text-base leading-6 lg:leading-8 dark:text-gray-300">
            Children’s clothing/ kids wear is usually more casual than adult
            clothing, fit play and rest. Hosiery is usually used. More
            recently, however, tons of childrenswear is heavily influenced by
            trends in adult fashion
          </p>
          <div className="flex items-center mt-5 dark:text-gray-300">
            <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pr-2 md:pr-0 lg:pr-2 2xl:pr-0">
              $40.00
            </div>
            <span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl pl-2">
              $50.00
            </span>
          </div>
        </div>
        <div className="pb-3 border-b border-gray-300 dark:text-gray-300 ">
          <div className="mb-4">
            <h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
              size
            </h3>
            <ul className="colors flex flex-wrap -mr-3">
              {["S", "M", "L", "XL"].map((size) => (
                <li
                  key={size}
                  className="cursor-pointer rounded border hover:border-black dark:hover:border-white border-gray-100 dark:border-gray-600 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mr-2 md:mr-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out "
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 dark:text-gray-300">
            <h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">
              color
            </h3>
            <ul className="colors flex flex-wrap -mr-3">
              {[
                "bg-orange-400",
                "bg-pink-400",
                "bg-violet-600",
                "bg-red-500",
              ].map((color) => (
                <li
                  key={color}
                  className="cursor-pointer rounded border hover:border-black dark:hover:border-white border-gray-100 dark:border-gray-600 w-9 md:w-11 h-9 md:h-11 p-1 mb-2 md:mb-3 mr-2 md:mr-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out"
                >
                  <span className={`h-full w-full rounded block ${color}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-center space-s-4 md:pr-32 lg:pr-12 2xl:pr-32 3xl:pr-48 border-b dark:text-gray-300 border-gray-300 py-8">
          <div className="group flex items-center justify-between rounded-md overflow-hidden flex-shrink-0 border h-11 md:h-12 border-gray-300">
            <button
              className="flex items-center justify-center flex-shrink-0 h-full transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-e border-gray-300 hover:text-white hover:bg-heading"
              disabled
            >
              <MinusIcon className="h-3 w-3" />
            </button>
            <span className="font-semibold flex items-center justify-center h-full  transition-colors duration-250 ease-in-out cursor-default flex-shrink-0 text-base text-heading w-12  md:w-20 xl:w-24">
              1
            </span>
            <button className="flex items-center justify-center h-full flex-shrink-0 transition ease-in-out duration-300 focus:outline-none w-10 md:w-12 text-heading border-s border-gray-300 hover:text-white hover:bg-heading">
              <PlusIcon className="h-3 w-3" />
            </button>
          </div>
          <button className="h-11 md:h-12 py-2 w-full md:w-6/12 xl:w-full  rounded-md bg-indigo-600 px-3.5  text-base font-semibold leading-7 text-white hover:bg-indigo-500">
            Add to cart
          </button>
        </div>
        <div className="py-6 dark:text-gray-300">
          <ul className="text-sm space-y-5 pb-1">
            <li>
              <span className="font-semibold text-heading inline-block pr-2">
                SKU:
              </span>
              N/A
            </li>
            <li>
              <span className="font-semibold text-heading inline-block pr-2">
                Category:
              </span>
              <a
                className="transition hover:underline hover:text-heading"
                href="#"
              >
                kids
              </a>
            </li>
            <li className="productTags">
              <span className="font-semibold text-heading inline-block pr-2">
                Tags:
              </span>
              <a
                className="inline-block pr-1.5 transition hover:underline hover:text-heading last:pr-0"
                href="#"
              >
                Casual<span className="text-heading">,</span>
              </a>
              <a
                className="inline-block pr-1.5 transition hover:underline hover:text-heading last:pr-0"
                href="#"
              >
                Cotton<span className="text-heading">,</span>
              </a>
              <a
                className="inline-block pr-1.5 transition hover:underline hover:text-heading last:pr-0"
                href="#"
              >
                Red<span className="text-heading">,</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-sm dark:text-gray-300">
          <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300">
            <h2 className="text-sm font-semibold leading-relaxed text-heading pr-2 md:text-base lg:text-lg">
              Product Details
            </h2>
            <div className="flex-shrink-0 relative w-4 h-4 flex justify-center items-center">
              <div className="w-full h-0.5 bg-heading rounded-sm" />
              <div className="origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out scale-0" />
            </div>
          </header>
          <div>
            <div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600 dark:text-gray-400">
              Our Customer Experience Team is available 7 days a week and we
              offer 2 ways to get in contact.Email and Chat . We try to reply
              quickly, so you need not to wait too long for a response!.
            </div>
          </div>
        </div>
        <div className="dark:text-gray-300">
          <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300">
            <h2 className="text-sm font-semibold leading-relaxed text-heading pr-2 md:text-base lg:text-lg">
              Additional Information
            </h2>
          </header>
        </div>
        <div className="dark:text-gray-300">
          <header className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300">
            <h2 className="text-sm font-semibold leading-relaxed text-heading pr-2 md:text-base lg:text-lg">
              Customer Reviews
            </h2>
          </header>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default ProductPage

