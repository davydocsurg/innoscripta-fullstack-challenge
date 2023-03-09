import React from "react";
import { Card } from "@mui/material";
import { Form as FormRig } from "@unform/web";
import { MainDefault } from "../../styles/styled-components";
import { Filters } from "./styles";
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
        type: "text",
        name: "category",
        label: "Category",
        placeholder: "crypto",
    },
    {
        gridSize: {
            lg: 3,
            md: 6,
            sm: 12,
        },
        type: "text",
        name: "source",
        label: "Source",
        placeholder: "The Guardian",
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

const Dashboard: React.FC = () => {
    return (
        <MainDefault>
            <Filters>
                <FormRig onSubmit={() => {}}></FormRig>
            </Filters>
        </MainDefault>
    );
};

export default Dashboard;
