# weather_discover
<p align="center">
<img src="https://github.com/moezkh2/weather_discover/assets/17712659/6f1254a6-1f86-48c6-8900-cde3b697004e" >
</p>

<div align="center">
  <img alt="Bower" src="https://img.shields.io/bower/l/mi">
<a href="https://openweathermap.org/api"><img src="https://img.shields.io/badge/openweathermap.com-API-e96e50?style=flat&logo=#00AFAA&logoColor=00AFAA&link=https://openweathermap.org/api" alt="openweathermap.com" /></a>
<a href="https://www.here.com/"><img src="https://img.shields.io/badge/here.com-API-blue?style=flat&logo=#00AFAA&logoColor=00AFAA&link=https://www.here.com/" alt="here.com" /></a>
</div>

## Description

Weather-discover is a react app that gives you the weather forecasts for any place in the globe.
To get the weather forecasts for the location you want, all you have to do is enter the location in the text input, and you will get some places suggestions,  by clicking one of the suggestions, you will get the weather forecasts for the whole week.
this app is based on [here.com API](https://www.here.com) for location suggestions and [OpenWeatherMap.com API](https://openweathermap.org/api)  for weather forecasts.

## [Demo 💥](https://weather-discover.vercel.app/)

## Usage

<div>
<img src="https://github.com/moezkh2/weather_discover/assets/17712659/c4c2002b-010e-44fb-8e93-a92b0d5ee3cd" width=300 height=500>
<img src="https://github.com/moezkh2/weather_discover/assets/17712659/8c6ac8d1-feb4-4c77-8be6-a0a42bc34a21" width=550 height=500>
</div>

## Built With

**Frontend:** React, styled-components

**Backend:** Express, here.com API, OpenWeatherMap.com API

## Installation
To clone and run this application, you'll need Git and node.js (which comes with npm) installed on your computer.
For your command line:
````
git clone https://github.com/moezkh2/weather_discover.git
````
install backend dependencies:
````
npm install
````
install frentend dependencies:
````
cd client
npm install:
````
run dev script to run the backend and the frontend:
````
npm run dev
````

## Environment Variables
To run this project, you will need to add the following environment variables to your .env file.
````
PORT= "5000"
DEVELOPER_HERE_KEY="your here.com API key"
DEVELOPER_HERE_URL="your here.com API URL"

OPEN_WEATHER_MAP_KEY="your openweathermap API key"
OPEN_WEATHER_MAP_URL="your openweathermap API URL"
````
