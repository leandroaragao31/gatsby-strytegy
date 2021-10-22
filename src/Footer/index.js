import React from 'react';
import * as S from "./styles"
export function Footer({

}) {
  return (
    <S.ContainerFooter>
      <S.Container>
        <S.Title>About us</S.Title>
        <S.Paragraph>
          Strytegy was formed some years ago with the aim of answering this
           question: What separates successful initiatives from the many that fail?
        </S.Paragraph>
        <S.BoxImg>
          <S.Img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIj48cmVjdCB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHJ4PSIxLjIiIGZpbGw9IiNjYWFhZTUiLz48cGF0aCBkPSJNMjMuMTYsNTguNjZsMi03LjY3YzYuNjQsNC41NCwxMy40NCw2LjQzLDIzLjExLDYuNDMsNy40NSwwLDkuNjYtMi4yMiw5LjY2LTQuMzgsMC00LjI2LTctMy44OC0xNC41OC00LjE1LTEzLS40My0xOS4xNi00LjU0LTE5LjE2LTEyLjQyLDAtOC4xNSw3LjgyLTExLjcyLDE4LjczLTExLjcyLDksMCwxNi42MywyLDIzLDYuNDNMNjQsMzljLTYuMjEtNC40Mi0xNC44NS02LjM3LTIzLTYuMzctNC4xNiwwLTcuODksMS4wOC03Ljg5LDMuODksMCwzLjI5LDQsNC4yMSwxMi40Miw0LjM3LDExLjc3LjIyLDIxLjMzLDIuMjcsMjEuMzMsMTIuMiwwLDguMDUtOC4zNywxMi4yMS0yMC4xOSwxMi4yMUMzNi44Nyw2NS4yNSwyNy41Myw2Mi40OSwyMy4xNiw1OC42NloiIGZpbGw9IiMyMjI1NGIiLz48L3N2Zz4=" alt="" />
          <p style={{textAlign:'center'}}>© 2021 Strytegy</p>
        </S.BoxImg>
        <p>ISTI Soluções em Tecnologia Ltda</p>
        <p>CNPJ: 13.475.139/0001-33</p>
      </S.Container>
      <S.ContainerMenu>  
        <nav>
          <ul>
          <S.Title>Social</S.Title>
            <S.List>Instagram</S.List>
            <S.List>Facebook</S.List>
            <S.List>Linkedin</S.List>
            <S.List>Blog</S.List>
          </ul>
        </nav>
        <nav>
          <ul>
          <S.Title>Help</S.Title>
            <S.List>FAQ</S.List>
            <S.List>Terms of Use</S.List>
            <S.List>Privace Policy</S.List>
            <S.List>Support</S.List>
          </ul>
        </nav>
      </S.ContainerMenu>
    </S.ContainerFooter>
  );
}
