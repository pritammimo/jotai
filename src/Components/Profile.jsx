import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import useSWRMutation from 'swr/mutation'
import { useForm,useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useAtom} from "jotai";
import { profileAtom} from "../store/page";
import axios from '../axios'

 

const Profile = () => {
    const navigate=useNavigate()
    const [password, setpassword] = useState(false);
    const [profile,setProfile] = useAtom(profileAtom);
    console.log("profile",profile);
    const {register,control,handleSubmit,formState,watch,getValues,setValue,setError}=useForm({
      defaultValues:async()=>{
        const response = await axios.post(`/signin`, {
          email: 'jotai@yopmail.com',
          password: 'Cn@#12345'
        })
        const data=await response?.data
        setProfile(data)
        return {
          address: data?.user?.address,
          email: data?.user?.email,
          name: data?.user?.name,
          phone: data?.user?.phone
        }
      }
    });
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 p-4 artboard phone-5">
      {!password && 
      <>
      <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
      {...register("name",{
        required:"name is Required"
     })}
      />
      <label className="label">
        <span className="label-text-alt">Bottom Left label</span>
      </label>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
      {...register("email",{
        required:"email is Required"
     })}
      />
      <label className="label">
        <span className="label-text-alt">Bottom Left label</span>
      </label>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Phone</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
      {...register("phone",{
        required:"phone is Required"
     })}
      />
      <label className="label">
        <span className="label-text-alt">Bottom Left label</span>
      </label>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Address</span>
      </label>
      <textarea className="textarea textarea-bordered h-24" placeholder="Address"
      {...register("address",{
        required:"address is Required"
     })}
      ></textarea>
      <label className="label">
        <span className="label-text-alt">left label</span>
      </label>
    </div>
    <div className="btn-group btn-group-vertical lg:btn-group-horizontal w-full">
<button className="btn" onClick={()=>navigate("/")}>Cancel</button>
  <button className="btn btn-active ml-2 mr-2">Update</button>
  <button className="btn btn-active" onClick={()=>setpassword(true)}>Change Password</button>
</div>
    </>
      }
{password && 
<>
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
  <button className="btn btn-active" onClick={()=>setpassword(false)}>Update others</button>
</div>
</>
}

    </div>
    <Footer/>
    <DevTool control={control}/>
    </>
  )
}

export default Profile