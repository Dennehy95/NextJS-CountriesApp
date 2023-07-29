import React from 'react';

import Image from 'next/image';

import styles from './countryCard.module.scss';

const CountryCard = ({
    capital = '',
    name = '',
    flagImage = '',
    flagImageAltText = 'image',
    onClickMoreDetails,
    population,
}) => {
    const dataToDisplay = [name, capital, population];
    return (
        <div className={styles['card-container']}>
            {flagImage && (
                <Image
                    alt={flagImageAltText}
                    className={styles['top-left-image']}
                    height={50} // Set the height of the image
                    src={flagImage}
                    width={50} // Set the width of the image
                />
            )}
            <div className={styles['description']}>
                {dataToDisplay.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            {/* <button
                className={styles['button']}
                onClick={onClickMoreDetails}
            >
                More Details
            </button> */}
        </div>
    );
};

export default CountryCard;
