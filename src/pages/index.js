import React from 'react';
import { graphql } from 'gatsby';
import { Header } from '../Header/index'
import { Main } from '../Main/index'
import * as S from '../Components/GlobalStyles'
import { Footer } from "../Footer/index"


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
      titleMain
      paragraphMain
      titleMainBottom
      paragraphMainBottom
      titleSecurity
      itemSecurityList
      itemSecurityList2
      itemSecurityList3
      titleUsers
      paragraphUsers
      lastMainTitle
      lastMainParagraph
      btnStartNow
      image {
        url
      }
      backimg {
        url
      }
      imgmain {
        url
      }
      imageSecurity{
        url
      }
      profileImg{
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
        titlegif={dataMain.titleGif}
        paragraphgif={dataMain.paragraphgif}
        imgmain={dataMain.imgmain.url}
        item1={dataMain.itemmenu1}
        item2={dataMain.itemmenu2}
        item3={dataMain.itemmenu3}
        item4={dataMain.itemmenu4}
        titleimgmain={dataMain.titleMain}
        paragraphimgmain={dataMain.paragraphMain}
        titleOrganization={dataMain.titleMainBottom}
        paragraphOrganization={dataMain.paragraphMainBottom}
        safeTitle={dataMain.titleSecurity}
        imageSafe={dataMain.imageSecurity.url}
        itemSafe1={dataMain.itemSecurityList}
        itemSafe2={dataMain.itemSecurityList2}
        itemSafe3={dataMain.itemSecurityList3}
        userTitle={dataMain.titleUsers}
        paragraphUser={dataMain.paragraphUsers}
        imageUser={dataMain.profileImg.url}
        lastTitle={dataMain.lastMainTitle}
        lastParagraph={dataMain.lastMainParagraph}
        btnlastStart={dataMain.btnStartNow}
      />
      <Footer />
    </div>
  );
}


