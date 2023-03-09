import React, { ButtonHTMLAttributes, useCallback } from "react";

import generic from "../../assets/logo.svg";
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

type NYTimesProps = {
    nytArticle: any;
};

const NYTimesArticle: React.FC<NYTimesProps> = ({ nytArticle, ...rest }) => {
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
                <Banner src={nytArticle.multimedia[0].url ?? generic} />
            </ImgBox>
            <Content>
                <a href="##">
                    <Title>{nytArticle.headline.main}</Title>
                </a>
                <Text>{fixingSizeDescription(nytArticle.abstract)}</Text>

                <Footer>
                    <Author>
                        <div>
                            <a href="##">
                                <AuthorInfo>
                                    {firstLetterUppercase(
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

                            <PublishDate>
                                {nytArticle.published_at ?? "Unknown"}
                            </PublishDate>
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
