import React from 'react'
import { passwordAtom,profileAtom} from "../store/page";
import { useForm,useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useAtom} from "jotai";
import useSWRMutation from 'swr/mutation'
import axios from '../axios'
async function sendRequest(url, { arg:{data,token} }) {
    return axios.patch(`${url}`, data,{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      }
    })
  }
const Password = () => {
    const [,setpassword] = useAtom(passwordAtom);
    const [profile] = useAtom(profileAtom);
    const {register,control,handleSubmit,formState,watch}=useForm();
    const { trigger, isMutating,data } = useSWRMutation('/api/v1/users/3', sendRequest)
    const {errors,isDirty}=formState
    const onSubmit=(data)=>{
        trigger({data,token:profile.accessToken})
        setpassword(false)
       }
  return (
    <form onSubmit={handleSubmit(onSubmit)}
    noValidate>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
  <input type="password" placeholder="Type here" 
  className="input input-bordered w-full max-w-xs"
  {...register("Password",{
    required:"Password is Required",
    validate:(fieldValue)=>{
        return (
            fieldValue.length >8 ||
            "Enter a Strong password"
          );
    }
})}
  />
  <label className="label">
    <span className="label-text-alt text-red-700">{errors?.Password?.message}</span>
  </label>
</div>
<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Confirm Password</span>
  </label>
  <input type="password" placeholder="Type here" 
  className="input input-bordered w-full max-w-xs"
  {...register("PasswordConfirmation",
  {
      disabled:watch("Password")==="",
      required:"PasswordConfirmation is Required",
      validate:(fieldValue)=>{
        return (
            watch("Password")===fieldValue ||
            "Confirm password should be same as password"
          );
    }
  })}
  />
  <label className="label">
    <span className="label-text-alt text-red-700">{errors?.PasswordConfirmation?.message}</span>
  </label>
</div>
<div className="btn-group btn-group-vertical lg:btn-group-horizontal w-full justify-end">
<button className="btn" onClick={()=>navigate("/")}>Cancel</button>
  <button type="submit" disabled={!isDirty} className="btn btn-active ml-2 mr-2">Update Password</button>
  <button className="btn btn-active" onClick={()=>setpassword(false)}>Update others</button> 
</div>
<DevTool control={control}/>
</form>

  )
}

export default Password