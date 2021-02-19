import axios from 'axios';
import { useEffect, useState } from 'react';

const Profile = (props) => {
    const [message, setMessage] = useState('Loading msg...');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/private`)
        .then(response => {
            setMessage(response.data.message);
        })
        .catch(err => {
            console.log('THERE IS AN ERROR OH NO')
            props.handleAuth(null);
        })
    }, []);

    return (
        <div>
            <h1>PROFILE PAGE</h1>
            <h4>{message}</h4>
        </div>
    );
}

export default Profile;