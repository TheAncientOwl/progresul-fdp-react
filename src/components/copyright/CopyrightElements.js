import styled from 'styled-components';

export const CopyrightContainer = styled.div`
  color: ${props => props.theme.primary};
  border: 2px solid;
  border-radius: 0.8rem;
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;
  width: 80vw;
  margin: 0 auto 10px auto;
  font-weight: bold;
  text-shadow: 0.5px 0.5px ${props => props.theme.secondary};
`;
