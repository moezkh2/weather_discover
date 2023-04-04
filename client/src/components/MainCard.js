import React from 'react'
import styled from 'styled-components'


const MainCardContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: 1fr 1fr;
    max-width:90%;
    height:90%;
    background-image: radial-gradient( circle 588px at 31.7% 40.2%,  rgba(225,200,239,1) 21.4%, rgba(163,225,233,1) 57.1% );
    padding-left: 3%;
    padding-bottom: 1%;
    border-radius:10px;
    `

const Details_container = styled.div`
grid-row: 2;`

const Details = styled.div`
font-size:1rem;
font-weight:bold;
line-height: 200%;
color: #480606;`
const Details_values = styled.span`
color: #4d4df9;
`

const Icon = styled.img.attrs(props => ({
    src: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
    alt: "icon"
}))`
height:100%;
object-fit: cover;
justify-self: center;
`;

const Date = styled.h1`
font-size:1.5rem;
grid-column:1;
color: #5e5e5e;
margin-bottom: 0px;

`;

const Temperature_container = styled.div`
display: flex;
align-items: baseline;

`
const Max_temperature = styled.h1`
margin-right: 10px;
color: #0b6e61;
margin-top: 0px;

`
const Min_temperature = styled.h2`
color: #0b6e61;
margin-top: 0px;
`
const Main_status = styled.h1`
font-weight: bold;
font-size: 2.5em;
margin-top: 0px;
color: #282525;
grid-column:2;
justify-self: center;
align-self: center;
`


const MainCard = (
    { weather = {
        date: 1210981217,
        iconId: "10d",
        maxT: 21.22,
        minT: 13.11,
        mStatus: "Cloudy",
        pressure: 1017,
        humidity: 51,
        wSpeed: 3
    } }
) => {
    const date = new window.Date(weather.date * 1000);

    return (
        <MainCardContainer>
            <div>
                <Date>{date.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</Date>
                <Temperature_container>
                    <Max_temperature>{weather.maxT.toFixed(1)}°C</Max_temperature>
                    <Min_temperature>{weather.minT.toFixed(1)}°C</Min_temperature>
                </Temperature_container>

            </div>

            <Icon icon={weather.iconId}></Icon>
            <Details_container>
                <Details>Pressure:< Details_values> {weather.pressure}hPa</Details_values> </Details>
                <Details>Humidity:<Details_values> {weather.humidity}%</Details_values></Details>
                <Details>Wind speed:<Details_values> {weather.wSpeed} mph</Details_values> </Details>
            </Details_container>

            <Main_status> {weather.mStatus}</Main_status>

        </MainCardContainer >

    )
}

export default MainCard