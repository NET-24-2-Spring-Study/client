import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";
import theme from '../../../constants/theme'; // theme 파일의 경로

const { ALIGN, RESPONSIVE_SIZE } = theme;

export const ProgressBarContainer = styled.div`
    border-radius: 5px;
    width: 40%;
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        width: 90%;    
    }
    padding: 5px;
    .progress {
        background: #D9D9D9;
        height: 0.5rem;
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            height: 0.75rem; 
        }
    }
`;

export const CustomProgressBar = styled(ProgressBar)`
    .progress-bar {
        background: #ED6243;
    }
`;

export const Container = styled.div`
    width: 90%;
    height: 50%;
    margin-top: 4rem;
`

export const Question = styled.div`
    width: 100%;
    h1 {
        color: #27272A;
        font-family: Pretendard;
        font-size: 2rem;
        @media (max-width: 1440px) {
            font-size: 1.5rem;
        }

        font-weight: 600;
        line-height: 3.125rem;
        letter-spacing: -0.0625rem;
    }
`

export const Content = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    img {
        width: 12%;
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            width: 18%;
        }
        border-radius: 100%;
    }
    div {
        ${ALIGN.COLUMN_CENTER}
        width: 50%;
        height: 6rem;
        border-radius: 1.25rem;    
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            width: 70%;
            height: 4rem;
            border-radius: 0.70238rem;
        }
        background: #EEECE3;
        box-shadow: 0px 4px 4px 0px #E3DECB inset;

        color: #52525B;
        font-family: Pretendard;
        font-size: 1.5rem;
        @media (max-width: 1440px) {
            font-size: 1.25rem;
        }
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            font-size: 1rem;
        }
        font-weight: 600;
        line-height: 2.125rem;
        letter-spacing: -0.03125rem;
    }
`
export const Plus = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 1.5rem;
    div {
        ${ALIGN.COLUMN_CENTER}
        width: 50%;
        height: 6rem;
        border-radius: 1.25rem;
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            width: 70%;
            height: 4rem;
            border-radius: 0.70238rem;
        }
        background: #EEECE3;
        box-shadow: 0px 4px 4px 0px #E3DECB inset;
    
        color: #52525B;
        font-family: Pretendard;
        font-size: 1.5rem;
        @media (max-width: 1440px) {
            font-size: 1.25rem;
        }
        @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
            font-size: 1rem;
        }
        font-weight: 600;
        line-height: 2.125rem;
        letter-spacing: -0.03125rem;
        }
    }
`

export const Loading = styled.div`
    ${ALIGN.COLUMN_CENTER};
    position: absolute;
    top: 10%;
    @media (max-width: ${RESPONSIVE_SIZE.MOBILE}) {
        top: 0%;
    }
    width: 100%;
    height: 90vh;
    background: rgba(255, 255, 255, 0.9);

    z-index: 100;

    img {
        width: 20rem;
    }
`