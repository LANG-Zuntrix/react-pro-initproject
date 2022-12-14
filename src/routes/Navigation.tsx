import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import logo from '../logo.svg';


export const Navigation = () => {


  return (
    <BrowserRouter>
        
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React logo" />

              <ul>
                <li>
                  <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>RegisterPage</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                </li>
                <li>
                  <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                </li>
              </ul>
            </nav>


            <Routes>
              <Route path="formik-basic" element={<FormikBasicPage />} />
              <Route path="users" element={<h1>Users Page</h1>} />
              <Route path="/home" element={<RegisterPage />} />

              <Route path="/*" element={ <Navigate to="/home" replace />} />

            </Routes>
          

          </div>

        
    </BrowserRouter>
  )
}
