import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { CoordinatesContext } from '../context/CoordinatesContext'

const InputContainer = styled.div`
grid-row: 1;
width: fit-content;
`
const Input = styled.input`
font-size:1.5rem;
background-color:rgba(0, 0, 0, 0);
color:white;
padding: 10px;
border: 0;
outline: 0;
border-bottom: 2px solid black;
width: 15.5rem;
::placeholder {
    color: white;
  }
`
const Seggestion = styled.div`
display: ${props => props.show ? "block" : "none"};
position: absolute;
width: 16.6rem;
background-color: #fff;

z-index: 1`

const SegItem = styled.div`
padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &:hover {
        background-color: #f1f1f1;
      }
`
const InputAuto = () => {

    const {
        setCoordinates,
        textTofetch,
        setTextTofetch,
        inputState,
        setInputState,
        showSeggestions,
        setShowSeggestions,
        seggestionsResult,
        setSeggestionsResult } = useContext(CoordinatesContext)

    const onChangehendler = (e) => {

        if (Math.abs(e.target.value.length - textTofetch.length) === 3) {
            setTextTofetch(e.target.value)
            setInputState(e.target.value)
        } else if (e.target.value.length === 0) {
            setInputState("")
            setTextTofetch("")
        } else {
            setInputState(e.target.value)
        }

    }

    const onClickItem = (el) => {

        setInputState(el[0]);
        setCoordinates(el[1])
        setShowSeggestions(false);

    }

    const getSeggestios = async () => {
        if (textTofetch.length !== 0) {

            try {

                const results = await axios.get(`/autosuggest/${textTofetch}`)
                setSeggestionsResult(results.data)
                console.log(results)

            } catch (error) {
                console.log("Error apearing when getting places")
            }

        }

    }

    useEffect(() => {

        getSeggestios();

    }, [textTofetch])

    useEffect(() => {
        setShowSeggestions(true)
    }, [seggestionsResult])

    return (

        <InputContainer>
            {/*  <Label for="input">Location : </Label> */}
            <Input id="input" placeholder="Enter Location" value={inputState} type="text" onChange={onChangehendler}></Input>

            <Seggestion show={showSeggestions}>

                {seggestionsResult.map((el, index) =>
                    <SegItem onClick={() => onClickItem(el)} key={index}>{el[0]}</SegItem>
                )}

            </Seggestion>

        </InputContainer >
    )
}

export default InputAuto