import styled from 'styled-components';

export const CustomButton = styled.button`
    margin: 2px;
    font-size: large;
    font-weight: bold;
    color: #fff;
    margin: 10px 20px;
    background-color: #673ab7;
    opacity: 0.7;
    border: none;
    border-radius: 20px;
    width: 120px;
    height: 60px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 5px #fafafa;
        opacity: 1;
        width: 120px;
        height: 65px;
        transition: all 0.3s;
    }
`;

export const CardFrame = styled.div`
    margin: 5px 0;
    padding: 0;
    width: 100%;
    height: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HalfWidthFrame = styled.div`
    box-shadow: inset 0 0 8px #fff;
    border: 1px solid #673ab7;
    max-width: 800px;
    height: 150px;
    background-color: #fff;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;
