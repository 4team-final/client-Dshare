import styled from 'styled-components';

export const SHalfWidthFrame = styled.div`
    max-width: 800px;
    height: ${(props) => props.height}px;
    background-color: #1296ec;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;

export const SComponentFrame = styled.div`
    width: 97%;
    height: ${(props) => props.height}px;
    overflow-y: none;
    margin: auto;
    padding-top: 1%;
    padding-bottom: 3%;
`;

export const SCardFrame = styled.div`
    margin: auto;
    padding: 0;
    display: block;
    width: 100px;
    height: auto;
    color: #1296ec;
    border: #1296ec 1px solid;
    border-radius: 20px;
    background-color: #${(props) => props.props};
`;

export const SListFrame = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    overflow-x: scroll;
`;

export const SItemFrame = styled.li`
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: medium;
    text-align: center;
`;

export const SImgCard = styled.img`
    alt: ${(props) => props};
    src: ${(props) => props};
    height: 50px;
    width: 100px;
`;
