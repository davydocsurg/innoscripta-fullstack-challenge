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

type NYTimesProps = {
    nytArticle: any;
};

const NYTimesArticle: React.FC<NYTimesProps> = ({ nytArticle, ...rest }) => {
    return (
        <Container>
            <ImgBox>
                {/* check if the image path is correct otherwise, use the default */}
                <Banner src={generic} />
                {/* nytArticle.multimedia[0].url ?? */}
            </ImgBox>
            <Content>
                <a href="##">
                    <Title>{nytArticle.headline.main}</Title>
                </a>
                <Text>{fixDescriptionSize(nytArticle.abstract)}</Text>

                <Footer>
                    <Author>
                        <div>
                            <a href="##">
                                <AuthorInfo>
                                    {capitalizeFirstLetter(
                                        nytArticle.section_name ?? ""
                                    )}
                                    - {nytArticle.source}
                                    <br />
                                    <AuthorName>
                                        {nytArticle.byline.original ??
                                            "Unknown"}
                                    </AuthorName>
                                </AuthorInfo>
                            </a>

                            <PublishedDate>
                                {nytArticle.pub_date
                                    ? formatPublishedDate(nytArticle.pub_date)!
                                    : "Unknown"}
                            </PublishedDate>
                        </div>
                    </Author>
                    <SeeMore>
                        <ButtonSeeMore
                            target="_blank"
                            href={nytArticle.web_url ?? "#"}
                        >
                            <IoArrowRedo />
                        </ButtonSeeMore>
                    </SeeMore>
                </Footer>
            </Content>
        </Container>
    );
};

export default NYTimesArticle;
