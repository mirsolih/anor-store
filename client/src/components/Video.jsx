import React from 'react'
import styled from 'styled-components'
import video from '../videos/video4.mp4'

const Container = styled.div`
background-color: white;
background-color: rgba(0,0,0,0.2);
`;

const Film =styled.video`
    width: 100%;
    height: 800px;
    object-fit: cover;
    z-index: -1;
    
`;


const Video = () => {
  return (
    <Container>
        <Film autoPlay muted preload='none' controls loop src={video}/> 
    </Container>
  )
}

export default Video