import EmailIcon from '@/assets/icons/PixelArt/Basic/Purple/Email_Purple.png';
import GithubIcon from '@/assets/icons/PixelArt/Basic/White/Letter G_White.png';
import DiscordIcon from '@/assets/icons/PixelArt/Discord.png';
import GoogleDriveIcon from '@/assets/icons/PixelArt/Drive (Google).png';
import LinkedinIcon from '@/assets/icons/PixelArt/Linkedin.png';
import SteamIcon from '@/assets/icons/PixelArt/Steam.png';
import TelegramIcon from '@/assets/icons/PixelArt/Telegram.png';
import { ArcadepixPlusFontFamily } from '@/styles/fonts/ArcadepixPlus';
import { KarmaticArcadeFontFamily } from '@/styles/fonts/KarmaticArcade';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const colors = ['#ff2f2f', '#a988e1', '#07a6ff'];

// colors: 1st -> 0%, 2nd -> 50%, 3rd -> 100%
const avgStepsGradient = (colors: string[]) => {
  const step = 100 / (colors.length - 1);
  const stops = colors.map((color, index) => {
    const percentage = index * step;
    return `${color} ${percentage}%`;
  });
  return stops.join(', ');
};

const StyledLead = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: yellow;

  & > :first-child {
    margin-top: auto;
  }

  & > :last-child {
    margin-top: auto;
  }
`;

const StyledTitle = styled.h1`
  width: 100%;
  font-size: 4rem;
  font-family: ${KarmaticArcadeFontFamily};
  font-weight: 100;
  background: linear-gradient(280deg, ${avgStepsGradient(colors)});
  // background-size: 100%;
  // background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
    text-indent: -9px;
  }
`;

const StyledFirstName = styled.span`
  // rose gold
  background: linear-gradient(
    280deg,
    #ff2f2f 0%,
    #ff2f2f 50%,
    #a988e1 50%,
    #a988e1 100%
  );
  animation-name: glow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  transition: all 0.2s ease-in-out;

  @keyframes glow {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }

  @media (max-width: 500px) {
    display: block;
    font-size: 7rem;
  }
`;

const StyledDescription = styled.p`
  margin: 0 0 1.5rem 0;
  font-family: ${ArcadepixPlusFontFamily};
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: 0.1rem;
  max-width: 38rem;
  color: rgba(0, 0, 0, 0.8);
  white-space: pre-line;
  transition: all 0.2s ease-in-out;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    width: 240px;
    font-size: 1rem;
  }
`;

const StyledLinks = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    font-family: ${ArcadepixPlusFontFamily};
    color: rgba(0, 0, 0, 0.4);
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }

    &:active {
      transform: scale(1.1);
      opacity: 0.7;
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
      object-fit: cover;
    }

    span {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;

    a {
      img {
        width: 2rem;
        height: 2rem;
      }

      span {
        font-size: 1rem;
      }

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(1);
      }
    }
  }

  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    padding: 0 1rem;
    max-width: 20rem;

    a {
      img {
        width: 3rem;
        height: 3rem;
      }

      span {
        display: none;
      }

      &:hover {
        transform: scale(1);
      }

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;

const StyledCopyright = styled.p`
  margin: 0;
  font-family: ${ArcadepixPlusFontFamily};
  line-height: 85%;
  letter-spacing: 0.1rem;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  padding: 1rem 0;
  background-color: black;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;

const TypingCursor = styled.span`
  display: inline-block;
  animation: blink 0.75s ease infinite;

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TypingEffect = ({ text }) => {
  const [typedText, setTypedText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextChar = text[typedText.length];
      if (nextChar) {
        setTypedText((prevText) => prevText + nextChar);
      } else {
        setDone(true);
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [text, typedText.length]);

  return (
    <StyledDescription>
      {typedText}
      {!done && <TypingCursor>_</TypingCursor>}
    </StyledDescription>
  );
};

export const Lead = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const titleRef = useRef<HTMLHeadingElement>(null);

  const center = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getGradientDegree = () => {
    const degree =
      (Math.atan2(mousePos.y - center.y, mousePos.x - center.x) * 180) /
      Math.PI;
    return degree;
  };

  useEffect(() => {
    const title = titleRef.current;

    if (!title) {
      return;
    }

    /* title.style.background = `linear-gradient(${getGradientDegree()}deg, ${avgStepsGradient(
      colors
    )})`;
    title.style.webkitBackgroundClip = 'text'; */
  }, [mousePos]);

  return (
    <StyledLead>
      <StyledTitle ref={titleRef}>
        <StyledFirstName>Nik</StyledFirstName> Cherednik
      </StyledTitle>
      <TypingEffect
        text={`Hello!
        I’m a passionate developer who loves hard challenges.
        And I also love to play and create games!`}
      />
      <StyledLinks>
        <li>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQolnw9yzaOkYb8rdEC0MWtrPaBOqh9Nwu7fglC3bYku2XkIiLxMnZx455N2p1ByA/pub"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GoogleDriveIcon} alt="Resume" />
            <span>Resume</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/cherrynik"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GithubIcon} alt="GitHub" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/cherrynik"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedinIcon} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://t.me/cherrynik" target="_blank" rel="noreferrer">
            <img src={TelegramIcon} alt="Telegram" />
            <span>Telegram</span>
          </a>
        </li>
        <li>
          <a
            href="https://steamcommunity.com/id/mesaone_/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SteamIcon} alt="Steam" />
            <span>Steam</span>
          </a>
        </li>
        <li>
          <a
            href="https://discordapp.com/users/294442053180325889"
            target="_blank"
            rel="noreferrer"
          >
            <img src={DiscordIcon} alt="Discord" />
            <span>Discord</span>
          </a>
        </li>
        <li>
          <a href="mailto:me@cherrynik.ru" target="_blank" rel="noreferrer">
            <img src={EmailIcon} alt="Email" />
            <span>E-Mail</span>
          </a>
        </li>
      </StyledLinks>
      <StyledFooter>
        <StyledCopyright>
          Copyrigth © 2023. All rights reserved.
        </StyledCopyright>
      </StyledFooter>
    </StyledLead>
  );
};

export default Lead;
