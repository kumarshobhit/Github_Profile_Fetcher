import React from 'react'

const RepoItem = ({repos}) => {
    return (
        <div>
        {repos.map(repo=>(
              <div className="card" key={repo.id}>
         <h3>
         <a href={repo.html_url}>{repo.name}</a>
         </h3>   
        </div>
        ))}
        </div>
    )
}

export default RepoItem
