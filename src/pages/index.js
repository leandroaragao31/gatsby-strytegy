import React from 'react';
import { graphql } from 'gatsby';
import { Header } from '../Header/index'
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
      image {
        url
        id
      }
      backimg {
        url
        id
      }
    }
  }
}
`


export default function index({ data }) {
  return (
    <div>
      <div>
         <S.GlobalStyles /> 
        {console.log("to aqui:", data)}
       </div>
       <Header 
        image={data.alldata.projects[0].image.url}
        blog={data.alldata.projects[0].btnblog}
        faq={data.alldata.projects[0].btnfaq}
        enter={data.alldata.projects[0].btnenter}
        lang={data.alldata.projects[0].brnlang}
      /> 
    </div>
  );
}
