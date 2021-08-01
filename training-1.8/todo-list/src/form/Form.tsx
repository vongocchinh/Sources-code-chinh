import React, { useState } from 'react'
import './../App.css';
interface FormTS{
    add:addUser
}
 const Form:React.FC<FormTS>=({add}) =>{

    const [input, setInput] = useState({
        name:'',
        age:''
    })

    const Onchange=({target:{name,value}}:React.ChangeEvent<HTMLInputElement>)=>setInput((pre)=>{
        (pre as any)[name]=value;
        var user={...pre};
        return user;
    })


    const Onsubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        var user={
            id: Math.random().toString(),
            name:input.name,
            age:input.age
        }
        add(user);
    }
    return (
        <>
            <form onSubmit={Onsubmit} >
                <input type="text" onChange={Onchange} name="name" placeholder="name..." />
                <input type="text" onChange={Onchange} name="age" placeholder="age..." />
                <input type="submit" value="Save" />
            </form>
        </>
    )
}
export default Form;