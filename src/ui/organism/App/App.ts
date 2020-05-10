import {connect} from 'react-redux';
import selectors from './selectors';
import dispatchers from './dispatchers';
import AppUI, {ICallbackProps, IDataProps, IExternalProps} from './AppUI';

export default connect<IDataProps, ICallbackProps, IExternalProps>(
    selectors,
    dispatchers,
)(
    AppUI,
);
