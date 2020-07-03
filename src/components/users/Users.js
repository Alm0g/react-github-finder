import React, { useContext } from 'react';
import { UserItem } from './UserItem';
import { Spinner } from '../layout/Spinner'
import { GithubContext } from '../../context/github/githubContext';


export const Users = () => {

    const GitContext = useContext(GithubContext);

    const { loading, users } = GitContext;

    const userStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gripGap: '1rem'
    }

    return (
        <div>
            {
             loading
             ? <Spinner /> 
             : <div style={userStyle}>
                {users.map(
                    user => <UserItem key={user.id} user={user}/>
                )}
                </div>
            } 
        </div>
    )

}