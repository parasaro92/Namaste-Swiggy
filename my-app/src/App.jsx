import { useEffect, useState } from 'react';
import Header from './components/Header';
// import Body from './components/Body';
import { Outlet } from 'react-router-dom';
import UserContext from './components/utils/UserContext';
import {Provider} from 'react-redux';
import appStore from './components/utils/appStore';

const App = () => {
  const [userName, setUserName] = useState()

  useEffect(() => {
    const data = {
      name: 'Paras Arora'
    }
    setUserName(data.name)
  }, [])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default App;