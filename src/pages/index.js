import React from 'react';
import { graphql } from 'gatsby';
import { Header } from '../Header/index'
import { Main } from '../Main/index'
import * as S from '../Components/GlobalStyles'


export const query = graphql`
query{
  alldata{
    projects {
      btnblog
      btnfaq
      btnenter
      btnstart
      brnlang
      divtitle
      divparagraph
      title
      subtitle
      titleGif
      paragraphgif
      itemmenu1
      itemmenu2
      itemmenu3
      itemmenu4
      image {
        url
        id
      }
      backimg {
        url
        id
      }
      gifimg {
        url
        id
      }
      imgmain {
        id
        url
      }
    }
  }
}
`


export default function index({ data }) {

  const dataMain = data.alldata.projects[0]

  return (
    <div>
      <div>
        <S.GlobalStyles />
        {console.log("to aqui:", data)}
      </div>
      <Header
        image={dataMain.image.url}
        blog={dataMain.btnblog}
        faq={dataMain.btnfaq}
        enter={dataMain.btnenter}
        lang={dataMain.brnlang}
      />
      <Main
        title={dataMain.title}
        paragraph={dataMain.subtitle}
        btnstart={dataMain.btnstart}
        backimg={dataMain.backimg.url}
        bottomtitle={dataMain.divtitle}
        bottomparagraph={dataMain.divparagraph}
        imagemain={dataMain.gifimg.url}
        titlegif={dataMain.titleGif}
        paragraphgif={dataMain.paragraphgif}
        imgmain={dataMain.imgmain.url}
        item1={dataMain.itemmenu1}
        item2={dataMain.itemmenu2}
        item3={dataMain.itemmenu3}
        item4={dataMain.itemmenu4}

      />
      
    </div>
  );
}


//background: url(${props => props.backgroundImg})