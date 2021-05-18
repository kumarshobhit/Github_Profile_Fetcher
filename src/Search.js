import React,{useState} from 'react'
import Alert from './Alert'
import UserItem from './UserItem'

const Search = () => {
    
    const [info,setInfo]=useState(null) 
    const [loading,setLoading]=useState(false)
    // if user fills an empty string
    const [alert,setAlert]=useState(null)

    const handleAlert= () => {
        setAlert({msg:'Please enter something',type:'light'})
        setTimeout(()=>setAlert(null),1000)
    }

     const handleSubmit = e => {
        e.preventDefault()
        const username=e.target.text.value
        if(username==='') handleAlert()
        else {
             e.target.text.value=''
        setLoading(true)
        fetch(`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        .then(res=>{
            if(!res.ok)  throw Error('could not fetch the data')
            return res.json()
        }).then(data=>{
             setInfo(data.items) ;
            setLoading(false)
        })
        .catch(e=>{
            setLoading(false) 
        })
        }
    }

    const clearUsers= () => {
        setInfo(null)
    }

     

    return (
        <div>
            <Alert alert={alert}/>
            <h2>Search for a User</h2>
            <form action="" className="form" onSubmit={handleSubmit}>
            <input type="text" name="text" id="" placeholder="Search Users..."  />
            {!loading && <button className='btn btn-dark btn-block'>Search</button> }   
            {loading && <button className='btn btn-dark btn-block'>Searching..</button> }   
            </form>
           {info && <button className="btn bnt-light btn-block" onClick={clearUsers}>Clear</button> } 
            {info && <UserItem users={info} />  }   
        </div>
    )
}

export default Search
