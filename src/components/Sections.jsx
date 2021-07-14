import React from 'react'
import styled from 'styled-components';

function Sections(props){
    return (
        <Container bgImage={ props.backgroundImg }>
                <ItemText>
                    <h1>{ props.title }</h1>
                    <p>{ props.descriptionTextLeft } <a href={ props.descriptionlink }>{ props.descriptionTextRight }</a></p>
                </ItemText>
                <ButtonGroup>
                    <a href={ props.leftBtnlink }><LeftButton>{ props.leftBtnText }</LeftButton></a>
                    <a href={ props.rightBtnlink }><RightButton>{ props.rightBtnText }</RightButton></a>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
        </Container>
    )
}

export default Sections

const Container = styled.div`
    background-color: #b2b2ee;
    width: 100%;
    height: 100vh;
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position: center  center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: start;
`
const ItemText = styled.div`
    padding-top: 20vh; // 15vh was in Video
    text-align: center;
    flex-grow: 1;
    p{
        padding-top: 1vh;
        opacity: 0.8;
    }
    a{
        border-bottom: 1px solid black;
        padding-bottom: 1.5px;
        opacity: 0.8;
        transition: 0.2s;
    }
    a:hover{
        border-bottom: 2px solid black;
        opacity: 100%;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    /* margin-bottom: 60px; // 30px was in Video */
    margin-bottom: 20px; // 30px was in Video
`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.85;
    margin: 8px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;
`
const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 10px; // 50px is set in Video
`