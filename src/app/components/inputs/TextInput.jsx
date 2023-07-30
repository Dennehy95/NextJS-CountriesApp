import React from 'react';

import styles from './TextInput.module.scss';

const TextInput = ({ placeholder = 'Search', value, onChange }) => {
    return (
        <input
            className={styles['text-input']}
            onChange={onChange}
            placeholder={placeholder}
            type='text'
            value={value}
        />
    );
};

export default TextInput;
