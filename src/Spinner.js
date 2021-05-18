import React from 'react'
import spinner from './spinner.gif'
function Spinner() {
    return (
        <div>
            <img src={spinner} alt="lloading.." style={{width:'200px', margin:'auto',display:'block'}} />
        </div>
    )
}

export default Spinner
