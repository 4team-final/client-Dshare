import styled from 'styled-components';

export const SubContentFrame = styled.div`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
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
