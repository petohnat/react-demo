import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

// External props passed from parent component
export interface IExternalProps {
    label: string;
    to: string;
}

type Props = IExternalProps;

export default function RouterLinkUI(props: Props) {
    return (
        <Typography component="p" variant="body2" align="center">
            <Link to={props.to} color="inherit">{props.label}</Link>
        </Typography>
    );
}
