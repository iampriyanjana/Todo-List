import React, { useState } from 'react';
import ToDoLists from './ToDoLists';
  
   const App = () =>{
     const [inputList,setInputList]=useState("");
     const [Items,setItems]=useState([]);
 
 
    //going to pick up the value in the input field
    const itemEvent = (event) => {
      setInputList(event.target.value);
    };
  
    //combine the old list with the new list
    const listOfItems = () => {
       setItems((oldItems) =>{
          return [...oldItems,inputList];
       });
       setInputList("");
    };
 
    const deleteItems = (id) =>{
      setItems((oldItems) => {
        return oldItems.filter((arrElem,index)=>{
           return index!==id;
        })
      })
    }
    return (
      <>
       <div className="main_div">
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type="text" placeholder="add item" onChange={itemEvent} value={inputList}/>
          <button onClick={listOfItems}> + </button>

          <ol>
            {Items.map((itemval,index)=>{
                return <ToDoLists key={index} id={index} text={itemval} onSelect={deleteItems }/>;
            })}
          </ol>
        </div>
       </div>
      </>
    );
   };

export default App;