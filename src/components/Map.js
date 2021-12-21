import React,{useState,useEffect,useRef} from 'react';
import mapboxgl from 'mapbox-gl';
import './Main.css'
mapboxgl.accessToken = 'pk.eyJ1Ijoia2oyb3AiLCJhIjoiY2t4N2hvNjZ4MDZqdTJwcWNic2hkMjlkdCJ9.69o_ZpWglAb4c58BCFfyng';

function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
 
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
        .then(res=>res.json()).then(res=>{setdata(res);setloading(!loading)})
    }, [loading])


    useEffect(() => {
        if (map.current) return;
        if(loading===true){
            map.current = new mapboxgl.Map({ 
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [77,20],
                zoom: 5
                })
                data.forEach(e=>{
                    const {long , lat} = e.countryInfo;
                    const {active,country} = e;
                    new mapboxgl.Marker({
                        closeButton: false,
                        closeOnClick: false                       
                    })
                    .setLngLat([long , lat])
                    .setPopup(new mapboxgl.Popup().setHTML(`<h2>${country}<br/>Active cases : ${active}</h2>`))
                    .addTo(map.current)
                })   
        }
        },[loading,data]);
    return (
        <div ref={mapContainer} className="map-container" id='map'>
        </div>      
    )
}

export default Map


