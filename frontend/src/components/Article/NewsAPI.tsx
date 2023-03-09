import React from "react";
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
import generic from "../../assets/article-image.png";
import {
    capitalizeFirstLetter,
    fixDescriptionSize,
    formatPublishedDate,
} from "./helpers";

type NewsAPIProps = {
    newsapi: any;
};

const NewsAPIArticle: React.FC<NewsAPIProps> = ({ newsapi, ...rest }) => {
    return (
        <Container>
            <ImgBox>
                {/* check if the image path is correct otherwise, use the default */}
                <Banner src={newsapi.urlToImage ?? generic} />
                {/*  */}
            </ImgBox>
            <Content>
                <a href="##">
                    <Title>{newsapi.title}</Title>
                </a>
                <Text>{fixDescriptionSize(newsapi.description)}</Text>

                <Footer>
                    <Author>
                        <div>
                            <a href="##">
                                <AuthorInfo>
                                    {capitalizeFirstLetter("Source ")}-{" "}
                                    {newsapi.source.name}
                                    <br />
                                    <AuthorName>
                                        {newsapi.author ?? "Unknown"}
                                    </AuthorName>
                                </AuthorInfo>
                            </a>

                            <PublishedDate>
                                {newsapi.pub_date
                                    ? formatPublishedDate(newsapi.publishedAt)!
                                    : "Unknown"}
                            </PublishedDate>
                        </div>
                    </Author>
                    <SeeMore>
                        <ButtonSeeMore
                            target="_blank"
                            href={newsapi.url ?? "#"}
                        >
                            <IoArrowRedo />
                        </ButtonSeeMore>
                    </SeeMore>
                </Footer>
            </Content>
        </Container>
    );
};

export default NewsAPIArticle;
