import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const navigate=useNavigate()
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 p-4 artboard phone-5">
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Phone</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Address</span>
  </label>
  <textarea className="textarea textarea-bordered h-24" placeholder="Address"></textarea>
  <label className="label">
    <span className="label-text-alt">left label</span>
  </label>
</div>
<div className="btn-group btn-group-vertical lg:btn-group-horizontal w-full">
<button className="btn" onClick={()=>navigate("/")}>Cancel</button>
  <button className="btn btn-active ml-2 mr-2">Update</button>
  <button className="btn btn-active ">Change Password</button>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Confirm Password</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  </label>
</div>
<div className="btn-group btn-group-vertical lg:btn-group-horizontal w-full justify-end">
<button className="btn" onClick={()=>navigate("/")}>Cancel</button>
  <button className="btn btn-active ml-2 mr-2">Update Password</button>
</div>
    </div>
    <Footer/>
    </>
  )
}

export default Profile