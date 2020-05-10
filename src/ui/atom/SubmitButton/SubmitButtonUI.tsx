import React, { FormEvent } from "react";
import {Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import {theme} from "app/theme";

// External props passed from parent component
export interface IExternalProps {
    label: string;
    loading?: boolean;
    loadingLabel?: string;
    fullWidth?: boolean;
}

type Props = IExternalProps;

// cause cant override original classes with custom css
const useStyles = makeStyles({
    root: {
        background: theme.palette.secondary.main,
        borderRadius: 3,
        border: 0,
        color: theme.palette.secondary.contrastText,
        height: 48,
        padding: "0 30px",
        margin: "24px 0 16px 0",
        boxShadow: `0 2px 4px 1px ${theme.palette.secondary.light}`,
        '&:hover': {
            background: theme.palette.secondary.dark,
         },
    },
  });

export default function SubmitButtonUI(props: Props) {
    const classes = useStyles();

    return (
        <Button
            classes={{
                root: classes.root,
            }}
            type="submit"
            fullWidth={props.fullWidth || false}
            variant="contained"
            color="primary"
            disabled={props.loading}
        >
            {!props.loading ? 
                props.label
            :
                props.loadingLabel || "Loading..."
            }
        </Button>
    );
}
