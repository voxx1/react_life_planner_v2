import './App.css';
import { Routes, Route } from "react-router-dom"
import React, { Suspense, useContext } from 'react';
import LoadingSpinner from './components/UI/LoadingSpinner';
import AuthPage from './pages/AuthPage';
import AuthContext from './store/auth-context';


const GoalsPage = React.lazy(() => import('./pages/GoalsPage'))
const SpendingPage = React.lazy(() => import('./pages/SpendingPage'))
const InspirationPage = React.lazy(() => import('./pages/InspirationPage'))




function App() {



  const authCtx = useContext(AuthContext);

  console.log(authCtx.isLoggedIn)

  let routesLog = <Route path='*' element={<AuthPage />} />
  if (authCtx.isLoggedIn === true) {
    routesLog = <>
      <Route path="*" element={<AuthPage />} />
      <Route path='/' element={<AuthPage />} />
      <Route path="/spending" element={<SpendingPage />} />
      <Route path="/goals" element={<GoalsPage />} />
      <Route path="/inspiration" element={<InspirationPage />} />
    </>
  }


  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routesLog}
        </Routes>
      </Suspense>
    </div>

  );
}

export default App;
