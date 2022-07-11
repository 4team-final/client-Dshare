import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
   0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const AlertStyle = (visible) => css`
    visibility: ${visible ? 'visible' : 'hidden'};
    z-index: 5;
    animation: ${visible ? fadeIn : fadeOut} 0.25s ease-out;
    transition: visibility 0.25s ease-out;
`;

export const Alert = styled.div`
    position: absolute;
    top: 10%;
    /* left: 40%; */
    width: 100%;
    height: 70px;
    padding: 20px;
    border-radius: 8px;
    background-color: ${(props) => (props.notice === 'error' ? 'rgba(255, 0, 0, 0.6)' : 'rgba(25 ,38 ,236 ,0.5)')};
    box-shadow: 0px 4px 4px #00000025;
    display: flex;
    align-items: center;
    ${(props) => AlertStyle(props.visible)}
    h5 {
        font-weight: bold;
        margin-left: 3%;
        font-size: ${(props) => props.font}px;
    }
`;
