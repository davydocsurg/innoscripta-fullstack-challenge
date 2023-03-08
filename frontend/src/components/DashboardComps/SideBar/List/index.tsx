import React, { Fragment } from "react";

import {
    Divider,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { List as ListMUI } from "@mui/material";

import { sidebarData } from "../../../../constants";

// import { useAuth } from 'hooks/auth';
// import { useSettings } from 'hooks/settings';

import { Link } from "./styles";

interface IProps {
    open: boolean;
}

interface IItem {
    title: string;
    path: string;
    icon: JSX.Element;
}

const List: React.FC<IProps> = ({ open }) => {
    //   const { signOut } = useAuth();
    //   const { saveSettingsBackend } = useSettings();

    async function handleClick(item: IItem) {
        // if (item.title === 'Logout') {
        //   await saveSettingsBackend();
        //   signOut();
        // }
    }

    return (
        <>
            {sidebarData.map((group, i) => (
                <Fragment key={i}>
                    <Divider />
                    <ListMUI>
                        {group.map((item: IItem, index) => (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={{ display: "block" }}
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => handleClick(item)}
                                >
                                    <ListItemButton
                                        sx={{
                                            minHeight: 48,
                                            justifyContent: open
                                                ? "initial"
                                                : "center",
                                            px: 2.5,
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                minWidth: 0,
                                                mr: open ? 3 : "auto",
                                                justifyContent: "center",
                                            }}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.title}
                                            sx={{ opacity: open ? 1 : 0 }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </ListMUI>
                </Fragment>
            ))}
        </>
    );
};

export default List;
