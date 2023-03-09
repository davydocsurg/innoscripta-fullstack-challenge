import React, { memo, useCallback, useEffect, useState } from "react";

import { Form as FormUnform } from "@unform/web";

import FormBuilder from "../../../components/Form/FormBuilder";
import CustomGridFields from "../../../components/Form/FormBuilder/types/CustomGridFields";
import IOption from "../../../components/Form/Select/IOption";

import { useForm } from "hooks/form/useForm";
import { useSettings } from "hooks/settings";
import Toast from "hooks/toast/Toast";

import api from "services/api";

import {
    Body,
    Button,
    CloseButton,
    ModalBackground,
    ModalContainer,
    TitleCustomize,
} from "./styles";

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

interface IModalFormData {
    fav_authors: string[];
    fav_categories: string[];
    fav_sources: string[];
}

const ModalCustomize: React.FC<IProps> = memo(({ isOpen, setIsOpen }) => {
    const form = useForm();
    const { settings, saveSettings } = useSettings();

    const [authors, setAuthors] = useState<IOption[]>([]);
    const [categories, setCategories] = useState<IOption[]>([]);
    const [sources, setSources] = useState<IOption[]>([]);

    function closeModal() {
        setIsOpen(false);
    }

    function handleClickClose(
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    const handleSubmit = useCallback(
        async ({
            fav_authors,
            fav_categories,
            fav_sources,
        }: IModalFormData) => {
            await saveSettings({
                fav_authors,
                fav_categories,
                fav_sources,
            });

            setIsOpen(false);
        },
        [form]
    );

    useEffect(() => {
        Promise.all([
            api.get("/articles/authors").then(({ data }) => {
                setAuthors(
                    data.data.map((author: string) => ({
                        value: author,
                        label: author,
                    }))
                );
            }),

            api.get("/articles/categories").then(({ data }) => {
                setCategories(
                    data.data.map((category: string) => ({
                        value: category,
                        label: category,
                    }))
                );
            }),

            api.get("/articles/sources").then(({ data }) => {
                setSources(
                    data.data.map((author: string) => ({
                        value: author,
                        label: author,
                    }))
                );
            }),
        ])
            .then(() => {
                form.setData(settings);
            })
            .catch((error) => {
                new Toast().error(
                    "Error loading page information! Contact the Support"
                );
            });
    }, []);

    const fields: CustomGridFields[] = [
        {
            gridSize: {
                sm: 12,
            },
            type: "select",
            name: "fav_authors",
            label: "Favorite Authors",
            options: authors,
            multiple: true,
            check: true,
            chip: true,
            maxOptionsLimit: 3,
        },
        {
            gridSize: {
                sm: 12,
            },
            type: "select",
            name: "fav_categories",
            label: "Favorite Categories",
            options: categories,
            multiple: true,
            check: true,
            chip: true,
            maxOptionsLimit: 3,
        },
        {
            gridSize: {
                sm: 12,
            },
            type: "select",
            name: "fav_sources",
            label: "Favorite Sources",
            options: sources,
            multiple: true,
            check: true,
            chip: true,
            maxOptionsLimit: 3,
        },
    ];

    return (
        <ModalBackground onClick={handleClickClose} isOpen={isOpen}>
            <ModalContainer>
                <CloseButton>
                    <button onClick={closeModal}>X</button>
                </CloseButton>
                <Body>
                    <TitleCustomize variant="h5" color="primary">
                        CUSTOMIZE YOUR FEED
                    </TitleCustomize>
                    <small>
                        You can select 3 favorite authors, categories and
                        sources to filter your feed.
                    </small>
                    <FormUnform
                        ref={form.ref}
                        onSubmit={handleSubmit}
                        style={{
                            marginTop: "20px",
                        }}
                    >
                        <FormBuilder fields={fields} />
                        <Button type="submit">SAVE AND FILTER</Button>
                    </FormUnform>
                </Body>
            </ModalContainer>
        </ModalBackground>
    );
});

export default ModalCustomize;
