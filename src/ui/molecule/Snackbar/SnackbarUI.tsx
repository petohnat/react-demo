import React from "react";
import {Snackbar, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {SnackbarOrigin} from "@material-ui/core/Snackbar";
import {createStyles, Theme} from "@material-ui/core/styles";
import {theme} from "app/theme";

export const customStyles = createStyles({
    message: {
        display: "flex",
        alignItems: "center",
    },
    close: {
        padding: theme.spacing(0.5),
    },
});

export interface IExternalProps {
    type?: "success" | "warning" | "error" | "info";
    message: string;
    duration: number; // ms
    position?: SnackbarOrigin;
    className?: string;
    isOpen: boolean;

    onSnackbarVisibilityChange(isOpen: boolean): void;
}

export interface CSSStyles {
    classes: {
        // icon: string;
        // iconVariant: string;
        close: string;
    };
    theme: Theme;
}

type IProps = IExternalProps & CSSStyles;

const DEFAULT_VERTICAL_POSITION = "bottom";
const DEFAULT_HORIZONTAL_POSITION = "center";

export default class SnackbarUI extends React.PureComponent<IProps> {
    public render() {
        const {message, position, classes, className, duration} = this.props;
        const verticalPosition = position && position.vertical || DEFAULT_VERTICAL_POSITION;
        const horizontalPosition = position && position.horizontal || DEFAULT_HORIZONTAL_POSITION;

        return (
            <div>
                <Snackbar
                    className={className}
                    anchorOrigin={{
                        vertical: verticalPosition,
                        horizontal: horizontalPosition,
                    }}
                    open={this.props.isOpen}
                    autoHideDuration={duration}
                    onClose={this.handleClose}
                    ContentProps={{
                        "aria-describedby": "message-id",
                    }}
                    message={
                        <span id="message-id">
                            {/* <Icon className={clsx(classes.icon, classes.iconVariant)} /> */}
                            {message}
                        </span>
                    }
                    action={[
                        // <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                        //     UNDO
                        // </Button>,
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon/>
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }

    private handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }

        this.props.onSnackbarVisibilityChange(false);
    }
}
