import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Button } from "components/common";
import dev from "assets/illustrations/skills.svg";
import { Wrapper, SkillsWrapper, Details, Thumbnail } from "./styles";

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            I love designing and building beautiful, fast, and modern websites
            and applications with the JAMstack. When I’m not designing or
            building something for the web (bummer), you’ll find me making
            music. I dabble with guitar, piano, and love producing and
            engineering all kinds of music like hip-hop, trap, drum-n-bass,
            country and metal. Other than that I love cooking and always down
            for a bar-b-q and come cold refreshing beverages.
          </p>
          <p>
            Fun facts: Former US Army Paratrooper (Airborne), Berklee College of
            Music Graduate
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
