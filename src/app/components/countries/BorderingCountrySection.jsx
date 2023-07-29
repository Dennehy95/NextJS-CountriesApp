import React from 'react';
import Image from 'next/image';
import styles from './BorderingCountrySection.module.scss';

const BorderingCountrySection = ({ borderingCountries = [], height = 80, width = 120 }) => {
    return (
        <div className={styles['bordering-country-card-wrapper']}>
            {borderingCountries.map((borderingCountry, index) => {
                const borderingCountryFlag =
                    borderingCountry.flags?.png || borderingCountry.name?.jpg;
                const borderingCountryName =
                    borderingCountry.name?.official || borderingCountry.name?.common;
                const borderingCountryPopulation = borderingCountry.population;
                return (
                    <div key={index}>
                        <div className={styles.cardContainer}>
                            <div>
                                <Image
                                    alt={`Flag of ${borderingCountryFlag}`}
                                    height={height}
                                    src={borderingCountryFlag}
                                    width={width}
                                />
                            </div>
                            <div className={styles.cardInfo}>
                                <p>{borderingCountryName}</p>
                                <p>Population: {borderingCountryPopulation}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default BorderingCountrySection;
