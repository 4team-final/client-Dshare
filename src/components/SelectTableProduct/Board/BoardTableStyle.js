import styled, { keyframes } from 'styled-components';

export const HalfWidthFrame = styled.div`
    animation: ${fadeIn} 1.25s ease-out;
    max-width: 800px;
    height: 440px;
    background-color: #fff;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: 400px;
    overflow-x: none;
    overflow-y: none;
    margin: auto;
    padding-top: 1%;
    padding-bottom: 3%;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #673ab7;
        border-radius: 10px;
        box-shadow: inset 0px 0px 10px white;
    }
    &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px gray;
    }
`;

export const SectionFrame = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    box-shadow: inset 0 0 30px #fff;
    background-color: ${(props) => (props.props ? 'rgba(0, 0, 0, 0.3)' : '#fff')};
`;

export const CardFrame = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 200px;
    color: #fafafa;
    display: flex;
    justify-content: center;
    border: #fafafa 1px solid;
    border-radius: 20px;
    background-color: #${(props) => props.props};
`;

export const TitleFrame = styled.div`
    width: auto;
    height: auto;
    min-height: 50px;
    margin: 0;
    padding: 0;
`;

export const TextFrame = styled.div`
    width: 100%;
    height: auto;
`;

export const TextTitle = styled.input`
    text-align: center;
    font-size: 18px;
    width: 96%;
    height: 40px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    resize: none;
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.5);
    &::placeholder {
        opacity: 0.6;
    }
`;

export const TextContent = styled.textarea`
    padding-top: 15px;
    width: 97%;
    font-size: 18px;
    height: 180px;
    border-radius: 15px;
    margin-top: 20px;
    resize: none;
    color: #000;
    border: none;
    text-align: center;
    vertical-align: middle;
    overflow-y: auto;
    border: 1px solid rgba(0, 0, 0, 0.5);
    &::placeholder {
        opacity: 0.6;
    }
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #673ab7;
        border-radius: 10px;
        box-shadow: inset 0px 0px 10px white;
    }
    &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px gray;
    }
`;

export const ContentFrame = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const CustomButton = styled.button`
    margin: 2px;
    font-weight: bold;
    color: #fafafa;
    margin-top: 10px;
    background-color: #673ab7;
    opacity: 0.7;
    border: none;
    border-radius: 20px;
    width: 60px;
    height: 30px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 5px #673ab7;
        opacity: 1;
        width: 65px;
        height: 30px;
        transition: all 0.3s;
    }
`;

export const TitleTextFrame = styled.div`
    width: auto;
    height: auto;
    min-height: 50px;
    margin-top: 10px;
    padding: 0;
    font-weight: bold;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.8);
`;
const fadeIn = keyframes`
    0% {
        height: 0;
        opacity: 0;
    }
    60% {
        opacity: 0;
    }
    100% {
        height: 520px;
        opacity: 1;
    }
`;
