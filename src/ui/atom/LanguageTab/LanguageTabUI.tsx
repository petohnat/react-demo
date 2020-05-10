import React from "react";
import Tab from "@material-ui/core/Tab";

interface IProps {
    label: string;
    onClick: () => void;
}

export default function (props: IProps) {
    return (
        <Tab label={props.label} onClick={props.onClick} />
    );
}
