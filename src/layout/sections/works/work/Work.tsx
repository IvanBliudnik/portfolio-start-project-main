import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {Theme} from "../../../../styles/Theme";
import {StyleButton} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}


export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <StyleButton>View project</StyleButton>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"Всякие фразочки"}>demo</Link>
                <Link href={"Всякие фразочки"}>code</Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    
    width: 330px;
    background-color: ${Theme.colors.secondaryBg};
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }
    
    @media ${Theme.media.desktop} {
        max-width: 540px;
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3`

`
const Text = styled.p`
    margin: 14px 0 10px;
`
const Description = styled.div`
    padding: 25px 20px;
`
const ImageWrapper = styled.div`
    position: relative;
    
    ${StyleButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        backdrop-filter: blur(8px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
    }
    
    &:hover {
        &::before {
            opacity: 1;
        }
        ${StyleButton} {
            opacity: 1;
        }
    }
    
@media ${Theme.media.tablet} {
    &::before {
        opacity: 1;
    }
    ${StyleButton} {
        opacity: 1;
    }
}
//    вот эти все манипуляции делаем для того чтобы при наведении было помутнение
`

