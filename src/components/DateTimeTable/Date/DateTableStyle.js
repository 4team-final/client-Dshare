import styled from 'styled-components';

export const HalfWidthFrame = styled.div`
    max-width: 800px;
    height: ${(props) => props.height}px;
    background-color: #fff;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    border: #1296ec 1px solid;
    box-shadow: inset 0 0 2px #1296ec;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: ${(props) => props.height}px;
    overflow-y: none;
    margin: auto;
    padding-top: 1%;
    padding-bottom: 3%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    color: #1296ec;
    font-size: medium;
    text-align: center;
`;

export const CalendarFrame = styled.div`
    margin: 0;
    padding: 0;
    width: 80%;
    height: auto;
    box-shadow: inset 0 0 5px #1296ec;
    border-radius: 20px;
`;

export const AllContentFrame = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
`;

export const ContentFrame = styled.div`
    display: flex;
    margin: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SubContentFrame = styled.div`
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 15px;
    display: flex;
    text-align: left;
    width: auto;
`;

export const CustomButton = styled.button`
    color: #fff;
    margin: 5px 5px;
    background-color: #1296ec;
    opacity: 0.7;
    border: none;
    border-radius: 20px;
    width: 80px;
    height: 40px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 5px white;
        opacity: 1;
        width: 85px;
        height: 40px;
        transition: all 0.3s;
    }
`;

export const TitleTextFrame = styled.div`
    display: flex;
    margin-top: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 25px;
`;
