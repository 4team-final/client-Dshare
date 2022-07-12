import styled from 'styled-components';

export const SubContentFrame = styled.div`
    border-right: solid 3px #1296ec;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
`;

export const InsideContentFrame = styled.div`
    border-radius: 20px;
    border: 1px solid #fff;
    width: 80px;
    height: auto;
    background-color: #${(props) => props.props};
    box-shadow: inset 0 0 5px #fff;
    margin-bottom: 15px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 8px #1296ec;
        height: 55px;
        transition: all 0.3s;
    }
`;
