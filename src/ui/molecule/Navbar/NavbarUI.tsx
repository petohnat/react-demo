import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
import TRANSLATIONS from "config/localizationConfig";
import LanguageSelectUI from "ui/atom/LanguageSelect/LanguageSelectUI";

export interface IExternalProps {
    localizationLanguage: string;
    onAppLanguageChange(lang: string): void;
}

type IProps = IExternalProps;

export default class NavbarUI extends React.PureComponent<IProps> {
	public render() {
		const {localizationLanguage} = this.props;
		
		return (
			<AppBar>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className="navbar__title">
                        <Link to="/" color="inherit" className="navbar__link">
                            {TRANSLATIONS.DEFAULT_NAVBAR.TITLE[localizationLanguage]}
                        </Link>
                    </Typography>
					<LanguageSelectUI
                        localizationLanguage={localizationLanguage}
						onAppLanguageChange={this.props.onAppLanguageChange}
					/>
                </Toolbar>
			</AppBar>
		);
	}
}
