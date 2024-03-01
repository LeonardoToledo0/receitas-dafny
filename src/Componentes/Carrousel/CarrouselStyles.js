import styled from 'styled-components'
import { Splide } from '@splidejs/react-splide'
import { corPrimaria, corSecundaria, corTerciaria } from '../Assets/styles'


export const CarrouselSection = styled.section`
max-width: 1200px;
margin: 100px auto;
display: flex;
align-items: center;
`
export const SpliderCuston = styled(Splide)`
 --splide-arrow-color: ${corPrimaria};
 z-index: 0;


`
export const CarrouselCard = styled.div`
width: 45%;
align-items: center;
display: flex;
justify-content: center;
margin: 10px;

`
export const CarrouselText = styled.div`
  background: ${corSecundaria};
  width: 50%; 
  height: 360px; 
  margin: 40px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

`
export const CarrouselImage = styled.img`
align-self: center;
border-radius: 8px;
width: 100%;
transition: all.5s;
 
`
export const CarrouselBg = styled.section`
height: 450px;
background: ${corTerciaria};
margin-top: -250px;

`

