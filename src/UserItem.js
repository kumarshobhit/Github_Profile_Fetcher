import { Link } from "react-router-dom"

const  UserItem=({users}) => {
    return (
        <div style={userStyle}>
        {users.map(user=>(
             <div className='card text-center' key={user.id}>
        <img src={user.avatar_url} alt="" className='round-img' style={{width:'60px'}} />
        <h3>{user.login}</h3>
        <div>
        <Link to={`user/${user.login}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
        </div>
        ))}
        </div>
    )
}

const userStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
} 

export default UserItem
