import React,{Fragment} from 'react'
import {useParams} from 'react-router'
import { Link } from 'react-router-dom'
import Repo from './Repo'
import Spinner from './Spinner'
import useFetch from './userFetch'

const User = () => {
    const {id}=useParams()
    const {data:user,loading,error}=useFetch(`https://api.github.com/users/${id}`)
    return (
        <div>
        {error && <div>{error}</div>}
        {loading && <Spinner/> }
        <Link to='/' className="btn  btn-light ">
        Back to Search
        </Link>

        Hireable:
        {user.hireable ? (<i className="fas fa-check text-success" />) : (<i className="fas fa-times-circle text-danger" />)}

         <div className="card grid-2">
        <div className="all-center">
        <img className='round-img' src={user.avatar_url} alt="" style={{width:'150px'}} />
        <h1>{user.name}</h1>
        <p>Location:{user.location}</p>
        </div>

        <div>
        {user.bio && <Fragment>
        <h3>Bio</h3>
        <p>{user.bio}</p>
        </Fragment>}

        <Link to={user.html_url} className='btn btn-dark my-1'>Visit Github Profile</Link>
        <ul>
        <li>
        {user.login && <Fragment>
            <strong>Username:</strong>{user.login}
            </Fragment>} 
        </li>
         <li>
        {user.company && <Fragment>
            <strong>Company:</strong>{user.company}
            </Fragment>} 
        </li>
         <li>
        {user.blog && <Fragment>
            <strong>Blog:</strong>{user.blog }
            </Fragment>} 
        </li>
        </ul>
    </div>
    </div>
    <div className="card text-center">
    <div className="badge badge-primary">Followers:{user.followers}</div>
    <div className="badge badge-success">Following:{user.following}</div>
    <div className="badge badge-danger">Public Repos:{user.public_repos}</div>
    <div className="badge badge-dark">Public Gists:{user.public_gists}</div>
    </div>
    <Repo username={user.login} />

            </div>
    )
}

export default User
