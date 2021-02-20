import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/partials/Header';

function App() {
  // current user
  const [currentUser, setCurrentUser] = useState(null);
  // isAuthenticated state (boolean)
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = user => {
    console.log('Handling Auth.......');
    if (user) {
      // sick add use stuff
      setCurrentUser(user);
      setIsAuthenticated(true);
    } else {
      // clear it all out
      setCurrentUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('jwtToken');
    }
  }

  return (
    <div className="App">
      <Header currentUser={currentUser} handleAuth={handleAuth} />
      <Content 
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        handleAuth={handleAuth}
      />
    </div>
  );
}

export default App;
