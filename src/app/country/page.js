'use client'

import { useRouter, useSearchParams } from 'next/navigation';

import { CountryDataProvider, useCountryDataContext } from '@/app/hooks/useCountryData';

import Button from '@/app/components/button/button';
import BorderingCountrySection from '../components/countries/BorderingCountrySection';
import CountryCard from '../components/card/countryCard';

import styles from '@/styles/page.module.scss'
import '../globals.scss'

const Country = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const countryName = searchParams.get('name')
  const { allCountryData, loading } = useCountryDataContext();

  const selectedCountryData = allCountryData.filter((country) => country.name.official === countryName || country.name.common === countryName)

  console.log(allCountryData)
  if (!countryName) {
    return <p>No country name provided.</p>;
  }

  const getBorderingCountries = (country) => {
    const borderCodes = country.borders
    if (!borderCodes || borderCodes.length === 0) return []
    return allCountryData.filter((country) => {
      return borderCodes.includes(country.cca3) || borderCodes.includes(country.cioc);
    }).map((country) => {
      return { name: country.name, flags: country.flags, population: country.population };
    });
  }

  console.log(selectedCountryData[0]?.name.official)
  // TODO - can we use the main page here, maube through layout? Dont have to duplicate
  return (
    <CountryDataProvider>
      <main className={styles.main}>
        <h1 className={styles.heading}>Countries App</h1>
        <Button
          buttonText='Go Back'
          onClick={() => router.back()}
        />
        <div>
          {selectedCountryData.map((country, index) => {
            const flag = country.flags?.png || country.name?.jpg
            const name = country.name?.official || country.name?.common
            const capital = country.capital
            const population = country.population
            const currency = Object.values(country.currencies).map((currency) => currency.name).join(', ')
            const languages = Object.values(country.languages).join(', ')

            const borderingCountries = getBorderingCountries(country)
            console.log(borderingCountries)

            return (
              <div key={index}>
                <CountryCard currency={currency} flagImage={flag} flagImageAltText={`Flag of ${name}`} capital={capital} languages={languages} population={population} name={name} />
                {/* <div className={styles['flag-container']}>

                  {flag && (
                    <div>
                      <Image src={flag} alt={`Flag of ${name}`} width={320} height={213} />
                    </div>
                  )}
                </div>

                <div>
                  <h1>{name}</h1>
                  <p>Capital: {capital}</p>
                  <p>Population: {population}</p>
                  <p>Currency: {currency}</p>
                  <p>Languages: {languages}</p>
                </div> */}

                <div>
                  <h2>Bordering countries</h2>
                  <BorderingCountrySection borderingCountries={borderingCountries} />
                </div>
              </div>
            )
          }
          )}
        </div>
      </main>
    </CountryDataProvider>
  );
};

export default Country;