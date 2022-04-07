/* import './App.css'; */
import { useEffect, useContext } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import useWindowSize from './useWindowSize'
import Card from './Card'
import styled from 'styled-components'
import InputAuto from './InputAuto'
import { CoordinatesContext } from './CoordinatesContext';
import axios from 'axios';
import MainCard from './MainCard';
const MainContainer = styled.div`
display:grid;
grid-template-rows: 10vh 50vh 1fr;
width:100vw;
justify-content: center;
align-items: center;
justify-items: center;
`
const Carousel = styled.div`

position: relative;
grid-row: 3;
`

const CardContainer = styled.div`

display: inline flow;
justify-content: center;
gap:15px;
width:100vw;
overflow-y: hidden ;
overflow-x: hidden;
&::-webkit-scrollbar{
    background-color: #85ffbd;
    background-image: linear-gradient(45deg, #85ffbd 0%, #fffb7d 100%);
}

`
const ScrollLeft = styled.div`
display: ${props => props.isScrollVissible ? "flex" : "none"};
align-items: center;
justify-content: center;
position: absolute;
left:0px;
width:2.5rem;
height:100%;
border: none;
    z-index: 1;
`

const ScrollRight = styled.div`
display: ${props => props.isScrollVissible ? "flex" : "none"};
align-items: center;
justify-content: center;
position: absolute;
right:0px;
width:2.5rem;
height:100%;
border: none;
    z-index: 1;
`

function App() {

  const { coordinates, weatherData, setWeatherData, sideScroll } = useContext(CoordinatesContext);


  const [isScrollVissible, reff] = useWindowSize();


  const fetchWeatherData = async () => {
    try {

      const response = await axios.get(`/weather/${coordinates.lat}/${coordinates.lng}`);
      setWeatherData(response.data.daily)
      console.log(response)

    } catch (error) {
      console.log("can't get weather data")
    }

  }


  useEffect(() => {

    if (coordinates.lat !== undefined && coordinates.lng !== undefined) {
      fetchWeatherData()
    }

  }, [coordinates])


  return (
    <MainContainer>

      <InputAuto />

      {weatherData.length !== 0 ? <MainCard
        weather={{

          date: weatherData[0].dt,
          iconId: weatherData[0].weather[0].icon,
          maxT: weatherData[0].temp.max,
          minT: weatherData[0].temp.min,
          mStatus: weatherData[0].weather[0].main,
          pressure: weatherData[0].pressure,
          humidity: weatherData[0].humidity,
          wSpeed: weatherData[0].wind_speed

        }}

      /> : null}


      <Carousel  >

        <ScrollLeft isScrollVissible={isScrollVissible} >
          <AiOutlineArrowLeft onClick={() => sideScroll(reff, 25, 150, -10)} size={28} />
        </ScrollLeft>

        <ScrollRight isScrollVissible={isScrollVissible} >
          <AiOutlineArrowRight onClick={() => sideScroll(reff, 25, 150, 10)} size={28} />
        </ScrollRight>

        <CardContainer style={{ position: "relative" }} ref={reff}>

          {weatherData.map((el, index) => {
            if (index !== 0) {
              return <Card weather={{

                date: el.dt,
                iconId: el.weather[0].icon,
                maxT: el.temp.max,
                minT: el.temp.min,
                mStatus: el.weather[0].main,
                pressure: el.pressure,
                humidity: el.humidity,
                wSpeed: el.wind_speed

              }} />
            }

          })}

        </CardContainer>
      </Carousel>
    </MainContainer >

  );
}

export default App;
