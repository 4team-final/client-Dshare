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
    height: 40px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 5px #fafafa;
        opacity: 1;
        width: 120px;
        height: 45px;
        transition: all 0.3s;
    }
    &:disabled {
        background-color: #000;
        opacity: 0.5;
        &:hover {
            width: 120px;
            height: 40px;
            box-shadow: none;
        }
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
    border-bottom: 2px solid #673ab7;
    max-width: 800px;
    height: 40px;
    background-color: none;
    text-align: center;
    margin: 15px auto;
    display: flex;
    align-items: center;
    padding-bottom: 30px;
`;
