import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'

const Dashboard = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5500/datas`)
            .then(res => {
                console.log(res.data);
                setData(res.data)
            })
            .catch(err=>console.log(err))    
    }, [])

  return (
      <>
          {/* {
              data && data.map((d) => {
                  return <div>
                      <p>{d.title}</p>
                  </div>
              })
          } */}
      </>
  )
}

export default Dashboard