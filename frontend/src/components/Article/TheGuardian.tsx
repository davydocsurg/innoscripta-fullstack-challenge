import React from "react";

import generic from "../../assets/article-image.png";
import { IoArrowRedo } from "react-icons/io5";

import {
    Author,
    AuthorInfo,
    AuthorName,
    Banner,
    ButtonSeeMore,
    Container,
    Content,
    Footer,
    ImgBox,
    PublishedDate,
    SeeMore,
    Text,
    Title,
} from "./styles";
import { capitalizeFirstLetter, formatPublishedDate } from "./helpers";

type TheGuardianProps = {
    guardianArticle: any;
};

const TheGuardianArticle: React.FC<TheGuardianProps> = ({
    guardianArticle,
    ...rest
}) => {
    return (
        <Container>
            <ImgBox>
                <Banner src={generic} />
            </ImgBox>
            <Content>
                <a href="##">
                    <Title>{guardianArticle.webTitle}</Title>
                </a>
                <Text>
                    Follow this <a href={guardianArticle.apiUrl}>link</a> to see
                    the full article on The Guardian
                </Text>
                <Footer>
                    <Author>
                        <div>
                            <a href="##">
                                <AuthorInfo>
                                    {capitalizeFirstLetter(
                                        guardianArticle.sectionName ?? ""
                                    )}
                                    <br />
                                    <AuthorName>
                                        {guardianArticle.pillarName ??
                                            "Unknown"}
                                    </AuthorName>
                                </AuthorInfo>
                            </a>

                            <PublishedDate>
                                {guardianArticle.webPublicationDate !== null
                                    ? formatPublishedDate(
                                          guardianArticle.webPublicationDate
                                      )
                                    : "Unknown"}
                            </PublishedDate>
                        </div>
                    </Author>
                    <SeeMore>
                        <ButtonSeeMore
                            target="_blank"
                            href={guardianArticle.webUrl ?? "#"}
                        >
                            <IoArrowRedo />
                        </ButtonSeeMore>
                    </SeeMore>
                </Footer>
            </Content>
        </Container>
    );
};

export default TheGuardianArticle;
