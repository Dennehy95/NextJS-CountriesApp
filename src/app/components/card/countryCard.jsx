import React from 'react';
import Image from 'next/image';

import Button from '../button/button';

import styles from './countryCard.module.scss';

const CountryCard = ({
    capital = '',
    currency,
    flagImage = '',
    flagImageAltText = 'image',
    handleMoreDetailsClick,
    languages,
    name = '',
    population,
}) => {
    const mainDataToDisplay = [
        { label: 'Country Name: ', value: name },
        { label: 'Capital: ', value: capital },
    ];
    const extraDataToDisplay = [
        { label: 'Population: ', value: population },
        { label: 'Currency: ', value: currency },
        { label: 'Languages: ', value: languages },
    ];
    return (
        <div className={styles['card-container']}>
            <div className={styles['card-details-container']}>
                {flagImage && (
                    <Image
                        alt={flagImageAltText}
                        className={styles['top-left-image']}
                        height={80}
                        src={flagImage}
                        width={120}
                    />
                )}
                <dl className={styles['description']}>
                    {mainDataToDisplay.map((data, index) => (
                        <div
                            key={index}
                            className={styles['card-description-list']}
                        >
                            <dt>{data.label}</dt>
                            <dd>{data.value}</dd>
                        </div>
                    ))}
                    <dl className={styles[('description', 'extra')]}></dl>
                    {extraDataToDisplay.map((data, index) => (
                        <div
                            key={index}
                            className={styles['card-description-list']}
                        >
                            <dt>{data.label}</dt>
                            <dd>{data.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            {handleMoreDetailsClick && (
                <div className={styles['button-container']}>
                    <Button
                        buttonText='More Details'
                        onClick={handleMoreDetailsClick}
                    />
                </div>
            )}
        </div>
    );
};

export default CountryCard;
