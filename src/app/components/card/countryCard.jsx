import React from 'react';

import Image from 'next/image';

import Button from '@/app/components/button/Button';

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
                <div className={styles['top-details-section']}>
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
                                <dt>
                                    <h4>{data.label}</h4>
                                </dt>
                                <dd>
                                    <label>{data.value}</label>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div>
                    <dl className={styles['description']}>
                        <dl className={styles[('description', 'extra')]}></dl>
                        {extraDataToDisplay.map((data, index) => (
                            <div
                                key={index}
                                className={styles['card-description-list']}
                            >
                                {data.value ? <dt>{data.label}</dt> : null}
                                {data.value ? <dd>{data.value}</dd> : null}
                            </div>
                        ))}
                    </dl>
                </div>
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
