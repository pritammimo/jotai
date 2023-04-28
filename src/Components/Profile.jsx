import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import useSWRMutation from 'swr/mutation'
import { useForm,useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useAtom} from "jotai";
import { profileAtom,passwordAtom} from "../store/page";
import axios from '../axios'
import Password from './password'

async function sendRequest(url, { arg:{data,token} }) {
  return axios.patch(`${url}`, data,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` 
    }
  })
}

const Profile = () => {
    const navigate=useNavigate()
    const [password, setpassword] = useAtom(passwordAtom);
    const [profile,setProfile] = useAtom(profileAtom);
    const { trigger, isMutating,data } = useSWRMutation('/api/v1/users/3', sendRequest)
    const {register,control,handleSubmit,formState}=useForm({
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
    const {errors,isDirty}=formState
    const onSubmit=(data)=>{
      trigger({data,token:profile.accessToken})
     }
    useEffect(() => {
      if(data !==undefined){
        setProfile({
          accessToken:profile.accessToken,
          user:data.data
        })
      }
    }, [data]);
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 p-4 artboard phone-5">
      {!password && 
      <form onSubmit={handleSubmit(onSubmit)}
      noValidate
      >
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
        <span className="label-text-alt text-red-700">{errors?.name?.message}</span>
      </label>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
      {...register("email",{
        required:"Email is required"
     })}
      />
      <label className="label">
        <span className="label-text-alt text-red-700">{errors?.email?.message}</span>
      </label>
    </div>
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text">Phone</span>
      </label>
      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
      {...register("phone",{
        required:"Phone number is required"
     })}
      />
      <label className="label">
        <span className="label-text-alt text-red-700">{errors?.phone?.message}</span>
      </label>
    </div>
    <div className="form-control w-full max-w-xs mb-2">
      <label className="label">
        <span className="label-text">Address</span>
      </label>
      <textarea className="textarea textarea-bordered h-24" placeholder="Address"
      {...register("address")}
      ></textarea>
    </div>
    <div className="btn-group btn-group-vertical lg:btn-group-horizontal w-full">
<button className="btn" onClick={()=>navigate("/")}>Cancel</button>
  <button type ="submit" 
  disabled={!isDirty}
  className="btn btn-active ml-2 mr-2">Update</button>
  <button className="btn btn-active" onClick={()=>setpassword(true)}>Change Password</button>
</div>
    </form>
      }
{password && 
<Password/>
}

    </div>
    <Footer/>
    <DevTool control={control}/>
    </>
  )
}

export default Profile