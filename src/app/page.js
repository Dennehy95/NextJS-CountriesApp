import styles from '@/styles/page.module.scss'

import CountryCard from '@/app/components/card/countryCard'

const mockData = {
  countryData: [
    [{ "name": { "common": "Ireland", "official": "Republic of Ireland", "nativeName": { "eng": { "official": "Republic of Ireland", "common": "Ireland" }, "gle": { "official": "Poblacht na hÉireann", "common": "Éire" } } }, "tld": [".ie"], "cca2": "IE", "ccn3": "372", "cca3": "IRL", "cioc": "IRL", "independent": true, "status": "officially-assigned", "unMember": true, "currencies": { "EUR": { "name": "Euro", "symbol": "€" } }, "idd": { "root": "+3", "suffixes": ["53"] }, "capital": ["Dublin"], "altSpellings": ["IE", "Éire", "Republic of Ireland", "Poblacht na hÉireann"], "region": "Europe", "subregion": "Northern Europe", "languages": { "eng": "English", "gle": "Irish" }, "translations": { "ara": { "official": "جمهورية أيرلندا", "common": "أيرلندا" }, "bre": { "official": "Republik Iwerzhon", "common": "Iwerzhon" }, "ces": { "official": "Irsko", "common": "Irsko" }, "cym": { "official": "Republic of Ireland", "common": "Ireland" }, "deu": { "official": "Republik Irland", "common": "Irland" }, "est": { "official": "Iirimaa", "common": "Iirimaa" }, "fin": { "official": "Irlannin tasavalta", "common": "Irlanti" }, "fra": { "official": "République d'Irlande", "common": "Irlande" }, "hrv": { "official": "Republika Irska", "common": "Irska" }, "hun": { "official": "Ír Köztársaság", "common": "Írország" }, "ita": { "official": "Repubblica d'Irlanda", "common": "Irlanda" }, "jpn": { "official": "アイルランド共和国", "common": "アイルランド" }, "kor": { "official": "아일랜드 공화국", "common": "아일랜드" }, "nld": { "official": "Republic of Ireland", "common": "Ierland" }, "per": { "official": "ایرلند", "common": "ایرلند" }, "pol": { "official": "Republika Irlandii", "common": "Irlandia" }, "por": { "official": "República da Irlanda", "common": "Irlanda" }, "rus": { "official": "Ирландия", "common": "Ирландия" }, "slk": { "official": "Írska republika", "common": "Írsko" }, "spa": { "official": "República de Irlanda", "common": "Irlanda" }, "srp": { "official": "Република Ирска", "common": "Ирска" }, "swe": { "official": "Irland", "common": "Irland" }, "tur": { "official": "İrlanda Cumhuriyeti", "common": "İrlanda" }, "urd": { "official": "جمہوریہ جزیرہ آئرلینڈ", "common": "جزیرہ آئرلینڈ" }, "zho": { "official": "爱尔兰共和国", "common": "爱尔兰" } }, "latlng": [53.0, -8.0], "landlocked": false, "borders": ["GBR"], "area": 70273.0, "demonyms": { "eng": { "f": "Irish", "m": "Irish" }, "fra": { "f": "Irlandaise", "m": "Irlandais" } }, "flag": "\uD83C\uDDEE\uD83C\uDDEA", "maps": { "googleMaps": "https://goo.gl/maps/hxd1BKxgpchStzQC6", "openStreetMaps": "https://www.openstreetmap.org/relation/62273" }, "population": 4994724, "gini": { "2017": 31.4 }, "fifa": "IRL", "car": { "signs": ["IRL"], "side": "left" }, "timezones": ["UTC"], "continents": ["Europe"], "flags": { "png": "https://flagcdn.com/w320/ie.png", "svg": "https://flagcdn.com/ie.svg", "alt": "The flag of Ireland is composed of three equal vertical bands of green, white and orange." }, "coatOfArms": { "png": "https://mainfacts.com/media/images/coats_of_arms/ie.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/ie.svg" }, "startOfWeek": "monday", "capitalInfo": { "latlng": [53.32, -6.23] } }],
    [{ "name": { "common": "Ireland", "official": "Republic of Ireland", "nativeName": { "eng": { "official": "Republic of Ireland", "common": "Ireland" }, "gle": { "official": "Poblacht na hÉireann", "common": "Éire" } } }, "tld": [".ie"], "cca2": "IE", "ccn3": "372", "cca3": "IRL", "cioc": "IRL", "independent": true, "status": "officially-assigned", "unMember": true, "currencies": { "EUR": { "name": "Euro", "symbol": "€" } }, "idd": { "root": "+3", "suffixes": ["53"] }, "capital": ["Dublin"], "altSpellings": ["IE", "Éire", "Republic of Ireland", "Poblacht na hÉireann"], "region": "Europe", "subregion": "Northern Europe", "languages": { "eng": "English", "gle": "Irish" }, "translations": { "ara": { "official": "جمهورية أيرلندا", "common": "أيرلندا" }, "bre": { "official": "Republik Iwerzhon", "common": "Iwerzhon" }, "ces": { "official": "Irsko", "common": "Irsko" }, "cym": { "official": "Republic of Ireland", "common": "Ireland" }, "deu": { "official": "Republik Irland", "common": "Irland" }, "est": { "official": "Iirimaa", "common": "Iirimaa" }, "fin": { "official": "Irlannin tasavalta", "common": "Irlanti" }, "fra": { "official": "République d'Irlande", "common": "Irlande" }, "hrv": { "official": "Republika Irska", "common": "Irska" }, "hun": { "official": "Ír Köztársaság", "common": "Írország" }, "ita": { "official": "Repubblica d'Irlanda", "common": "Irlanda" }, "jpn": { "official": "アイルランド共和国", "common": "アイルランド" }, "kor": { "official": "아일랜드 공화국", "common": "아일랜드" }, "nld": { "official": "Republic of Ireland", "common": "Ierland" }, "per": { "official": "ایرلند", "common": "ایرلند" }, "pol": { "official": "Republika Irlandii", "common": "Irlandia" }, "por": { "official": "República da Irlanda", "common": "Irlanda" }, "rus": { "official": "Ирландия", "common": "Ирландия" }, "slk": { "official": "Írska republika", "common": "Írsko" }, "spa": { "official": "República de Irlanda", "common": "Irlanda" }, "srp": { "official": "Република Ирска", "common": "Ирска" }, "swe": { "official": "Irland", "common": "Irland" }, "tur": { "official": "İrlanda Cumhuriyeti", "common": "İrlanda" }, "urd": { "official": "جمہوریہ جزیرہ آئرلینڈ", "common": "جزیرہ آئرلینڈ" }, "zho": { "official": "爱尔兰共和国", "common": "爱尔兰" } }, "latlng": [53.0, -8.0], "landlocked": false, "borders": ["GBR"], "area": 70273.0, "demonyms": { "eng": { "f": "Irish", "m": "Irish" }, "fra": { "f": "Irlandaise", "m": "Irlandais" } }, "flag": "\uD83C\uDDEE\uD83C\uDDEA", "maps": { "googleMaps": "https://goo.gl/maps/hxd1BKxgpchStzQC6", "openStreetMaps": "https://www.openstreetmap.org/relation/62273" }, "population": 4994724, "gini": { "2017": 31.4 }, "fifa": "IRL", "car": { "signs": ["IRL"], "side": "left" }, "timezones": ["UTC"], "continents": ["Europe"], "flags": { "png": "https://flagcdn.com/w320/ie.png", "svg": "https://flagcdn.com/ie.svg", "alt": "The flag of Ireland is composed of three equal vertical bands of green, white and orange." }, "coatOfArms": { "png": "https://mainfacts.com/media/images/coats_of_arms/ie.png", "svg": "https://mainfacts.com/media/images/coats_of_arms/ie.svg" }, "startOfWeek": "monday", "capitalInfo": { "latlng": [53.32, -6.23] } }]
  ]
}

// TODO - could make this dynamic for filters or different states. Will leave is constant for now
// const dataTypesToShow = [{type: 'name', label: 'Country Name: ', type: 'capital', label: 'Country Capital: ', type: 'population', label: 'Population: '}]

// const getDataToDisplay = (allData) => {
//   return allData.map((data) => {
//     const filteredData = []
//     dataTypesToShow.forEach((dataTypeToShow) => {
//       if (data[dataTypeToShow.type]) {
//         filteredData.push = data[dataType.type];
//       }
//     });
//   })
// }
// console.log(mockData.countryData)
console.log(mockData.countryData[0][0])

export default function Home () {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Countries App</h1>

      {mockData.countryData.map((country, index) => (
        <CountryCard
          key={index}
          capital={country[0].capital}
          name={country[0].name?.official || country[0].name?.common || ''}
          population={country[0].population}
          flagImage={country[0].flags?.png || country[0].flags?.jpg || ''}
          onClickMoreDetails={() => {
            // Handle "More Details" button click
          }}
        />
      ))}
    </main>
  )
}
