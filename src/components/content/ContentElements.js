import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const ContentContainer = styled.div`
  border: 1px orange;
  margin: 0 10vw;
  padding: 10px;
`;

export const ImplContentSection = styled.div`
  border: 1px red;
  width: 100%;
`;

export const SectionTitle = styled.div`
  display: none;
  border: 1px cyan;
  font-size: 1.4rem;
  margin: 10px auto;
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
`;

export const Paragraph = styled.div`
  border: 1px violet;
  font-size: 1.1rem;
  margin: 0 auto;
  max-width: 1000px;
  margin-top: 10px;
  color: ${props => props.theme.text.primary};
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
`;

export const Divider = styled.div`
  margin: 20px auto;
  height: 1px;
  width: 100%;
  background-color: ${props => (props.primary ? props.theme.primary : props.theme.secondary)};
`;
