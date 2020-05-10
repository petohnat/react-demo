import {connect} from 'react-redux';
// import dispatchers from "ui/organism/User/dispatchers";
import dispatchers from "ui/organism/Login/dispatchers";
import selectors from "ui/organism/Login/selectors";
import LoginUI, {IDataProps ,ICallbackProps, IExternalProps} from "ui/organism/Login/LoginUI";

export default connect<IDataProps, ICallbackProps, IExternalProps>(
    selectors,
    dispatchers,
)(
    LoginUI,
);
