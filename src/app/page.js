'use client'
import { useRouter } from 'next/navigation';

import { useCountryDataContext } from '@/hooks/useCountryData';

import CountryCard from '@/app/components/card/countryCard'

import styles from '@/styles/page.module.scss'

//TODO implement a real loader

const Home = () => {
  const router = useRouter();
  const { allCountryData, loading } = useCountryDataContext();

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Countries App</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles['card-grid-container']}>
          {allCountryData.map((country, index) => {
            const name = country.name?.official || country.name?.common

            return (
              <CountryCard
                key={index}
                capital={country.capital}
                flagImage={country.flags?.png || country.flags?.jpg || ''}
                handleMoreDetailsClick={() => router.push(`/country?name=${name}`)}
                name={country.name?.official || country.name?.common || ''}
                population={country.population}
              />
            )
          })}
        </div>
      )}
    </main>
  )
}

// TODO For some reason I could not get this to call at all. Going to useClient for now to make progress but should try fix this as we shoukd
// really get the data preload since its always the all country data 

// export async function getServerSideProps () {
//   console.log('----------------')
//   // Fetch the country data here
//   const response = await fetch('https://restcountries.com/v3.1/all');
//   const countryData = await response.json();

//   return {
//     props: {
//       countryData,
//     },
//   };
// }

export default Home;
