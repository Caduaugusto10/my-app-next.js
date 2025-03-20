import React from 'react';
import styles from './ProfileCard.module.css';

const ProfileCard = ({ title, description, icon }) => {
    return (
        <div className={styles.card}>
            <img src={icon} alt={`${title} icon`} className={styles.icon} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProfileCard;