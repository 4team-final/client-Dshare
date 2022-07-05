import styled from 'styled-components';

export const HalfWidthFrame = styled.div`
    max-width: 800px;
    height: ${(props) => props.height}px;
    background-color: #fff;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
    border: #1296ec 2px solid;
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
    display: block;
    width: 100px;
    height: auto;
    color: #1296ec;
    border: #1296ec 1px solid;
    border-radius: 20px;
    background-color: #${(props) => props.props};
`;

export const ImgCard = styled.img`
    src: ${(props) => props};
    height: 50px;
    width: 100px;
`;

export const ListFrame = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`;
