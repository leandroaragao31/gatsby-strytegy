import React from 'react'
import * as S from './styles'

export function Main({
    title,
    paragraph,
    btnstart,
    backimg,
    bottomtitle,
    bottomparagraph,
    imagemain,
    titlegif,
    paragraphgif,
    imgmain,
    item1,
    item2,
    item3,
    item4
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
            <S.LinksMenu>
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

            </S.LinksMenu>

            <S.BoxGif>
                <figure>
                    <S.ImageMain src={imagemain} alt="gif" />
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
                    <S.TitleImgMain>Uncomplicated, intuitive, friendly</S.TitleImgMain>
                    <S.ParagraphImgMain>Ideal for who is looking to increase productivity and potentialize<br /> collaboration.
                        <br />Everything free, like thinking.</S.ParagraphImgMain>
                </div>
            </S.BoxImgMain>

            <S.BoxMain>
                <S.WrapperMain>
                    <S.TitleMain>For you, for your team and your organization</S.TitleMain>
                    <S.ParagraphMain>Strytegy is a valuable tool to make you and your team more efficient in project management and new business development.</S.ParagraphMain>
                </S.WrapperMain>
            </S.BoxMain>
            <S.ContainerSecurity>
                <S.TitleSecurity>Your data is safe</S.TitleSecurity>
                <S.ImageSecurity src='https://www.strytegy.com/static/security-3b980a306563c64f34ffb76769f48cf0.webp' alt="security" />
                <S.List>
                    <S.ItemSecurity>Strytegy follows the Brazilian Federal law number 13.709/18 (Brazilian General Personal Data Protection Law – “LGPD”)</S.ItemSecurity>
                    <S.ItemSecurity>The security is compatible with the certifications CSA, SOC 1-3, ISO/IEC 27001, SO/IEC 27017, ISO/IEC 27018 and ISO 9001.</S.ItemSecurity>
                    <S.ItemSecurity>Strytegy follows the Allowlisting protocol: a measure that reduces harmful security attacks by allowing only trusted files, canvases, journeys and processes to be run.</S.ItemSecurity>
                </S.List>
            </S.ContainerSecurity>
            <S.BoxMain>
                <S.BoxUsers>
                    <S.TitleUsers>What the users are saying</S.TitleUsers>
                    <S.Users>"I really enjoy using Strytegy because I can share and organize my work script with my teammates dynamically, remotely and in real time." </S.Users>
                    <S.BoxImgUsers>
                        <S.ImgUsers src="https://media.graphcms.com/OTNobCioT8uGxRJCeCku" alt=""/>
                        <div>
                        <h3>Renan Carvalho</h3>
                        <p>Product Designer at Vai na Web</p>
                        </div>
                    </S.BoxImgUsers>
                </S.BoxUsers>
            </S.BoxMain>
            <S.BoxMainFinal>
                <h2 style={{fontSize:"9vh"}}>Collaborate remotely</h2>
                <div>
                <p style={{fontSize:"3.4vh", width:"44vw"}}>We want to be the preferred partner in your next big step. Invite your team, partners and stakeholders to create projects and generate results in an uncomplicated, intuitive and friendly way.All of this with free access.</p>
                <S.BtnMainFinal>Start now, free!</S.BtnMainFinal>
                </div>
            </S.BoxMainFinal>
        </>

    )
}


