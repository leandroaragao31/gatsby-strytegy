import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:center;
    

`
export const Title = styled.h2`
    font-weight:700;
    font-size:3vh;
    margin-top:4vh;
    text-aling:center;

`
export const Paragraph = styled.p`
    width:39vw;
    font-weight:100;
`
export const ContainerFooter = styled.section`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:rgb(236, 231, 247);
`
export const BoxImg = styled.figure`
    display:flex;
    align-items:center;
    position:relative;
    right:5vw;
    
`
export const Img = styled.img`
    width:8vw;
    height:8vh;
    
`
export const ContainerMenu = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:35vw;
    text-aling:center;
`
export const List = styled.li`
    list-style:none;
    cursor:pointer;
    margin-top:1.5vh;
    font-size:1vw;
`