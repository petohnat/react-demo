import React from "react";
import {Provider} from "react-redux";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {Store} from "redux";
import styled from "styled-components";
import {ROUTE} from "app/routes";
import NavbarUI from "ui/molecule/Navbar/NavbarUI";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import {theme} from "app/theme";
import {History} from "history";
import {User} from "../../../service/User/state";
import MiniDrawer from "../../molecule/DashboardNavbar/MiniVariantNavbarUI";
import Login from "../Login/Login";

export interface IDataProps {
    applicationVersion: string;
    user: User;
    localizationLanguage: string;
}

export interface ICallbackProps {
    onUserLogout(): void;
    onAppLanguageChange(lang: string): void;
}

export interface IExternalProps {
    store: Store;
    history: History;
}

type Props = IDataProps & ICallbackProps & IExternalProps;

interface ILocalState {
}

export default class AppUI extends React.PureComponent<Props, ILocalState> {
    public render() {
        const {store, history, user, localizationLanguage} = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <Provider store={store}>
                    <Router history={history}>
                        <AppContainer>
                            {user.isLogged ?
                                <MiniDrawer
                                    user={user}
                                    localizationLanguage={localizationLanguage}
                                    onUserLogout={this.props.onUserLogout}
                                    onAppLanguageChange={this.props.onAppLanguageChange}
                                />
                            :
                                <>
                                    <NavbarUI
                                        localizationLanguage={localizationLanguage}
                                        onAppLanguageChange={this.props.onAppLanguageChange}
                                    />
                                    <Redirect to={ROUTE.HOME}/>
                                    <Switch>
                                        <Route
                                            key="login-default"
                                            exact={true}
                                            path={"/"}
                                            component={Login}
                                        />
                                    </Switch>
                                </>
                            }
                        </AppContainer>
                    </Router>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

const AppContainer = styled.main`
  margin: 80px auto 0 auto;
`;
