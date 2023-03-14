import React, {
    createContext,
    PropsWithChildren,
    useContext,
    useState,
} from "react";

type GuardianArticle = {
    id: string;
    webTitle: string;
    sectionName: string;
    pillarName: string;
    webPublicationDate?: string;
    apiUrl: string;
    webUrl?: string;
};

type NYTimesArticle = {
    _id: string;
    headline: {
        main: string;
    };
    abstract: string;
    section_name: string;
    source: string;
    byline: {
        original: string;
    };
    pub_date?: string;
    web_url?: string;
};

type NewsAPIArticle = {
    urlToImage: string;
    title: string;
    description: string;
    source?: {
        name: string;
    };
    author?: string;
    publishedAt?: string;
    url?: string;
};

type ArticleContextData = {
    guardian: GuardianArticle[];
    nytimes: NYTimesArticle[];
    newsapi: NewsAPIArticle[];
    loading: boolean;
    setLoading: (loading: boolean) => void;
    setGuardianArticles: (guardianArticles: GuardianArticle[]) => void;
    setNYTimesArticles: (nytimesArticles: NYTimesArticle[]) => void;
    setNewsAPIArticles: (newsAPIArticles: NewsAPIArticle[]) => void;
};

const ArticleContext = createContext<ArticleContextData>(
    {} as ArticleContextData
);

export const ArticleProvider: React.FC<PropsWithChildren<{}>> = ({
    children,
}) => {
    const [loading, setLoading] = useState(false);

    const [guardianArticles, setGuardianArticles] = useState<GuardianArticle[]>(
        []
    );
    const [nytimesArticles, setNYTimesArticles] = useState<NYTimesArticle[]>(
        []
    );
    const [newsAPIArticles, setNewsAPIArticles] = useState<NewsAPIArticle[]>(
        []
    );

    return (
        <ArticleContext.Provider
            value={{
                guardian: guardianArticles,
                nytimes: nytimesArticles,
                newsapi: newsAPIArticles,
                loading,
                setLoading,
                setGuardianArticles,
                setNYTimesArticles,
                setNewsAPIArticles,
            }}
        >
            {children}
        </ArticleContext.Provider>
    );
};

export function useArticleContext(): ArticleContextData {
    const context = useContext(ArticleContext);

    if (!context) {
        throw new Error(
            "useArticleContext must be used within an ArticleProvider"
        );
    }

    return context;
}
