import React from 'react';
import styles from './Input.module.css';

const Input = ({ title, className, ...props }) => {
    return (
        <div className={styles.inputContainer}>
            <label>{title}</label>
            <input type="text" className={`${styles.input} ${className}`} {...props} />
        </div>
    );
};

export default Input;