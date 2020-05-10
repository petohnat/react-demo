import {connect} from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import SnackbarUI, { customStyles, IExternalProps } from "ui/molecule/Snackbar/SnackbarUI";

export default connect<any, any, IExternalProps>(
    null,
    null,
)(
    withStyles(customStyles, { withTheme: true })(SnackbarUI)
);
