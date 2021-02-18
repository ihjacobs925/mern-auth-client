import { Link } from 'react-router-dom';

const Header = (props) => {
    let style = {
        backgroundColor: 'chartreuse',
        borderBottom: '3px solid black',
        margin: 0,
        padding: '1em 0'
    }
    return (
        <header style={style}>
            <h2>HEADER</h2>
            <nav>
                {/* TODO: Conditional Link Rendering */}
                <Link to='/'>Home</Link>{' | '}
                <Link to='/auth'>Login or Signup</Link>{' | '}
                <Link to='/profile'>Account</Link>
            </nav>
        </header>
    );
}

export default Header;