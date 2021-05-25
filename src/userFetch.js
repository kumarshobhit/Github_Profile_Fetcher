import  {useEffect,useState} from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null) 
    const [loading,setIsPending]=useState(true) 
    const [error,setError]=useState(null)
    
    
    useEffect (()=> {


        const abortCont= new AbortController() ;

       setTimeout(() => {
            fetch(url,{signal:abortCont.signal})
            .then(res=>{
                if(!res.ok) throw Error('could not fetch the data')
         return res.json()
        }).then(data=>{
            
                setData(data) ;
                setIsPending(false)
                setError(null)
          
        })
           
        .catch(e=>{
            if(e.name==='AbortError'){
                console.log('Aborted')
            }
            else {
            setError(e.message)
            setIsPending(false)
            }
        })
       }, 1000)

       return () => abortCont.abort() ;
    },[url])   ;

    return {data,loading,error}
    
}

   
export default useFetch
