import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fadeIn } from "../../styles/animation";
import { useObserver } from "../../hooks/useObserver";
import { BottonRender } from "../BottonRender";
import { BottonLikes } from "../BottonLikes";

const Article = styled.div`
  min-height: 300px;
  @media (max-width: 400px) {
    min-height: 250px;
  }
`;

const ImagWrapper = styled.article`
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

const DivBtn = styled.div`
 display: flex;
 justify-content: space-between;

`

export const ProductoCard = ({ producto }) => {
  const {_id = 0, images = {} } = producto
  const [show, element] = useObserver();


  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${_id}`}>
            <ImagWrapper>
              <Img src={images.url} />
            </ImagWrapper>
          </Link>
          <DivBtn>
          <BottonLikes producto={producto} />
          <BottonRender producto={producto} />
          </DivBtn>
        </>
      )}
    </Article>
  );
};
