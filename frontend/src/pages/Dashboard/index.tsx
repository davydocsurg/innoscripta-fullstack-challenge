import React, { useCallback, useEffect, useState } from "react";
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
import { Toast } from "../../utils/toast";
import { api, endPoints } from "../../services";
import { useAuth } from "../../contexts";

// types
import type { SearchFields } from "../../types";

const Dashboard: React.FC = () => {
    const form = useForm();
    const { loading, setLoading } = useAuth();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<number>(1);
    const [searchFields, setSearchFields] = useState<SearchFields>(
        {} as SearchFields
    );
    // nytimes articles
    const [nytimesArticles, setNytimesArticles] = useState<any[]>([]);

    const handleSearchSubmit = useCallback(
        async ({
            keyword,
            source,
            current_page,
            end_date,
            from_date,
            per_page,
            tag,
        }: SearchFields) => {
            setLoading(true);

            setSearchFields({
                keyword: keyword,
                source: source,
                from_date: from_date || "",
                end_date: end_date || "",
                tag: tag || "",
                per_page: per_page || 5,
                current_page: current_page || 1,
            });

            await triggerSearch({
                keyword,
                source,
                current_page,
                end_date,
                from_date,
                per_page,
                tag,
            });
        },
        [form]
    );

    const triggerSearch = useCallback(
        async ({
            keyword,
            source,
            current_page,
            end_date,
            from_date,
            per_page,
            tag,
        }: SearchFields) => {
            let toast = new Toast().loading("Processing articles...");
            try {
                const res = await api.post(endPoints.searchArticles, {
                    keyword,
                    source,
                    from_date,
                    current_page,
                    end_date,
                    per_page,
                    tag,
                });

                console.log(res.data);
            } catch (error: any) {
                console.error(error);

                // toast.error(error.message);
            }
            setLoading(false);
        },
        [searchFields]
    );

    // useEffect(() => {
    //     triggerSearch();
    // }, [searchFields, loading]);

    return (
        <MainDefault>
            <Filters>
                <FormRig ref={form.ref} onSubmit={handleSearchSubmit}>
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
