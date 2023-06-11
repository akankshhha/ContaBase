import { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getCountryWiseData } from '../../../Services/covidCasesService'
import "leaflet/dist/leaflet.css";
import L from 'leaflet'

const CountrywiseData = () => {
    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        getCountryWiseData().then((data) => setCountryData(data))
    }, [])

    return (
        <div className='p-5 m-5 m-auto'>
            <MapContainer center={[19.0760, 72.8777]} zoom={11} style={{ height: '25rem' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {countryData.map((country: any) => {
                    // const icon = L.icon({
                    //     iconUrl: country.flag,
                    //     iconSize: [32, 32]
                    // })
                    return (
                        <Marker position={[country.countryInfo.lat, country.countryInfo.long]} key={country.country} >
                            <Popup>
                                <div style={{ fontFamily: 'Poppins' }}>
                                    <div className='flex items-center'>
                                        <h2 className='font-bold text-base'>{country.country}</h2>
                                        <img src={country.countryInfo.flag} className='w-6 h-4 mx-2' alt='flag' />
                                    </div>
                                    <p className='font-semibold text-yellow-700'>Active cases: {country.active}</p>
                                    <p className='text-green-700 font-semibold'>Recovered cases: {country.recovered}</p>
                                    <p className='text-red-700 font-semibold'>Deaths: {country.deaths}</p>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}

            </MapContainer>
        </div>

    )
}

export default CountrywiseData