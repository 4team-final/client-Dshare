import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 20px;
`;
const WrapperImg = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 20px;
`;
export const style = {
    Wrapper,
    WrapperImg
  };