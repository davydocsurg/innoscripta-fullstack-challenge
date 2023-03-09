import React, { ButtonHTMLAttributes, useCallback } from "react";

import generic from "assets/logo.svg";
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
    PublishDate,
    SeeMore,
    Text,
    Title,
} from "./styles";
import { DESCRIPTION_CHARACTERS_LIMIT } from "../../constants";

type IProps = {
    article: any;
};

const NYTimesArticle: React.FC<IProps> = ({ article, ...rest }) => {
    const firstLetterUppercase = useCallback((str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }, []);

    const fixingSizeDescription = useCallback(
        (description: string) => {
            if (description.length <= DESCRIPTION_CHARACTERS_LIMIT) {
                return description;
            }

            let reduced = description.slice(0, DESCRIPTION_CHARACTERS_LIMIT);
            let lastOccurrence = reduced.lastIndexOf(" ");
            let result = reduced.substring(0, lastOccurrence);

            return result + "...";
        },
        [DESCRIPTION_CHARACTERS_LIMIT]
    );

    return (
        <Container>
            <ImgBox>
                <Banner src={article.multimedia[0].url ?? generic} />
            </ImgBox>
            <Content>
                <a href="##">
                    <Title>{article.headline.main}</Title>
                </a>
                <Text>{fixingSizeDescription(article.abstract)}</Text>

                <Footer>
                    <Author>
                        <div>
                            <a href="##">
                                <AuthorInfo>
                                    {firstLetterUppercase(
                                        article.section_name ?? ""
                                    )}
                                    - {article.source}
                                    <br />
                                    <AuthorName>
                                        {article.byline.original ?? "Unknown"}
                                    </AuthorName>
                                </AuthorInfo>
                            </a>

                            <PublishDate>
                                {article.published_at ?? "Unknown"}
                            </PublishDate>
                        </div>
                    </Author>
                    <SeeMore>
                        <ButtonSeeMore
                            target="_blank"
                            href={article.web_url ?? "#"}
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
