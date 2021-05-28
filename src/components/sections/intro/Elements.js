import styled from 'styled-components';

export const Text = styled.div`
  background-image: ${props => `linear-gradient(to top, ${props.theme.secondary} 0%, ${props.theme.primary} 100%)`};
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Title = styled.div`
  margin-top: 25px;
  text-align: center;
  font-size: 1.7rem;
`;

export const Year = styled.div`
  margin-top: 15px;
  text-align: center;
  font-size: 1.4rem;
`;

export const Subtitle = styled.div`
  margin-top: 45px;
  text-align: center;
  font-size: 1.6rem;
`;

export const Info = styled.div`
  margin: 80px auto 0 auto;
  width: 80%;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  text-align: left;
`;

export const Right = styled.div`
  text-align: right;
`;
