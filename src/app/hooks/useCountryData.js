'use client'

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useCountryData = ({ searchType, searchValue }) => {
//   console.log(searchValue)
//   const [countryData, setCountryData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCountryData = async () => {
//       try {
//         let url = `https://restcountries.com/v3.1/${searchType}/${searchValue}`;
//         if (searchType === 'all') {
//           url = 'https://restcountries.com/v3.1/all';
//         } else if (!searchValue) {
//           setCountryData([]);
//           setLoading(false);
//           return
//         }
//         const response = await axios.get(url);
//         setCountryData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching country data:', error);
//         setLoading(false);
//       }
//     };

//     fetchCountryData();
//   }, [searchType, searchValue]);

//   return { countryData, loading };
// };

// export default useCountryData;

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountryDataContext = createContext();

export const useCountryDataContext = () => useContext(CountryDataContext);

export const CountryDataProvider = ({ children }) => {
  const [allCountryData, setAllCountryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCountryData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setAllCountryData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country data:', error);
        setLoading(false);
      }
    };

    fetchAllCountryData();
  }, []);

  return (
    <CountryDataContext.Provider value={{ allCountryData, loading }}>
      {children}
    </CountryDataContext.Provider>
  );
};
