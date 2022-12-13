import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import UsersContextProvider from './contexts/Auth';
import MessagesAlertsContextProvider from './contexts/MessageAlerts';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <UsersContextProvider>
        <MessagesAlertsContextProvider>
          <App />
        </MessagesAlertsContextProvider>
      </UsersContextProvider>
  </React.StrictMode>
)
