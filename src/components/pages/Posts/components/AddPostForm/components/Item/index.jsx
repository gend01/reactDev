import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.module.css';


function Item({ name, type, placeholder, onChange, className, errorText, isValid, value }) {

    const inputComponent = type === 'description' ? (
    <textarea 
        name={name} 
        placeholder={placeholder} 
        onChange={onChange} 
        className={styles[className]}
        value={value}
/>) : (
    <input 
        name={name} 
        type={type}
        placeholder={placeholder} 
        onChange={onChange} 
        className={styles[className]}
        value={value}
    />
);

return (
    <div className={styles.form__row}>
        {inputComponent}
        {!isValid && <span>{errorText}</span>}
    </div>
);

   


}



Item.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isValid: PropTypes.bool.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    errorText: PropTypes.string,
};
export default Item;