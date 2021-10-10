import React, { useEffect, useState } from "react";

import styles from './styles.module.css';
import List from "./components/List";
import Button from "../../modules/Button";
import AddPostForm from "./components/AddPostForm";

function Posts() {

   const [state, setState] = useState({
       posts: [],
       isShowAddPostForm: false,
   });




    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`).then((response) => response.json())
        .then((data) => setState({ ...state, posts: data}))
    },[])
    
   const onAddFormSubmit = (fields, isValidForm) => {
        
      
        const fetchFields = fields.reduce((ac, field) => {
            ac[field.name] = field.value;
            return (ac);
            
        }, {});
      
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            body: JSON.stringify({fetchFields}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((post) => {
            setState({ 
                ...state, isShowAddPostForm: false, posts: [...state.posts, {...post.fetchFields, id: post.id, userId: post.id}]});

            }
        );
        
   };
 
   
   
   const onShowForm = () => {
        setState({ ...state, isShowAddPostForm: !state.isShowAddPostForm});
   };
   const onCancelForm = () => {
        setState({ ...state, isShowAddPostForm: false});
   };



    return (
        <div className={styles.posts}>
            <div className={styles.posts__nav}>
            <h1>Posts</h1>
            <Button
                type="btn"
                title="Add post"
                className="btn__add"
                onClick={onShowForm}
            >
            </Button>
            </div>
            <List posts={state.posts} />
            <AddPostForm
                isShow={state.isShowAddPostForm}
                onSubmit={onAddFormSubmit} 
                onCancel={onCancelForm} 
             />
        </div>
    )
}
export default Posts;