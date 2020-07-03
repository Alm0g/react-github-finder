import React, { useEffect, useContext } from 'react';
import {Spinner} from '../layout/Spinner';
import { Link } from 'react-router-dom';
import { Repos } from '../repos/Repos';
import { GithubContext } from '../../context/github/githubContext';


export const User = ({match}) => {

    const githubContext = useContext(GithubContext);

    const { getUser, loading, user, getUserRepos } = githubContext

    useEffect(() => {
        getUser(match.params.login)
        getUserRepos(match.params.login)
        // eslint-disable-next-line
    }, []);

    const {
        name,
        avatar_url,
        location, 
        bio, 
        blog, 
        login, 
        html_url, 
        company,
        followers, 
        following, 
        public_repos, 
        public_gists, 
        hireable
    } = user;

    if (loading) return <Spinner />;

    return (
        
        <div>
            <Link to='/' className='btn btn-light'>
            Back To Search
            </Link>

            Hireable:{' '}
            {hireable ? <p>Yes</p> : <p>No</p>}

            <div className='card grid-2'>

                <div className='all-center'>
                    <img src={avatar_url} className='round-ing' alt='' style={{width: '150px'}} />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>

                <div>

                    {bio && (
                        <div>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                        </div>
                    )}

                    <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>

                    <ul>

                        <li>
                            {login && <div>
                                <strong>Username: </strong> {login}
                            </div>}
                        </li>

                        <li>
                            {company && <div>
                                <strong>Company: </strong> {company}
                            </div>}
                        </li>

                        <li>
                            {blog && <div>
                                <strong>Website: </strong> {blog}
                            </div>}
                        </li>

                    </ul>

                </div>

            </div>

            <div className='card text-center'>

                <div className='badge badge-primary'>Followers: {followers}</div>
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-danger'>Public Repos: {public_repos}</div>
                <div className='badge badge-dark'>Public Gists: {public_gists}</div>

                <Repos />

            </div>

        </div>
    )
}