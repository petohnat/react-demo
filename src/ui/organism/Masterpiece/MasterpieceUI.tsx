import React from "react";
import { Theme, createMuiTheme, createStyles } from "@material-ui/core/styles";
import { Masterpiece } from "ui/organism/Masterpiece/MasterpieceResource";
import {CircularProgress} from "@material-ui/core";
import { User } from "service/User/state";
import { Masterpieces } from "../Dashboard/state";
import Snackbar from "../../molecule/Snackbar/Snackbar";
import TRANSLATIONS from "config/localizationConfig";

const theme = createMuiTheme();
export const customStyles = createStyles({
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    delete_button: {
        color: theme.palette.error.dark,
    }
});

export interface IDataProps {
    masterpieces: null | Masterpieces;
    loggedUser: User;
    lastEventMessage: null | string;
    localizationLanguage: string;
}

export interface ICallbackProps {
    onUserLogout(): void;
    onFetchMasterpieces(): void;
    onClearLastEventMessage(): void;
}

interface CSSStyles {
    classes: {
        root: string;
        content: string;
        delete_button: string;
    };
    theme: Theme;
}

type Props = IDataProps & ICallbackProps & CSSStyles;

interface IState {
    selectedMasterpiece: null | Masterpiece;
    isToastVisible: boolean;
}

export default class MasterpieceUI extends React.PureComponent<Props, IState> {
    public state = {
        isToastVisible: false,
        selectedMasterpiece: null,
    };

    public componentDidMount() {
        this.props.onFetchMasterpieces();
    }

    public componentDidUpdate(prevProps: Props) {
        if (this.props.lastEventMessage) {
            this.setState({
                isToastVisible: true,
            });
        }
    }

    public render() {
        const {masterpieces, localizationLanguage} = this.props;

        return (
            <>
                {!masterpieces ?
                    <div className="loading">
                        <CircularProgress/>
                    </div>
                :
                    <div className="content-wrapper">
                        <h2>{TRANSLATIONS.MASTERPIECES.TITLE[localizationLanguage]}</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>{TRANSLATIONS.COMMON.NAME[localizationLanguage]}</th>
                                <th>{TRANSLATIONS.COMMON.DESCRIPTION[localizationLanguage]}</th>
                                <th>{TRANSLATIONS.COMMON.ORDER[localizationLanguage]}</th>
                            </tr>
                            </thead>
                            <tbody>
                            {masterpieces && Object.values(masterpieces).sort((a: Masterpiece, b: Masterpiece) => a.order - b.order).map((masterpiece, index) =>
                                <tr key={index}>
                                    <td>{masterpiece.name[localizationLanguage]}</td>
                                    <td>{masterpiece.description[localizationLanguage]}</td>
                                    <td>{masterpiece.order}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        {this.state.isToastVisible &&
                            <Snackbar
                                message={this.props.lastEventMessage || ""}
                                duration={3000}
                                onSnackbarVisibilityChange={this.onSnackbarVisibilityChange}
                                isOpen={this.state.isToastVisible}
                            />
                        }
                    </div>
                }
            </>
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
