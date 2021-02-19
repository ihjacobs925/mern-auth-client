import Login from '../partials/Login';
import Signup from '../partials/Signup';

const Auth = (props) => {
    return (
        <div className="auth-panel">
           <Signup handleAuth={props.handleAuth} />
           <Login handleAuth={props.handleAuth} />
        </div>

    );
}

export default Auth;