// import React,{useState,useEffect} from 'react'

// 

import React,{useState,useEffect} from 'react'

function Api() {

    const[searchTerm,setSearchTerm]=useState('')
    const Search_Api=`https://imdb-api.com/API/SearchAl/k_pl6t3s12/?title={searchTerm}`

    const changeHandler=(e)=>{
    setSearchTerm(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        fetch(Search_Api)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
        })
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type='text'
         placeholder='search movie title'
         value={searchTerm}
         onChange={changeHandler}/>
        </form>
  
    </div>
  )
}

export default Api