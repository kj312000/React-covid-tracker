import React,{useState,useEffect} from 'react';
import Countries from './Countries';
import './Main.css'
import image from './images/image.png'
import Card from './Card'
import Map from './Map';

function Main() {
    const [data, setdata] = useState([])
    const [selected, setselected] = useState("India")
    const [loading, setloading] = useState(false)

    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then(response =>response.json())
            .then(res=>{setdata(res);setloading(true);})
            .catch(err => {
                console.error(err);
            });
    },[])


    const handleCountryChange=(e)=>{
        setselected(e)
    }
    return (
        <div className='Main_component'>
            <img style={{width:"200px",height:"50px",placeContent:"center",marginBottom:"30px"}} src={image} alt="img"/>
            <br/>
            {loading?
                <div className='section'>
                            <div className='Status'>
                            {data.map(e=>{
                                const {active , deaths , recovered} = e
                                if(e.country===selected){
                                    return(<Card key={deaths} active={active} recovered={recovered} deaths={deaths}/>)
                                }
                                return null;
                            })}
                            </div>
                            <div className='visuals'>
                                <div className='countries'>
                                <Countries handleCountryChange={handleCountryChange}/>
                                </div>
                                 <div className='Graph'>
                                 <Map/>
                                 </div>
                            </div>
            </div>:
            <h1><img src='../Loading.gif' alt='img'/></h1>
            }
        </div>
        
    )
}

export default Main
