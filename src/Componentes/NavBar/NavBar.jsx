import React from "react";
import * as S from './NavBarStyles';
import Avatar from '../../images/avatar.png'



export const NavBar = () => {
    return (
        <S.NavHeader>
            <S.NavHeaderDiv>
                <S.NavHeaderNav>
                    <S.NavDiv>
                        <S.NavLinks>Home
                        </S.NavLinks>
                        <S.NavLinks>Receitas
                        </S.NavLinks>
                        <S.NavLinks>Destaques
                        </S.NavLinks>
                    </S.NavDiv>
                    <S.NavImageBox>
                        <S.NavImage src={Avatar} />
                    </S.NavImageBox>
                    <S.NavDiv>
                        <S.NavLinks>Home
                        </S.NavLinks>
                        <S.NavLinks>Receitas
                        </S.NavLinks>
                        <S.NavLogin>Login
                        </S.NavLogin>
                    </S.NavDiv>
                </S.NavHeaderNav>
            </S.NavHeaderDiv>
        </S.NavHeader>
    );
};