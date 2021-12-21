import React from 'react'
import './Main.css'
import CountUp from 'react-countup';

function Card(props) {
    const date = new Date().toLocaleDateString();
    return (
        <>
        <span className='secondary_status1'>
            <span>Infected</span>
            <span><b><CountUp start={0} end={props.active} duration={2.5} separator=','/></b></span>
            <span>{date}</span>
            <span>Number of Active Cases of Covid-19 </span>
        </span>
        <span className='secondary_status2'>
            <span>Recovered</span>
            <span><b><CountUp start={0} end={props.recovered} duration={2.5} separator=','/></b></span>
            <span>{date}</span>
            <span>Number of Recovered Cases from Covid-19</span>
        </span>
        <span className='secondary_status3'>
            <span>Deaths</span>
            <span><b><CountUp start={0} end={props.deaths} duration={2.5} separator=','/></b></span>
            <span>{date}</span>
            <span>Number of Deaths caused by Covid-19</span>
        </span>
        </>
    )
}

export default Card
