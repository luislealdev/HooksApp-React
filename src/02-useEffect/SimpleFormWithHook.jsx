import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const SimpleFormWithHook = () => {

    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username:'',
        email:'',
        password:''
    });

  return (
    <>
        <h1>Simple Form</h1>
        <hr/>

        <input 
        className="form-control mt-2"
        name="username"
        placeholder="Username"
        value={username}
        onChange={onInputChange}
        type="text"
        />

        <input
        className="form-control mt-2"
        name="email"
        placeholder="e-mail"
        value={email}
        onChange={onInputChange}
        type="email"
        />

        <input
        className="form-control mt-2"
        name="password"
        placeholder="password"
        value={password}
        onChange={onInputChange}
        type="password"
        />

        <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
    </>
  )
}
