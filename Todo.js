import React, { useState } from "react";
function Todo(){

 const [data,setData]=useState("")
const [edit,setEdit]=useState(false)
const [Item,setAddItem]=useState([]);
const [text,setText]=useState("")
const addItem=()=>{
  if(edit){
  // setData(text)
  // console.log(text)
  }
  else{
    setAddItem([...Item,{id:new Date().getTime(),task:data}])
    
    // setData("")
  }

}   
// function edit(){



// }



function Delete(i){
  // let tmp=Item[i];
  
  setAddItem((Item)=>Item.filter(a=>a.id!==i))
  console.log(Item)
} 

return(
      <div className="App">
        <h1>Add-Todo-List</h1>
      <div className="content">
      <textarea onChange={(e)=>setData(e.target.value)}></textarea>
        <button type="submit" onClick={addItem}>Add-list</button>
       </div> 
  <div className="showItems">
   
      <ol>
      {
      Item.map((ele,index)=><li key={ele.id}>{ele.task} &nbsp; <button className="edit"  onClick={()=>{setEdit(true);setText(ele.task);setData(text)}}>Edit</button> 
      &nbsp; <button className="delete"  onClick={()=>Delete(ele.id)}>delete</button> </li>)
    }
        </ol>
  </div>     
        </div>     
    )
}
export default Todo