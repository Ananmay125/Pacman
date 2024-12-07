"use client"
import { signIn } from 'next-auth/react'
import { Component } from 'react';

class GitHubButton extends Component {
    render(){
        return <button onClick={() => signIn("github")} className="github-button" type="submit">Signin with GitHub</button>;
    }
}

export default GitHubButton;