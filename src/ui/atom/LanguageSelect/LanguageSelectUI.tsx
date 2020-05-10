import React from "react";
import {IconButton, Menu, MenuItem} from "@material-ui/core";

interface IProps {
    localizationLanguage: string;
    onAppLanguageChange(lang: string): void;
}

interface ILocalState {
    anchorEl: null | HTMLElement;
    isOpen: boolean;
}

export default class LanguageSelectUI extends React.PureComponent<IProps, ILocalState> {
    public state = {
        anchorEl: null,
        isOpen: false,
    };

    public render() {
        const {localizationLanguage} = this.props;
        return (
            <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                >
                    {localizationLanguage.toUpperCase()}
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    open={this.state.isOpen}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={() => this.handleAppLanguageChange("sk")}>SK</MenuItem>
                    <MenuItem onClick={() => this.handleAppLanguageChange("en")}>EN</MenuItem>
                </Menu>
            </div>
        );
    }

    public handleAppLanguageChange = (langCode: string) => {
        this.props.onAppLanguageChange(langCode);

        this.setState({
            anchorEl: null,
            isOpen: false,
        });
    };

    public handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        this.setState({
            anchorEl: event.currentTarget,
            isOpen: true,
        });
    };

    public handleClose = () => {
        this.setState({
            anchorEl: null,
            isOpen: false,
        });
    };
}
