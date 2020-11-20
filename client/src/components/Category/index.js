import React from "react";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

const Link = styled(LinkRouter)`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;
const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: 75px;
`;
const Em = styled.em`
  font-size: 12px;
  color: #555;
`;

export const Category = ({ path = "#", name = "?", avatar = {} }) => {
  return (
    <Link to={path}>
      <Image src={avatar.url} />
      <Em>{name}</Em>
    </Link>
  );
};
