import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAtom} from "jotai";
import { cartAtom } from "../store/page";
const Navbar = () => {
    const navigate=useNavigate();
    const [cartitems] = useAtom(cartAtom);
     const value=cartitems.reduce((acc, obj) => {
        return acc + obj.number;
       }, 0)
    console.log("cart",value);
    // const readOnlyAtom = atom((get) => get(cartAtom.reduce((acc, obj) => {
    //   return acc + obj.number;
    // }, 0)))
  return (
    <div className="navbar bg-base-100 ">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="flex-none gap-2">
    <div>
    <div className="dropdown dropdown-end">
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button>
        <ul tabIndex={0} className="menu dropdown-content menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
          <li><a>Item 1</a></li> 
          <li><a>Item 2</a></li>
        </ul>
      </div>
  
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block" onClick={()=>navigate("/cart")}>View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img 
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
          alt="image"
          />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <div className="justify-between" onClick={()=>navigate('/profile')}>
            Profile
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Navbar