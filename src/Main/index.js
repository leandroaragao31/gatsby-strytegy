import React from 'react'
import * as S from './styles'

export function Main({
    title,
    paragraph,
    btnstart,
    backimg,
    bottomtitle,
    bottomparagraph,
    gifImage,
    titlegif,
    paragraphgif,
    imgmain,
    item1,
    item2,
    item3,
    item4,
    titleimgmain,
    paragraphimgmain,
    titleOrganization,
    paragraphOrganization,
    safeTitle,
    imageSafe,
    itemSafe1,
    itemSafe2,
    itemSafe3,
    userTitle,
    paragraphUser,
    imageUser,
    lastTitle,
    lastParagraph,
    btnlastStart
}) {
    return (
        <>
            <S.Container>
                <S.Wrapper>
                    <S.Title>{title}</S.Title>
                    <S.Paragraph>{paragraph}</S.Paragraph>
                    <S.BtnStart>{btnstart}</S.BtnStart>
                </S.Wrapper>
                <img style={{ width: "45vw", height: "78vh;", }} src={backimg} alt="figure header" />
            </S.Container>
            <S.BottomWrapper>
                <S.BottomTitle>{bottomtitle}</S.BottomTitle>
                <S.BottomParagraph>{bottomparagraph}</S.BottomParagraph>
            </S.BottomWrapper>
            <S.MenuMain>
                <S.MenuItem>
                    <S.Item>
                        <S.ItemLink>{item1}</S.ItemLink>
                    </S.Item>
                </S.MenuItem>
                <S.ColumnMenu />
                <S.MenuItem>
                    <S.Item>
                        <S.ItemLink>{item2}</S.ItemLink>
                    </S.Item>
                </S.MenuItem>
                <S.ColumnMenu />
                <S.MenuItem>
                    <S.Item>
                        <S.ItemLink>{item3}</S.ItemLink>
                    </S.Item>
                </S.MenuItem>
                <S.ColumnMenu />
                <S.MenuItem>
                    <S.Item>
                        <S.ItemLink>{item4}</S.ItemLink>
                    </S.Item>
                </S.MenuItem>
            </S.MenuMain>
            <S.BoxGif>
                <figure>
                    <S.ImageGif src={gifImage} alt="gif" />
                </figure>
                <div>
                    <S.TitleGif>{titlegif}</S.TitleGif>
                    <S.ParagraphGif>{paragraphgif}</S.ParagraphGif>
                </div>
            </S.BoxGif>
            <S.BoxImgMain>
                <S.BoxImg>
                    <S.ImageMain src={imgmain} alt="imgMain" />
                </S.BoxImg>
                <div>
                    <S.TitleImgMain>{titleimgmain}</S.TitleImgMain>
                    <S.ParagraphImgMain>{paragraphimgmain}</S.ParagraphImgMain>
                </div>
            </S.BoxImgMain>
            <S.BoxMain>
                <S.WrapperMain>
                    <S.TitleMain>{titleOrganization}</S.TitleMain>
                    <S.ParagraphMain>{paragraphOrganization}</S.ParagraphMain>
                </S.WrapperMain>
            </S.BoxMain>
            <S.ContainerSecurity>
                <S.TitleSecurity>{safeTitle}</S.TitleSecurity>
                <S.ImageSecurity src={imageSafe} alt="security" />
                <S.List>
                    <S.ItemSecurity>{itemSafe1}</S.ItemSecurity>
                    <S.ItemSecurity>{itemSafe2}</S.ItemSecurity>
                    <S.ItemSecurity>{itemSafe3}</S.ItemSecurity>
                </S.List>
            </S.ContainerSecurity>
            <S.BoxMain>
                <S.BoxUsers>
                    <S.TitleUsers>{userTitle}</S.TitleUsers>
                    <S.Users>{paragraphUser} </S.Users>
                    <S.BoxImgUsers>
                        <S.ImgUsers src={imageUser} alt="" />
                        <div>
                            <h3>Renan Carvalho</h3>
                            <p>Product Designer at Vai na Web</p>
                        </div>
                    </S.BoxImgUsers>
                </S.BoxUsers>
            </S.BoxMain>
            <S.BoxMainFinal>
                <h2 style={{ fontSize: "9vh" }}>{lastTitle}</h2>
                <div>
                    <p style={{ fontSize: "3.4vh", width: "44vw" }}>{lastParagraph}</p>
                    <S.BtnMainFinal>{btnlastStart}</S.BtnMainFinal>
                </div>
            </S.BoxMainFinal>
        </>

    )
}


