
import Spinner from './Spinner'
import useFetch from './userFetch'
import UserItem from './UserItem'
const  Users=() => {
    const {data:users,loading,error}=useFetch('https://api.github.com/users/')
    return (
        <div>
          {error && <div>{error}</div>}
        {loading && <Spinner/> }
          {users && <UserItem users={users} />  }   
        </div> 
    )
}

export default Users
