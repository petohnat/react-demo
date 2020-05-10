import React, { Component } from "react";
import {Typography} from "@material-ui/core";

// External props passed from parent component
export interface IExternalProps {
    label: string;
}

type Props = IExternalProps;

export default function SectionTitleUI(props: Props) {
    return (
        <Typography component="h2" variant="h4" className="section__title">
            {props.label}
            <span className="section__title--divider"/>
        </Typography>
    );
}
