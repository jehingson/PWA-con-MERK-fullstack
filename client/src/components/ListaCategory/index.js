import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Category } from "../Category";
import { GlobalContext } from "../../GlobalContext";


const Link = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
      background: #fff;
      border-radius: 60px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0, 0.3);
      left: 0;
      margin: 0 auto;
      max-width: 500px;
      padding: 5px;
      position: fixed;
      right: 0;
      top: -5px;
      transform: scale(0.6);
      z-index: 1;
    `}
  :focus {
    outline-color: transparent;
    outline-style: none;
  }
  ::-webkit-scrollbar {
    --webkit-appearance: slider-horizontal;
  }
  ::-webkit-scrollbar:vertical {
    display: none;
  }
  ::-webkit-scrollbar-thumb {
    display: none;
  }
`;
const Item = styled.li`
  padding: 0 8px;
  list-style: none;
`;

const ListaCategoryComponet = () => {
  const state = useContext(GlobalContext);
  const [category] = state.CategoriaAPI.category;
  const [loading] = state.CategoriaAPI.loading;
  
  const [showFixed, setShowFixed] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };
    document.addEventListener("scroll", onScroll);


    return () => document.removeEventListener("scroll", onScroll);
  }, [showFixed]);


  if(!category) return <div>Loading...</div>
  const rendeList = (fixed) => (
    <Link fixed={fixed}>
      {loading ? (
        <Item key={loading}>
          <Category />
        </Item>
      ) : (
        category.map((category) => (
          <Item key={category._id}>
            <Category {...category} path={`/zoe/${category._id}`} />
          </Item>
        ))
      )}
    </Link>
  );
  return (
    <>
      {rendeList()}
      {showFixed && rendeList(true)}
    </>
  );
};

export const ListaCategory = React.memo(ListaCategoryComponet);
