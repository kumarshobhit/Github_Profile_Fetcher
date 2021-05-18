
import Spinner from './Spinner'
import useFetch from './userFetch'
import RepoItem from './RepoItem'
const  Repo=({username}) => {
    const {data:repos,loading,error}=useFetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    return (
        <div>
          {error && <div>{error}</div>}
        {loading && <Spinner/> }
          {repos && <RepoItem repos={repos} />  }   
        </div> 
    )
}

export default Repo
