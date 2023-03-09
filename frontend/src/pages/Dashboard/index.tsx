import React, { useState } from "react";
import { Card } from "@mui/material";
import { Form as FormRig } from "@unform/web";
import CiSearch from "react-icons/ci";

// locals
import { MainDefault } from "../../styles/styled-components";
import { Filters } from "./styles";
import { useForm } from "../../commons/form/useForm";
import FormBuilder from "../../components/Form/FormBuilder";
import { CustomFormButton } from "../../components/Form/Buttons";
import articleSearchFields from "./searchFields";
import SearchFields from "./types";

const Dashboard: React.FC = () => {
    const form = useForm();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchFields, setSearchFields] = useState<SearchFields>(
        {} as SearchFields
    );
    const handleSearchSubmit = () => {};

    return (
        <MainDefault>
            <Filters>
                <FormRig ref={form.ref} onSubmit={() => {}}>
                    <FormBuilder fields={articleSearchFields} />

                    <CustomFormButton
                        title="Search"
                        type="submit"
                        loading={false}
                        sx={{ mt: 2 }}
                    />
                </FormRig>
            </Filters>
        </MainDefault>
    );
};

export default Dashboard;
