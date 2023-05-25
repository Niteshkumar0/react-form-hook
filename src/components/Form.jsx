import React from 'react'
import '../App.css'
import { useRef } from 'react';
import {useForm} from 'react-hook-form';

export default function Form() {
    let {register,handleSubmit,watch,formState : {errors},reset} = useForm();

    let onSubmit = (data) =>{
        reset()
    }

    const password = useRef({});
    password.current = watch("password");
//   console.log(watch("password"))
// let [password,setPassword] = 

  return (
    <form className='formContainer' onSubmit={handleSubmit(onSubmit)}>
        <h1>Register Form</h1>
      <input type="text" placeholder='username' {...register('username',{required : true,maxLength:15,minLength:2,pattern:'^[A-Za-z]$'})} />
      {errors.name?.type === "required" && <p className='error'>name is required </p>}
      {errors.name?.type === "maxLength" && <p className='error'>name  have  15 character </p>}
      {errors.name?.type === "minLength" && <p className='error'>name atleast 2 length</p>}
      {errors.name?.type === "pattern" && <p className='error'>name must be not include special character</p>}



      <input type="password" placeholder='password' {...register('password',{required : true,maxLength:30,minLength:8,pattern:'^[0-9A-Za-z]$'})} />
      {errors.password?.type === "required" && <p className='error'>password is required </p>}
      {errors.password?.type === "maxLength" && <p className='error'> password only 30 length </p>}
      {errors.password?.type === "minLength" && <p className='error'>password atleast 8 length</p>}
      {errors.password?.type === "pattern" && <p className='error'>password must be not include special character</p>}


      <input type="password" placeholder='confirm password'{...register('confirm_password',{required : true,maxLength:30,minLength:8,validate:(value) => value === password.current })} />
      {errors.confirm_password?.type === "required" && <p className='error'>confirm password is required</p>}
      {errors.confirm_password?.type === "maxLength" && <p className='error'>confirm password must be same</p>}
      {errors.confirm_password?.type === "minLength" && <p className='error'>confirm password must be same</p>}
      {errors.confirm_password?.type === "pattern" && <p className='error'>confirm password  must be same</p>}
      {errors.confirm_password?.type === "validate" &&  <p className='error' >Password and Confirm Password must be match.</p>}



     <input type="text" placeholder='number' {...register('number',{required : true,maxLength:11,minLength:11,pattern:'^[0-9]$'})} />
      {errors.number?.type === "required" && <p className='error'>mobile number is required</p>}
      {errors.number?.type === "maxLength" && <p className='error'>mobile number is invalid</p>}
      {errors.number?.type === "minLength" && <p className='error'>mobile number is invalid</p>}
      {errors.number?.type === "pattern" && <p className='error'>mobile number is invalid</p>}

      <button type="submit" className='btn'>sign up</button>


    </form>
  )
}
