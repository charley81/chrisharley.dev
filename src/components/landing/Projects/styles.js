import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem 0;
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === "light" ? "#212121" : "#fff")};
  }

  p {
    color: ${({ theme }) => (theme === "light" ? "#707070" : "#c7c7c7")};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
  min-height: 160px;

  h4 {
    color: #6b63ff;
  }
`;

export const Stats = styled.div`
  margin-top: 1rem;

  a {
    color: #6b63ff;
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export const Languages = styled.div`
  opacity: 0.5;
  font-size: 14px;

  span {
    margin-right: 1rem;
  }
`;
