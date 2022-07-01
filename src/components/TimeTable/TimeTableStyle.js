import styled from 'styled-components';

export const FullWidthFrame = styled.div`
    max-width: 1000px;
    height: 100px;
    background-color: #fff;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    border: #1296ec 1px solid;
    display: flex;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: auto;
    overflow-y: none;
    margin: auto;
    padding-top: 1%;
    padding-bottom: 3%;
`;

export const CardFrame = styled.div`
    margin: auto;
    padding: 0;
    width: 5px;
    height: ${(i) => (i === 0 || i === 47 ? 50 : i % 2 === 0 ? 35 : 20)}px;
    background-color: #fff;
`;
