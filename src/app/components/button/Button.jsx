import React from 'react';

import styles from './button.module.scss';

const Button = ({ buttonText = '', onClick }) => {
    return (
        <button
            className={styles['button']}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

export default Button;
