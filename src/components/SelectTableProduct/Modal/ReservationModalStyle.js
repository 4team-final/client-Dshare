import styled, { keyframes, css } from 'styled-components';

export const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;
export const fadeOut = keyframes`
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
`;

const modalSettings = (visible) => css`
    visibility: ${visible ? 'visible' : 'hidden'};
    z-index: 15;
    animation: ${visible ? fadeIn : fadeOut} 0.15s ease-out;
    transition: visibility 0.15s ease-out;
`;

export const BackFrame = styled.div`
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    background-color: #000;
    opacity: 0.6;
    ${(props) => modalSettings(props.visible)}
`;

export const ModalSection = styled.div`
    height: 700px;
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fafafa;
    padding: 16px;
    border: 20px;
    border-radius: 20px;
    ${(props) => modalSettings(props.visible)}
`;

export const ModalTitle = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 0 16px;
    font-size: 25px;
    font-weight: bold;
    color: #000;
`;

export const ModalContent = styled.div`
    padding: 16px 0;
`;

export const ModalCloseButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
`;

export const ModalFrameBody = styled.div`
    border: thick soild #1296ec;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
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
export const ModalCheckButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CustomButton = styled.button`
    margin: 2px;
    font-weight: bold;
    color: #673ab7;
    margin-top: 10px;
    background-color: #fff;
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

export const ModalFrameTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin: 20px auto;
    text-align: center;
    width: 100%;
`;

export const ModalFrameContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const ImgCard = styled.div`
    width: 100%;
`;

export const InsideFrame = styled.div`
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
`;
export const TextFrame = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const TextTitle = styled.div`
    font-weight: bold;
    font-size: ${(props) => props.props}px;
`;

export const TextContent = styled.div`
    font-size: ${(props) => props.props}px;
    text-align: center;
    margin: auto;
    font-weight: bold;
`;

export const ContentFrame = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const SubContentFrame = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
`;

export const ModalTag = styled.div`
    border: thick solid #1296ec;
    box-shadow: inset 0 0 5px #fff;
    width: 100px;
    height: 30px;
    background-color: #1296ec;
    border-radius: 10px;
    margin: 0 10px;
    color: #fff;
`;
