import React from 'react';
import clsx from 'clsx';
import {createStyles, Theme, createMuiTheme, withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {protectedRoutes, ROUTE} from "../../../app/routes";
import {RouteConfig} from "react-router-config";
import {Switch, Link, RouteComponentProps} from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRouteUI";
import {User} from "../../../service/User/state";
import {withRouter} from "react-router";
import {
    PowerSettingsNewRounded,
    LanguageRounded,
    CollectionsRounded,
} from "@material-ui/icons";
import TRANSLATIONS from "config/localizationConfig";
import LanguageSelectUI from "../../atom/LanguageSelect/LanguageSelectUI";

const drawerWidth = 240;
const theme = createMuiTheme();
export const customStyles = createStyles({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
    },
});

interface CSSStyles {
    classes: {
        root: string;
        appBar: string;
        appBarShift: string;
        menuButton: string;
        hide: string;
        drawer: string;
        drawerOpen: string;
        drawerClose: string;
        toolbar: string;
        content: string;
    };
    theme: Theme;
}

interface IExternalProps extends RouteComponentProps<any> {
    user: User;
    localizationLanguage: string;
    onUserLogout(): void;
    onAppLanguageChange(lang: string): void;
}

interface ILocalState {
    isOpen: boolean;
}

type IProps = IExternalProps & CSSStyles;

class MiniDrawerUI extends React.PureComponent<IProps, ILocalState> {
    public state = {
        isOpen: false,
    };

    public componentDidMount() {
        if (this.props.user && this.props.user.isLogged) {
            this.props.history.push(ROUTE.MASTERPIECE); // ak sme sa prihlasili zobrazime dashboard
        }
    }

    public componentDidUpdate(prevProps: IProps) {
        // Nedovolime uzivatelovi vratit sa s5 na login ak je prihlaseny, defaultne menime routu na masterpieces
        if (this.props.history.location.pathname === ROUTE.HOME && this.props.history.action === "POP") {
            this.props.history.push(ROUTE.MASTERPIECE);
        }
    }

    public render() {
        const {classes, user, localizationLanguage} = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.isOpen,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerToggle}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: this.state.isOpen,
                            })}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography className="navbar__title" variant="h6" noWrap>
                            Admin {user.email}
                        </Typography>
                        <LanguageSelectUI
                            localizationLanguage={localizationLanguage}
                            onAppLanguageChange={this.props.onAppLanguageChange}
                        />
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: this.state.isOpen,
                        [classes.drawerClose]: !this.state.isOpen,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: this.state.isOpen,
                            [classes.drawerClose]: !this.state.isOpen,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerToggle}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>
                    <List>
                        <ListItem color="inherit" component={Link} to={ROUTE.MASTERPIECE} button key="masterpiece">
                            <ListItemIcon><CollectionsRounded/></ListItemIcon>
                            <ListItemText primary={TRANSLATIONS.LOGGED_NAVBAR.MENU_ITEM.MASTERPIECES[localizationLanguage]}/>
                        </ListItem>
                    </List>
                    <Divider/>
                    <List>
                        <ListItem button key="Logout" onClick={this.handleLogout}>
                            <ListItemIcon><PowerSettingsNewRounded/></ListItemIcon>
                            <ListItemText primary={TRANSLATIONS.LOGGED_NAVBAR.MENU_ITEM.LOGOUT[localizationLanguage]}/>
                        </ListItem>
                    </List>
                </Drawer>
                <main className={classes.content}>
                    <Switch>
                        {protectedRoutes.map((route: RouteConfig, index: number) => (
                            <PrivateRoute
                                key={`protectedRoute-${index}`}
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                                user={user}
                            />
                        ))}
                    </Switch>
                </main>
            </div>
        );
    }

    public handleDrawerToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    public handleLogout = () => {
        if (this.props.onUserLogout) {
            this.props.onUserLogout();
            this.props.history.push(ROUTE.LOGIN);
        }
    };
}

export default withStyles(customStyles, {withTheme: true})(withRouter(MiniDrawerUI));
