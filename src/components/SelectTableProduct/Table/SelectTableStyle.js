import styled from 'styled-components';

export const HalfWidthFrame = styled.div`
    max-width: 800px;
    height: 400px;
    background-color: #673ab7;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 8px #fafafa;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: 380px;
    overflow-x: auto;
    overflow-y: auto;
    margin: auto;
    padding-top: 1%;
    padding-bottom: 3%;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #673ab7;
        border-radius: 10px;
        box-shadow: inset 0px 0px 10px white;
    }
    &::-webkit-scrollbar-track {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: inset 0px 0px 5px gray;
    }
`;

export const CardFrame = styled.div`
    margin: 0;
    padding: 0;
    width: 740px;
    height: 160px;
    color: #673ab7;
    display: flex;
    border: #673ab7 1px solid;
    border-radius: 20px;
    background-color: #${(props) => props.props};
`;

export const ListFrame = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const ItemFrame = styled.li`
    margin: 0;
    padding: 0;
    color: #fff;
    font-size: medium;
    text-align: center;
`;

export const ImgCard = styled.div`
    height: 157px;
    width: 320px;
    border-radius: 20px;
`;

export const InsideFrame = styled.div`
    display: flex;
    margin: 0;
    padding: 0 5px 0 0;
`;
export const TextFrame = styled.div`
    height: 100%;
    width: 370px;
    margin: auto;
    display: flex;
    flex-direction: column;
`;

export const TextTitle = styled.div`
    font-weight: bold;
    font-size: ${(props) => props.props}px;
`;

export const TextContent = styled.div`
    font-size: ${(props) => props.props}px;
`;

export const ContentFrame = styled.div`
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
`;

export const SubContentFrame = styled.div`
    margin-top: 15px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 155px;
`;

export const CustomButton = styled.button`
    color: #fff;
    margin-top: 10px;
    background-color: #673ab7;
    opacity: 0.7;
    border: none;
    border-radius: 20px;
    width: 60px;
    height: 60px;
    &:hover {
        box-shadow: inset 0 0 5px white;
        width: 65px;
        height: 65px;
    }
`;

export const TextSubTitle = styled.div`
    font-weight: bold;
    font-size: ${(props) => props.props}px;
    color: #fafafa;
    margin-top: 10%;
`;
