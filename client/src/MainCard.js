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
    `

const Details_container = styled.div`
grid-row: 2;`

const Details = styled.div`
font-size:1.1rem;
font-weight:bold;
line-height: 200%;
color: white;`


const Icon = styled.img.attrs(props => ({
    src: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
    alt: "icon"
}))`
height:160%;
object-fit: cover;
justify-self: center;
`;

const Date = styled.h1`
grid-column:1;
color: white;
margin-bottom: 0px;

`;

const Temperature_container = styled.div`
display: flex;
align-items: baseline;

`
const Max_temperature = styled.h1`
margin-right: 10px;
color: white;
margin-top: 0px;

`
const Min_temperature = styled.h2`
color: white;
margin-top: 0px;
`
const Main_status = styled.h1`
margin-top: 0px;
color: white;
grid-column:2;
justify-self: center;
align-self: end;
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
                <Date>{date.toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}</Date>
                <Temperature_container>
                    <Max_temperature>{weather.maxT.toFixed(1)}°C</Max_temperature>
                    <Min_temperature>{weather.minT.toFixed(1)}°C</Min_temperature>
                </Temperature_container>

            </div>

            <Icon icon={weather.iconId}></Icon>
            <Details_container>
                <Details>Pressure: {weather.pressure} </Details>
                <Details>Humidity: {weather.humidity} </Details>
                <Details>Wind speed: {weather.wSpeed} </Details>
            </Details_container>

            <Main_status> {weather.mStatus}</Main_status>

        </MainCardContainer >

    )
}

export default MainCard