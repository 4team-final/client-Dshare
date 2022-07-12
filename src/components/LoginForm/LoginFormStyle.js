import styled, { keyframes } from 'styled-components';

export const FullFrame = styled.div`
    width: auto;
    height: auto;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const MiddleFrame = styled.div`
    margin: 10% 0 0 0;
    width: 80%;
    height: 100%;
    overflow-y: hidden;
`;
export const ImgCard = styled.img`
    width: 50%;
    height: auto;
`;
export const TitleFrame = styled.div`
    margin: auto;
    h2 {
        font-size: 1.7em;
        margin: 0 0 5% 0;
        color: #fff;
    }
`;
export const ContentFrame = styled.div`
    font-size: 1.2em;
    margin-bottom: 7%;
    color: #fff;
`;
export const MainTextFrame = styled.span`
    font-size: 1.3em;
    color: #fff;
`;

export const HalfFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #1296ec;
    width: 100%;
    height: 100%;
    padding: 0% 0 8% 0;
    margin: 0;
    overflow-y: hidden;
`;

export const LoginFormFrame = styled.div`
    width: 80%;
    height: 28%;
    margin: 10% auto;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
`;
export const LoginAlertFrame = styled.span`
    font-size: 0.8em;
    color: #fff;
    margin-left: 5px;
`;
export const LoginContainerFrame = styled.div`
    width: 1000px;
    display: flex;
    margin-bottom: 30px;
    width: 340px;
    justify-content: center;
    align-items: center;
`;
export const LoginButtonFrame = styled.button`
    font-size: 1em;
    background-color: #1296ec;
    border: none;
    border-bottom: 1px solid #ffffff;
    width: 25%;
    height: 7%;
    color: #ffffff;
    font-size: 12px;
    border-radius: 5px;
    opacity: 1;
    cursor: pointer;
    transition: all 0.3s;
    transition: all 0.3s;
    letter-spacing: 1.3px;
    &:hover {
        color: #673ab7;
    }
`;
export const LoginInputFrame = styled.input`
    width: 100%;
    box-sizing: border-box;
    background: transparent;
    width: 80%;
    border: none;
    font-size: 40px;
    border-bottom: 1px solid #ffffff;
    color: #ffffff;
    padding: 12px 6px 12px 36px;
    font-size: 0.8em;
    outline: none;
    caret-color: #fff;
    font-family: Dosis;
    &::placeholder {
        font-size: 1.2em;
        color: #ffffff;
        opacity: 1;
    }
    &:focus {
        transition: all 0.4s;
        &::placeholder {
            color: #1296ec;
            opacity: 0.5;
        }
    }
`;

export const WideFrame = styled.div`
    min-height: 300px;
    max-height: 420px;
    width: 90vw;
`;
