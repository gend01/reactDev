import React, { useEffect, useState } from "react";

import styles from './styles.module.css';


function Post(props) {
    const id = props.match.params.id;

    
    const [state, setState] = useState({
        post: { title:'default', body:'default', id:'default' },
        
    });

  


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
    //     .then((data) => console.log(data))
    // },[])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`).then((response) => response.json())
        .then((data) => setState({ ...state, post: data[0]}))
    },[]);

    

    



   const {title, body} = state.post

    return (
        <div>
            <h1 className={styles.post}>{title}</h1>
            <p>{body}</p>
            <span>{id}</span>
        </div>
    )
}
export default Post;