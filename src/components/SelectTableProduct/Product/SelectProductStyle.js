import styled from 'styled-components';

export const SubContentFrame = styled.div`
    border-right: solid thick #fafafa;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
`;

export const InsideContentFrame = styled.div`
    border-radius: 20px;
    border: 1px solid #fafafa;
    width: 120px;
    height: auto;
    background-color: #fff;
    margin-bottom: 5px;
    &:hover {
        box-shadow: inset 0 0 8px #1296ec;
        width: 130px;
    }
`;
