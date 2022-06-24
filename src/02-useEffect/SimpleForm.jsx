import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'',
        email:''
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState, 
            [name]:value
        })
    }

    // useEffect(() => {
    //     console.log('useEffect called');
    // }, [username]);

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
        />

        {username==='luisleal' && <Message/>}

        <input
        className="form-control mt-2"
        name="email"
        placeholder="e-mail"
        value={email}
        onChange={onInputChange}
        />
    </>
  )
}
