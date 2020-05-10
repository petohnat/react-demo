import React from "react";
import {Box, Container, Paper} from "@material-ui/core";
import SectionTitleUI from "ui/atom/SectionTitle/SectionTitleUI";
import {User} from "service/User/state";
import {History} from "history";
import {ROUTE} from "app/routes";
import LoginFormUI from "ui/forms/LoginForm/LoginFormUI";
import TRANSLATIONS from "config/localizationConfig";
import Snackbar from "../../molecule/Snackbar/Snackbar";

export interface IDataProps {
    user: User;
    localizationLanguage: string;
    lastEventMessage: null | string;
}

export interface ICallbackProps {
    onUserLogin(email: string, password: string): void;
    onClearLastEventMessage(): void;
}

export interface IExternalProps {
    history: History
}

interface IState {
    isToastVisible: boolean;
}

type Props = IDataProps & ICallbackProps & IExternalProps;

export default class LoginUI extends React.PureComponent<Props, IState> {
    public state = {
        isToastVisible: false,
    };

    public componentDidUpdate(prevProps: Props) {
        if (this.props.lastEventMessage) {
            this.setState({
                isToastVisible: true,
            });
        }

        if (this.props.user && this.props.user.isLogged) {
            this.props.history.push(ROUTE.MASTERPIECE);
        }
    }

    public render() {
        const {localizationLanguage} = this.props;

        return (
            <React.Fragment>
                <Container component="div" maxWidth="sm">
                    <Box component="div" className="form__box">
                        <Paper elevation={0} className="form__paper form__paper--color">
                            <SectionTitleUI label={TRANSLATIONS.LOGIN.TITLE[localizationLanguage]}/>
                            <LoginFormUI
                                localizationLanguage={localizationLanguage}
                                onUserLogin={this.props.onUserLogin}
                            />
                        </Paper>
                    </Box>
                </Container>
                {this.state.isToastVisible &&
                    <Snackbar
                        message={this.props.lastEventMessage || ""}
                        duration={3000}
                        onSnackbarVisibilityChange={this.onSnackbarVisibilityChange}
                        isOpen={this.state.isToastVisible}
                    />
                }
            </React.Fragment>
        );
    }

    private onSnackbarVisibilityChange = (isOpen: boolean) => {
        if (!isOpen) {
            this.props.onClearLastEventMessage();
        }

        this.setState({
            isToastVisible: isOpen,
        });
    }
}
