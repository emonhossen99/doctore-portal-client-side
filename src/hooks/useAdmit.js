import { useState,useEffect } from "react";

const useAdmit = user => {
   const [admit,setAdmit] = useState(false)
   const [admitLoading,setAdmitLoading] = useState(true)

   useEffect( () => {
      const email = user?.email;
      if(email){
          fetch(`https://morning-wave-20718.herokuapp.com/admit/${email}`, {
          method: 'GET',
          headers: {
            'content-type' : 'application/json',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
      })
      .then(res =>  res.json())
      .then(data => {
         setAdmit(data.admit)
         setAdmitLoading(false)
      })
      }
  },[user])
  return [admit,admitLoading]
   
    
}
export default useAdmit;