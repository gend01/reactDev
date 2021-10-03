import React from "react";
import PropTypes from 'prop-types';
import {getDateFromLocale} from '../../../../../lib/helpers';
import styles from './styles.module.css';


function Post({ title, body, id, userId }) {
    const{post, post__title, post__description} = styles;
    return (
        <div className={styles.post}>
            <h2 className={styles.post__title}>{title}</h2>
            <p className={styles.post__description}>{body}</p>
            <span>{id}</span>
            <strong>{userId}</strong>
        </div>
    )
}


Post.defaultProps = {
    title: "default title",
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
};
export default Post;