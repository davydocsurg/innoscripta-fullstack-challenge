import React, { memo, useCallback, useEffect, useState } from "react";

import { Form as FormUnform } from "@unform/web";

import FormBuilder from "../../../components/Form/FormBuilder";
import CustomGridFields from "../../../components/Form/FormBuilder/types/CustomGridFields";
import IOption from "../../../components/Form/Select/IOption";

import { useForm } from "../../../commons/form/useForm";
import { useUserSettings } from "../../../contexts/settings";
import { Toast } from "../../../utils/toast";

import api from "../../../services/api";

import {
    Body,
    Button,
    CloseButton,
    ModalBackground,
    ModalContainer,
    TitleCustomize,
} from "./styles";

type ModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

interface IModalFormData {
    favorite_authors: string[];
    favorite_categories: string[];
    favorite_sources: string[];
}

const UserSettingsModal: React.FC<ModalProps> = memo(
    ({ isOpen, setIsOpen }) => {
        const form = useForm();
        const { userSettings, saveSettings } = useUserSettings();

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
                favorite_authors,
                favorite_categories,
                favorite_sources,
            }: IModalFormData) => {
                await saveSettings({
                    favorite_authors,
                    favorite_categories,
                    favorite_sources,
                });

                setIsOpen(false);
            },
            [form]
        );

        const fields: CustomGridFields[] = [
            {
                gridSize: {
                    sm: 12,
                },
                type: "select",
                name: "favorite_authors",
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
                name: "favorite_categories",
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
                name: "favorite_sources",
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
    }
);

export default UserSettingsModal;
