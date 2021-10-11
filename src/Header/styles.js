import styled from "styled-components";


export const Container = styled.div`
    width:100%;
    height:15vh;
    background-color:#fff;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    box-shadow:inset 0 0 2px 2px gray;

`
export const Logo = styled.img`
    width:100px;
    heigth:100px;
`

export const BtnMenu = styled.button`
cursor:pointer;
background:transparent;
border:0;
margin-right:5rem;
transition:1s ;
&:nth-child(3) {
    background: rgb(255, 235, 151);
    opacity:0.6;
    width:20vw;
}

`

export const ContainerMenu = styled.div`
    display:flex;
    justify-content:space-evenly;
    width:25vw;
    
`





