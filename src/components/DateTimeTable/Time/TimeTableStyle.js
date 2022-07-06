import styled from 'styled-components';

export const HalfWidthFrame = styled.div`
    box-shadow: inset 0 0 8px #fafafa;
    max-width: 800px;
    height: ${(props) => props.height}px;
    background-color: #1296ec;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: ${(props) => props.height}px;
    overflow-y: none;
    margin: auto;
    padding-top: 1%;
    padding-bottom: 3%;
`;

export const CardFrame = styled.div`
    margin: auto;
    padding: 0;
    width: 50px;
    height: 50px;
    border: #1296ec 1px solid;
    background-color: #${(props) => props.props};
`;

export const ListFrame = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        height: 10px;
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
    color: #fff;
    font-size: medium;
    text-align: center;
`;
export const CustomButton = styled.button`
    color: #fff;
    margin-top: 10px;
    background-color: #673ab7;
    opacity: 0.7;
    border: none;
    border-radius: 20px;
    width: 60px;
    height: 25px;
    &:hover {
        box-shadow: inset 0 0 5px white;
        width: 65px;
        height: 65px;
    }
`;

export const TextTitle = styled.div`
    margin-top: 15px;
    font-weight: bold;
    font-size: ${(props) => props.props}px;
    color: #fff;
`;
