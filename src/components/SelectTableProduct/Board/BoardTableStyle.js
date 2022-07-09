import styled from 'styled-components';

export const HalfWidthFrame = styled.div`
    max-width: 800px;
    height: 320px;
    background-color: #fff;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
    display: flex;
    align-items: center;
    box-shadow: inset 0 0 5px #673ab7;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: 300px;
    overflow-x: auto;
    overflow-y: auto;
    margin: auto;
    padding-top: 1%;
    padding-bottom: 3%;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        cursor: pointer;
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

export const SectionFrame = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
`;

export const CardFrame = styled.div`
    margin: 0;
    padding: 0;
    width: 740px;
    height: 160px;
    color: #fafafa;
    display: flex;
    border: #fafafa 1px solid;
    border-radius: 20px;
    background-color: #${(props) => props.props};
`;

export const TitleFrame = styled.div`
    width: auto;
    height: auto;
    min-height: 50px;
    margin: 0;
    padding: 0;
`;

export const TextFrame = styled.div`
    width: 100%;
    height: auto;
`;

export const TextTitle = styled.input`
    font-weight: bold;
    font-size: 22px;
    width: 740px;
    height: 35px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    resize: none;
    color: #000;
    border: thick soild #673ab7;
`;

export const TextContent = styled.textarea`
    font-weight: bold;
    width: 760px;
    font-size: 18px;
    height: 140px;
    border-radius: 15px;
    margin-top: 20px;
    resize: none;
    color: #000;
    border: thick soild #673ab7;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        cursor: pointer;
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

export const ContentFrame = styled.div`
    border-top: 3px solid #b39ddb;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
`;

export const CustomButton = styled.button`
    margin: 2px;
    font-weight: bold;
    color: #fafafa;
    margin-top: 10px;
    background-color: #673ab7;
    opacity: 0.7;
    border: none;
    border-radius: 20px;
    width: 60px;
    height: 30px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        box-shadow: inset 0 0 5px #673ab7;
        opacity: 1;
        width: 65px;
        height: 30px;
        transition: all 0.3s;
    }
`;
