import React, { useEffect } from 'react'
import axios from 'axios'

const ViewCategory = () => {
  useEffect(()=>{
 async function allcategory(){
     let data =await axios.get("http://localhost:3000/api/v1/product/viewcategory")
     console.log(data.data);
     

   }
   allcategory()

  },[])
  return (
    <div>ViewCategory</div>
  )
}

export default ViewCategory