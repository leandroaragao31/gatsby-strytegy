import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    height:15vh;
    background-color:#fff;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    box-shadow:inset 0 0 2px 2px #DCDCDC;

`
export const Logo = styled.img`
    width:11vw;
    heigth:10vh;
    margin-right: 25vw;
`

export const BtnMenu = styled.button`
cursor:pointer;
background:transparent;
border:0;
font-size:1.5vw;
margin-right:1vw;
transition: all ms cubic-bezier(0.420, 0.000, 0.580, 1.000);
&:hover{
    border-bottom: solid;
}
    &:nth-child(3) {
        background: rgb(255, 235, 151);
        width: 11vw;
        height:8vh;
        border:none;
      &:hover{
        background:#FFD700;
        transition-timing-function: cubic-bezier(0.470, 0.000, 0.745, 0.715); 
      }  
      }
    &:nth-child(4) {
        border: solid 1.5px #000;
        border-radius: 50%;
        font-size: 0.9vw;
        margin-top:2vh;

        width: 28px;
        height: 28px;
      }

`

export const ContainerMenu = styled.div`
    display:flex;
    justify-content:space-evenly;
    width:25vw;
    
`





