import Login from '../partials/Login';
import Signup from '../partials/Signup';

const Auth = (props) => {
    return (
        <div className="auth-panel">
           <Signup />
           <Login />
        </div>

    );
}

export default Auth;