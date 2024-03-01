import React from "react";
import '@splidejs/react-splide/css';
import { SplideSlide } from '@splidejs/react-splide';
import * as S from './CarrouselStyles'
import Banner1 from '../../images/banner.jpg'
import Banner2 from '../../images/Banner1.jpg'
import Banner3 from '../../images/banner25.jpg'

export const Carrousel = () => {

    return (
        <>
            <S.CarrouselSection>
                <S.CarrouselCard>
                    <S.SpliderCuston
                        options={{
                            type: 'fade',
                            rewind: true,
                        }}
                    >
                        <SplideSlide>
                            <S.CarrouselImage src={Banner1} />
                        </SplideSlide>
                        <SplideSlide>
                            <S.CarrouselImage src={Banner2} />
                        </SplideSlide>
                        <SplideSlide>
                            <S.CarrouselImage src={Banner3} />
                        </SplideSlide>
                    </S.SpliderCuston>
                </S.CarrouselCard>
                <S.CarrouselText></S.CarrouselText>
            </S.CarrouselSection>
            <S.CarrouselBg></S.CarrouselBg>

        </>
    );
};