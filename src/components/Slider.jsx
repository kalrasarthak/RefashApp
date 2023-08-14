import React from 'react';
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from 'react';
import { sliderItems } from '../data';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
   position: relative;
   overflow: hidden;
   ${mobile({ display: "none" })}
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f1e3e3;
    border-radius:50% ;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    margin: auto;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
    
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`
const ImgContainer = styled.div`
height: 100%;
flex:1 ;
`

const Image = styled.img`
height: 80%;
padding: 70px 70px;
`
const InfoContainer = styled.div`
flex:1;
padding-left: 0px;
`
const Title = styled.h1`
font-size: 70px;
`

const Desc = styled.p`
margin: 50px 0px;
font-weight: 500;
letter-spacing: 2px;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState();

    const handleClick = (direction) => {
        // {for left arrow}
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }
        // {for right arrow}
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlinedIcon />
            </Arrow>

            {/* mapping over slider items from data.js instead of hardcoding the data  */}
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide bg={item.bg} key={item.id} >
                        <ImgContainer>
                            <Image src={item.img}
                            />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Link to="/login/"><Button>SHOP NOW</Button></Link>
                        </InfoContainer>
                    </Slide>
                ))}


            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider