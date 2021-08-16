import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card, TitleWrap } from "components/common";
import Star from "components/common/Icons/Star";
import Fork from "components/common/Icons/Fork";
import { Wrapper, Grid, Item, Content, Stats, Languages } from "./styles";
import projects from "./data/";
import { Links } from "components/theme/Footer/styles";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Latest Work</h2>
      <Grid>
        {projects.map((project) => {
          const { id, name, description, stack, links } = project;

          return (
            <Item
              key={id}
              // as="a"
              // href={links[1].link}
              // target="_blank"
              // rel="noopener noreferrer"
              theme={theme}
            >
              <Card theme={theme}>
                <Content>
                  <h4>{name}</h4>
                  <p>{description}</p>
                </Content>
                <TitleWrap>
                  <Stats theme={theme}>
                    <Languages color={theme === "light" ? "#000" : "#fff"}>
                      {stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </Languages>
                  </Stats>
                </TitleWrap>
                <Stats theme={theme}>
                  {links.map((linkItem) => {
                    return (
                      <a
                        key={linkItem.id}
                        href={linkItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {linkItem.icon}
                      </a>
                    );
                  })}
                </Stats>
              </Card>
            </Item>
          );
        })}
      </Grid>
    </Wrapper>
  );
};
