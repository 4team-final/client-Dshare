import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        height: 0;
        opacity: 0;
    }
    50%{
        opacity: 0.2;
    }
    100% {
        height: 150px;
        opacity: 1;
    }
`;

export const HalfWidthFrame = styled.div`
    animation: ${fadeIn} 0.75s ease-out;
    box-shadow: inset 0 0 8px #fff;
    max-width: 800px;
    height: ${(props) => props.height}px;
    background-color: #fff;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: ${(props) => props.height}px;
    overflow-y: hidden;
    margin: 10px auto auto auto;
    padding-top: 0;
    padding-bottom: 3%;
`;

export const CardFrame = styled.div`
    margin: auto;
    padding: 0;
    width: 50px;
    height: 50px;
    border: 1px solid #1296ec;
    border-radius: 10px;
    background-color: #${(props) => props.props};
`;

export const ListFrame = styled.ul`
    list-style: none;
    margin-top: 0;
    padding: 0;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        height: 10px;
        cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #1296ec;
        border-radius: 10px;
        box-shadow: inset 0px 0px 10px white;
    }
    &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px gray;
    }
`;

export const ItemFrame = styled.li`
    margin: 0;
    padding: 0;
    color: #1296ec;
    font-size: medium;
    text-align: center;
`;
export const CustomButton = styled.button`
    color: #fafafa;
    background-color: #1296ec;
    opacity: 0.7;
    border: none;
    border-radius: 20px;
    width: 60px;
    height: 25px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 5px #fff;
        transition: all 0.3s;
        opacity: 1;
        height: 30px;
    }
`;

export const TextTitle = styled.div`
    margin-top: 15px;
    font-weight: bold;
    font-size: ${(props) => props.props}px;
    color: #1296ec;
`;
