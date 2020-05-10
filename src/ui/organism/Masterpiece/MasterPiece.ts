import {connect} from "react-redux";
import { withStyles } from '@material-ui/core/styles';
import dispatchers from "ui/organism/Masterpiece/dispatchers";
import selectors from "ui/organism/Masterpiece/selectors";
import MasterpieceUI, {customStyles, IDataProps, ICallbackProps} from "ui/organism/Masterpiece/MasterpieceUI";

export default withStyles(customStyles, { withTheme: true })(
    connect<IDataProps, ICallbackProps, {}>(
        selectors,
        dispatchers,
    )(
        MasterpieceUI,
    ),
);
