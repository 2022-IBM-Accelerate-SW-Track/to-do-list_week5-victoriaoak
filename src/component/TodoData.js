import React, {  useEffect, useState } from "react";
import Axios from "axios";


const ShowTodos = () => {
  const [todos, setTodos] = useState([]);
        
  // wait for a call to a backend service to complete, then proceed to render
  useEffect( () => { 
      async function fetchData() {
          try {
              const res = await Axios.get('http://localhost:8080/get/items'); 
              setTodos(JSON.stringify(res.data));
              console.log(JSON.stringify(res.data));
          } catch (err) {
              console.log(err);
          }
      }
      fetchData();
  }, []);
  return <div>{todos}</div>
  
}
export default ShowTodos;
