import styled from 'styled-components';

export const SubContentFrame = styled.div`
    margin: 15px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const InsideContentFrame = styled.div`
    margin: 0;
    width: 40%;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const CardFrame = styled.div`
    margin: 0;
    padding: 0;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #${(props) => props.props};
    color: #${(props) => (props.props === 'fff' ? '000' : 'fff')};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #1296ec;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 8px #1296ec;
        transition: all 0.3s;
    }
`;
