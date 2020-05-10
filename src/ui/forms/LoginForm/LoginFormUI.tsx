import React, {ChangeEvent, FormEvent} from "react";
import SubmitButtonUI from "ui/atom/SubmitButton/SubmitButtonUI";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import TRANSLATIONS from "config/localizationConfig";

export interface IExternalProps {
    localizationLanguage: string;
    onUserLogin(email: string, password: string): void;
}

type Props = IExternalProps;

interface ILocalState {
    email: string;
    password: string;
    errors: null | string[];
}

export default class LoginFormUI extends React.PureComponent<Props, ILocalState> {
    public state = {
        email: "",
        password: "",
        errors: null,
    };

    public render() {
        const {localizationLanguage} = this.props;

        return (
            <ValidatorForm noValidate onSubmit={this.onSubmit}>
                <TextValidator
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label={TRANSLATIONS.LOGIN.FORM.EMAIL[localizationLanguage]}
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                    autoFocus
                    validators={["required", "isEmail"]}
                />
                <TextValidator
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label={TRANSLATIONS.LOGIN.FORM.PASSWORD[localizationLanguage]}
                    type="password"
                    id="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                    validators={["required"]}
                />
                <SubmitButtonUI
                    label={TRANSLATIONS.LOGIN.FORM.SUBMIT[localizationLanguage]}
                    loadingLabel={TRANSLATIONS.COMMON.LOADING[localizationLanguage]}
                />
            </ValidatorForm>
        );
    }

    private handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = event;

        // @ts-ignore
        this.setState({
            [name]: value,
        });
    };

    private onSubmit = (event: FormEvent<Element>) => {
        event.preventDefault();
        if (this.state.email !== "" && this.state.password !== "") {
            this.props.onUserLogin(this.state.email, this.state.password);
        }
    };
}
