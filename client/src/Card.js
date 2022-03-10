import React from 'react'
import styled from 'styled-components'

const Card_Container = styled.div`
width: 15rem;
height: 18rem;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 20% 1fr 1fr;
  background-color: white;
  border-radius:10px;
  align-items: center;
  justify-items: center;
  align-content: center;
  box-shadow: 10px 10px 100px -24px rgba(0,0,0,0.41);
-webkit-box-shadow: 10px 10px 100px -24px rgba(0,0,0,0.41);
-moz-box-shadow: 10px 10px 100px -24px rgba(0,0,0,0.41);
  `;
const Date = styled.h1`
grid-column:1/3
  `;
const Temperature_container = styled.div`
display: flex;
align-items: baseline

`
const Main_status = styled.h1`
margin-top: 0px
`
const Icon = styled.img.attrs(props => ({
    src: "http://openweathermap.org/img/wn/10d@2x.png",
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
const Max_temperature = styled.h1`
margin-right: 10px;`
const Min_temperature = styled.h2`
color:grey;
`
const Details_container = styled.div`
grid-row: 3;`
const Details = styled.div`
font-size:1.1rem;
font-weight:bold;
line-height: 200%;
color:grey;
`

const Card = () => {
    return (
        <Card_Container>

            <Date>Mon 14</Date>
            <Icon ></Icon>

            <Main>
                <Temperature_container>

                    <Max_temperature>21°</Max_temperature>
                    <Min_temperature>13°</Min_temperature>

                </Temperature_container>

                <Main_status>Cloudy</Main_status>
            </Main>


            <Details_container>
                <Details>Pressure: 1017</Details>
                <Details>Humidity: 51</Details>
                <Details>Wind_speed: 3</Details>
            </Details_container>


        </Card_Container>
    )
}

export default Card