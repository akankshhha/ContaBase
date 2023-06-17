import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet'
import locationPin from '../../../Assets/location-pin.png'
import { useQuery } from '@tanstack/react-query'

const CountrywiseData = () => {

    const { data } = useQuery(['countryData'], async () => {
        const res = await fetch("https://disease.sh/v3/covid-19/countries");
        console.log(data);
        const result = res.json();
        return await result;
    },)

    return (
        <div className='p-5 m-5 m-auto'>
            <MapContainer center={[19.0760, 72.8777]} zoom={11} style={{ height: '25rem' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {data?.map((country: any) => {
                    const icon = new Icon({
                        iconUrl: locationPin,
                        iconSize: [30, 30]
                    })
                    return (
                        <Marker
                            position={[country.countryInfo.lat, country.countryInfo.long]}
                            key={country.country}
                            icon={icon} >
                            <Popup>
                                <div style={{ fontFamily: 'Poppins' }} >
                                    <div className='flex items-center'>
                                        <h2 className='font-bold text-base'>{country.country}</h2>
                                        <img src={country.countryInfo.flag} className='w-6 h-4 mx-2' alt='flag' />
                                    </div>
                                    <p className='font-semibold text-yellow-600'>Active cases: {country.active}</p>
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