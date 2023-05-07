import styled from 'styled-components';
import { KarmaticArcadeFontFamily } from '../styles/fonts/KarmaticArcade';

const StyledLead = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-size: 4rem;
  font-family: ${KarmaticArcadeFontFamily};
`;

export function Lead() {
  return (
    <StyledLead>
      <StyledTitle>Nik Cherednik</StyledTitle>
      <ul>
        <li>It's built with React</li>
        <li>It's styled with styled-components</li>
      </ul>
    </StyledLead>
  );
}

export default Lead;
