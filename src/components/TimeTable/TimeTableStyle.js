import styled from 'styled-components';

export const FullWidthFrame = styled.div`
    max-width: 1000px;
    height: 100px;
    background-color: #1296ec;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: 80px;
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
`;

export const ItemFrame = styled.li`
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: medium;
    text-align: center;
`;
