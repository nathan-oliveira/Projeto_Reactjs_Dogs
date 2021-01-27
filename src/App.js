import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/helper/ProtectedRoute';
import { UserStorage } from './UserContext'
import './App.css';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Home from './components/home/Home'
import Login from './components/login/Login'
import User from './components/user/User'
import Photo from './components/photo/Photo';
import UserProfile from './components/user/profile/UserProfile'
import NotFound from './components/error/NotFound'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <UserStorage>
            <Header />
            <main className="AppBody">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/*" element={<Login />} />
                <ProtectedRoute path="/conta/*" element={<User />} />
                <Route path="/foto/:id" element={<Photo />} />
                <Route path="/perfil/:user" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </UserStorage>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;