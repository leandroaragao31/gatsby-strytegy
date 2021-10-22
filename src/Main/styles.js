import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 3rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
`

export const Title = styled.h1`
    width: 40vw;
    color: rgb(34, 37, 75);
    font-size:2.5rem;
    margin-top:15vh;
`

export const Paragraph = styled.p`
    width: 33vw;
    color: rgb(34, 37, 75);
    opacity: 0.9;
    font-size: 1.5rem;
`

export const BtnStart = styled.button`
    background: #FFD700;
    width: 15vw;
    margin-top:15vh;
    font-size:3vh;
    border: none;
    cursor: pointer;
    font-weight: 700;
`

export const BottomTitle = styled.h2`
    color: rgb(34, 37, 75);
    font: 500 3.4375rem sans-serif;
    transition: 1s;

`


export const BottomParagraph = styled.p`
    width: 51vw;
    color: rgb(34, 37, 75);
    opacity: 0.9;
    font-size:1.5rem;
    text-align: center;
`

export const BottomWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height:50vh;
    align-items: center;
`

export const BoxGif = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(34, 37, 75);
    height: 55vh;
`
export const ImageGif = styled.img`
    width:26vw;
    height:46vh;
`

export const ImageMain = styled.img`
    width: 26vw;
    height: 60vh;
    
`

export const TitleGif = styled.h2`
    color: #fff;
    font-size:3rem;
     font-weight: bold;
`

export const ParagraphGif = styled.p`
    width: 32vw;
    color: #fff;
    font-size:1.5rem;
`

export const BoxImgMain = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const TitleImgMain = styled.h2`
    width: 40vw;
    font-size:8vh;
    color: rgb(34, 37, 75);
`

export const ParagraphImgMain = styled.p`
    color: rgb(34, 37, 75);
    font-weight:light;
    width:30vw;
    font-size:3.5vh;
`

export const BoxMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height:75vh;
    background-color: rgb(34, 37, 75);
`
export const BoxImg = styled.figure`
    height:70vh;
    width: 25vw;
    display:flex;
    align-items:center;
`

export const ParagraphMain = styled.p`
    width: 50vw;
    font-size:3.5vh;
    color: #fff;
`
export const TitleMain = styled.h2`
    width: 35vw;
    font-size:6.5vh;
    font-weight:bolder;
    color: #fff;
`

export const WrapperMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`

export const MenuMain = styled.div`
    width: 75vw;
    height: 17vh;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0px 0px 20px #00000014;
    display: flex;
    align-self: center;
    left: 13vw;
    top:143vh;    
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
`
export const MenuItem = styled.a`
    width: 24%;
    height:85%;
`
export const Item = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover{
        font-weight: 700;
        background-color: #FFCE06;
        border-radius: 15px;
        cursor: pointer;
    }
`
export const ColumnMenu = styled.div`
    width: 0.2%;
    height: 40%;
    background-color: #22254B;
`
export const ItemLink = styled.p`
    width: 90%;
    font-family: 'Paralucent';
    font-size: 1.6vw;
    text-align: center;
`



export const TitleSecurity = styled.h2`
    margin-bottom: 1rem;
    color: rgb(34, 37, 75);
    font: 500 3.4375rem Paralucent, sans-serif;
`;

export const ContainerSecurity = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    width: 80%;
    margin: 0px auto;
    padding: 0px 0px 7rem;
    max-width: 1440px;
`;

export const ImageBox = styled.div`
    width: 70%;
    margin: 3rem 0p;
`;

export const ImageSecurity = styled.img`
    width: 70%;
    margin: 3rem 0p;
`;

export const List = styled.ul`
    margin-top: 2rem;
    `;

export const ItemSecurity = styled.li`
    font: 300 1.375rem / 1.875rem Soleto, sans-serif;
    padding: 0.875rem;
    color: rgb(34, 37, 75);
    text-align: center;
}
`;

export const BoxUsers = styled.div`
    color:#fff;
    display:flex;
    flex-direction:column;
    text-align: center;
    
    
`
export const TitleUsers = styled.h2`
    color:#fff;
    font-size:9vh;
`

export const Users = styled.p`
    color:#fff;
    font-size:3vh;
    width:60vw; 
    margin-top:13vh;
`

export const ImgUsers = styled.img`
    width:6vw;
    border-radius:50%;
`
export const BoxImgUsers = styled.figure`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    height:20vh;
    width:25vw;
    margin-left:15vw;
`

export const BoxMainFinal = styled.div`
    display: flex;
    background-color:rgb(236, 231, 247);
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-weight:200;
    height:75vh;
    border-bottom:solid 0.5px #DCDCDC;
`
export const BtnMainFinal = styled.button`
    background: #FFD700;
    width: 11vw;
    height:8vh;
    font-size:2vh;
    font-weight:700;
    border:none;
    cursor:pointer;

`
