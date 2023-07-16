import React from 'react';
import {Link} from 'react-router-dom';

export default function HomePage() {
    return (
        <>
       <h1>Home</h1>
        <div>
            <img className='img-home' src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80" alt="Plant"/>
        </div>
        <br/>
       <div className='form-container-button'>
        <Link exact to="/plants/add">Add a Plant</Link>
       </div>
       <br/>
       <div className='form-container-button'>
        <Link exact to="/plants">My Plants</Link>
       </div>
       </>
    )
}



