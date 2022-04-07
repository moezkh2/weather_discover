import React from 'react'
import styled from 'styled-components'

const Card_Container = styled.div`
padding: 10px;
width: 10rem;
height: 14rem;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 20% 1fr 1fr;
  border-radius:10px;
  align-items: center;
  justify-items: center;
  align-content: center;
background-color: #D9AFD9;
background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
  
`;
const Date = styled.h1`
grid-column:1/3;
color: #5e5e5e;
margin-bottom: 0px;
  `;

const Main_status = styled.h1`
margin-top: 0px;
color: #282525;
`
const Icon = styled.img.attrs(props => ({
    src: `http://openweathermap.org/img/wn/${props.icon}@2x.png`,
    alt: "icon"
}))`
height:150%;
object-fit: cover;
grid-row: 2;
grid-column:1/3
`;
const Main = styled.div`
grid-row: 3;
`
const Temperature_container = styled.div`
display: flex;
align-items: baseline;
`
const Max_temperature = styled.span`
font-size:1.8rem;
margin-right: 10px;
color: #0b6e61;
`
const Min_temperature = styled.span`
font-size:1.4rem;
color: #0b6e61;
`

const Card = ({ weather = {
    date: 1210981217,
    iconId: "10d",
    maxT: "21°",
    minT: "13°",
    mStatus: "Cloudy",
    pressure: "1017",
    humidity: "51",
    wSpeed: "3"
} }) => {

    const date = new window.Date(weather.date * 1000);

    return (
        <Card_Container>

            <Date>{date.toLocaleDateString("en-US", { day: 'numeric', weekday: 'short' })}</Date>
            <Icon icon={weather.iconId}></Icon>

            <Main>
                <Temperature_container>
                    <Max_temperature>{weather.maxT.toFixed(1)}°C</Max_temperature>
                    <Min_temperature>{weather.minT.toFixed(1)}°C</Min_temperature>
                </Temperature_container>

                <Main_status>{weather.mStatus}</Main_status>
            </Main>

        </Card_Container>
    )
}

export default Card