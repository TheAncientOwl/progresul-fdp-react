import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const ContentContainer = styled.div`
  margin: 0 10vw;
  padding: 10px;

  @media (max-width: ${Breakpoints.tablet}) {
    margin: 0 1vw;
  }
`;

export const ImplContentSection = styled.div`
  border: 2px solid ${props => props.theme.secondary};
  border-radius: 1rem;
  width: 100%;
  margin-bottom: 50px;
  padding: 5px 25px;
  min-height: 80vh;

  @media (max-width: ${Breakpoints.tablet}) {
    padding: 5px 20px;
  }
`;

export const SectionTitle = styled.div`
  display: none;
  border: 1px cyan;
  font-size: 1.6rem;
  margin: 10px auto 25px auto;
  max-width: 800px;
  text-align: center;

  background-image: ${props => `linear-gradient(to top, ${props.theme.secondary} 0%, ${props.theme.primary} 100%)`};
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media (max-width: ${Breakpoints.tablet}) {
    display: block;
  }

  @media (max-width: ${Breakpoints.phone}) {
    font-size: 1.4rem;
    margin-bottom: 15px;
  }
`;

export const Paragraph = styled.div`
  border: 1px violet;
  font-size: 1.1rem;
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 10px;
  color: ${props => props.theme.text.primary};
  padding: 15px 10px 0 10px;
`;

export const ParagraphIndent = styled.span`
  margin-left: 10px;
`;

export const SectionList = styled.ul`
  margin-left: 10px;
  border: 1px blue;
  list-style: none;
  margin-top: 10px;
`;

export const SectionListItem = styled.li`
  border: 1px indigo;
  margin-left: 10px;
  margin-top: 8px;
  font-style: italic;
  font-size: 1rem;
  color: ${props => props.theme.text.secondary};
`;

export const SubParagraph = styled.div`
  border: 1px cyan;
`;

export const SectionListItemDesc = styled(SectionListItem)`
  border: 1px gray;
  margin-left: 30px;
  font-size: 0.9rem;
  margin-top: 4px;
  color: ${props => props.theme.text.primary};
`;

export const Divider = styled.div`
  margin: 20px auto;
  height: 1px;
  width: 98%;
  background-color: ${props => (props.primary ? props.theme.primary : props.theme.secondary)};
`;

export const SectionSubTitle = styled.div`
  font-size: 1.25rem;
  font-style: italic;
  color: ${props => props.theme.secondary};
  margin: 20px 0 15px 45px;

  @media (max-width: ${Breakpoints.phone}) {
    margin-left: 25px;
  }
`;
