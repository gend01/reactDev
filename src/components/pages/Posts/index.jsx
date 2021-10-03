import React, { useEffect, useState } from "react";

import styles from './styles.module.css';
import RequestApi from "../../../lib/RequestApi";
import List from "./components/List"

function Posts() {

   const [state, setState] = useState({
       posts: [],
   });


   useEffect(() => {
        RequestApi.getPosts().then((data) => {
            console.log(data);
            
            setState({ ...state, posts: data})
            
        });
   },[])

   



    return (
        <div className={styles.posts}>
            <h1>Posts</h1>
            <List posts={state.posts} />
        </div>
    )
}
export default Posts;