import React, { useState } from 'react';
import List from './list/List';
import Form from './form/Form';


const initialState: Array<Users> = [
  {
    name: "Nguyen van A",
    age: "19",
    id:"1"
  },
  {
    name: "Nguyen van B",
    age: "20",
    id:"3"
  },
  {
    name: "Nguyen van C",
    age: "21",
    id:"2"
  }
]
function Page() {

  const [arr, setArr] = useState(initialState);

  const add=(u:Users)=>{
    // arr.push(u)
    setArr([...arr,u])
  }

  const deleteU:deleteUser=(id:string)=>{
    let index=arr.findIndex(v=>v.id===id);
    if(index !==-1){
      var userArr=deleteItemAtIndex(arr,index);
      setArr(userArr)
    }
    
  }
  const deleteItemAtIndex=(arr:Array<Users>, index:number)=>{
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  return (
          <div className="container">
            {/* <a  href="/login" >login</a> */}
            <div className="container-item">
              <Form add={add} />
            </div>
            <div className="container-item">
              <List arr={arr} onDelete={deleteU} />
            </div>
          </div>
  );
}

export default Page;
