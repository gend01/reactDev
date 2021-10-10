import React from "react";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {getDateFromLocale} from '../../../../../lib/helpers';
import styles from './styles.module.css';


function Post({ title, body, id, userId }) {
    const{post, post__title, post__description} = styles;
    

    return (
        <div className={post}>
            <h2 className={post__title}><Link to={`/post/${id}`}>{title}</Link></h2>
            <p className={post__description}>{body}<Link to={`/post/${id}`}>...more</Link></p>
            <span>{id}</span>
            <strong>{userId}</strong>
        </div>
    )
}


Post.defaultProps = {
    title: "default title",
    body: "default body",
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
};
export default Post;