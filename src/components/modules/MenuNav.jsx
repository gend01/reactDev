import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../modules/styles.module.css";



export default function Menu({ links }) {
    return (
        <ul>
            {links.map(({ name, href}) => (
                <li key={href}>
                    <NavLink exact className="nav-link" styles={styles} to={href}>{name}</NavLink>
                </li>
            ))}
        </ul>
    );
}
