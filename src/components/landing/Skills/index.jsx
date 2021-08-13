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
            Hi, my name is Chris! I’m a former US Army paratrooper and I love to
            design and build beautiful, fast, and modern websites with the
            JAMstack.
          </p>
          <p>
            {" "}
            When I’m not designing or building something for the web I’m usually
            making music. I have a Bachelor’s degree from Berklee College of
            Music and enjoy the audio engineering side of things. I also play
            the piano and guitar.
          </p>
          <p>
            Other than that I really enjoy cooking and enjoying a nice
            refreshing beverage.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
