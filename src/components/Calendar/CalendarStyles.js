import styled from 'styled-components';

export const FullWidthFrame = styled.div`
    max-width: 1000px;
    height: auto;
    background-color: #1296ec;
    text-align: center;
    margin: 15px auto;
    border-radius: 30px;
`;

export const ComponentFrame = styled.div`
    width: 97%;
    height: auto;
    overflow-y: none;
    margin: 0 auto;
    padding-top: 1%;
    padding-bottom: 3%;
`;

export const TitleFrame = styled.div`
    text-align: center;
    color: #fff;
    font-size: 70px;
`;

export const ContentFrame = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;
export const ContentBadge = styled.div`
    width: 100%;
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
`;
export const ContentNote = styled.div`
    font-size: 28px;
    text-align: center;
`;
export const ContentNoteSection = styled.section`
    font-size: 28px;
`;
