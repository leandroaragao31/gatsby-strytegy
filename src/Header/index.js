import React from 'react';
import * as S from "./styles"

export   function Header({
    image,
    blog,
    faq,
    enter,
    lang
}) {
  return (
    <S.Container>
      <S.Logo src={image} alt="imagem" />
      <S.ContainerMenu>
      <S.BtnMenu>{blog}</S.BtnMenu>
      <S.BtnMenu>{faq}</S.BtnMenu>
      <S.BtnMenu>{enter}</S.BtnMenu>
      <S.BtnMenu>{lang}</S.BtnMenu>
      </S.ContainerMenu>
    </S.Container>
  );
}
