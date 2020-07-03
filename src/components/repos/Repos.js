import React, { useContext } from 'react';
import { Repoitem } from './Repoitem';
import { GithubContext } from '../../context/github/githubContext';



export const Repos = () => {

    const githubContext = useContext(GithubContext);

    const { repos } = githubContext

    return repos.map(repo => <Repoitem repo={repo} key={repo.id}/>)
}