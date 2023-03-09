import React, { ButtonHTMLAttributes, useCallback } from "react";

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
    PublishDate,
    SeeMore,
    Text,
    Title,
} from "./styles";
import { DESCRIPTION_CHARACTERS_LIMIT } from "../../constants";

type NYTimesProps = {
    guardianArticle: any;
};

const TheGuardianArticle: React.FC<NYTimesProps> = ({
    guardianArticle,
    ...rest
}) => {
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
                <Banner src={guardianArticle.multimedia[0].url ?? generic} />
            </ImgBox>
            <Content>
                <a href="##">
                    <Title>{guardianArticle.headline.main}</Title>
                </a>
                <Text>{fixingSizeDescription(guardianArticle.abstract)}</Text>

                <Footer>
                    <Author>
                        <div>
                            <a href="##">
                                <AuthorInfo>
                                    {firstLetterUppercase(
                                        guardianArticle.section_name ?? ""
                                    )}
                                    - {guardianArticle.source}
                                    <br />
                                    <AuthorName>
                                        {guardianArticle.byline.original ??
                                            "Unknown"}
                                    </AuthorName>
                                </AuthorInfo>
                            </a>

                            <PublishDate>
                                {guardianArticle.published_at ?? "Unknown"}
                            </PublishDate>
                        </div>
                    </Author>
                    <SeeMore>
                        <ButtonSeeMore
                            target="_blank"
                            href={guardianArticle.web_url ?? "#"}
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
