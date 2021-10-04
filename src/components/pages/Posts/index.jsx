import React, { useEffect, useState } from "react";

import styles from './styles.module.css';
import List from "./components/List";
import Button from "../../modules/Button";

function Posts() {

   const [state, setState] = useState({
       posts: [],
   });




    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => response.json())
        .then((data) => setState({ ...state, posts: data}))
    },[])

   



    return (
        <div className={styles.posts}>
            <div className={styles.posts__nav}>
            <h1>Posts</h1>
            <Button
                type="btn"
                title="Add post"
                className="btn__add"
                onClick={() => console.log("clicked")}
            >
            </Button>
            </div>
            <List posts={state.posts} />
        </div>
    )
}
export default Posts;