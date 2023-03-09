import CustomGridFields from "../../components/Form/FormBuilder/types/CustomGridFields";

const articleSearchFields: CustomGridFields[] = [
    {
        gridSize: {
            lg: 3,
            md: 6,
            sm: 12,
        },
        type: "text",
        name: "keyword",
        label: "Keywords",
    },
    {
        gridSize: {
            lg: 3,
            md: 6,
            sm: 12,
        },
        type: "select",
        name: "tag",
        label: "Category/Tag",
        options: [
            {
                value: "business",
                label: "Business",
            },
        ],
    },
    {
        gridSize: {
            lg: 3,
            md: 6,
            sm: 12,
        },
        type: "select",
        name: "source",
        label: "Source",
        defaultValue: "guardian",
        options: [
            {
                value: "guardian",
                label: "The Guardian",
            },
            {
                value: "nytimes",
                label: "New York Times",
            },
            {
                value: "newsapi",
                label: "News API",
            },
        ],
    },
    {
        gridSize: {
            lg: 3,
            md: 6,
            sm: 12,
        },
        type: "select",
        name: "per_page",
        label: "Articles per page",
        fieldDescription: "The number of articles per page",
        options: [
            {
                value: "5",
                label: "5",
            },
            {
                value: "10",
                label: "10",
            },
            {
                value: "15",
                label: "15",
            },
            {
                value: "20",
                label: "20",
            },
        ],
    },
    {
        gridSize: {
            lg: 3,
            md: 6,
            sm: 12,
        },
        type: "date",
        name: "date",
        label: "Date",
    },
];

export default articleSearchFields;
