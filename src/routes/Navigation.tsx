import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import logo from '../logo.svg';
import { FormikComponents } from "../03-forms/pages/FormikComponents";
import { FormikAbstraction } from '../03-forms/pages/FormikAbstraction';


export const Navigation = () => {


  return (
    <BrowserRouter>
        
          <div className="main-layout">
            <nav>
              <img src={logo} alt="React logo" />

              <ul>
                <li>
                  <NavLink to="/home" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>RegisterPage</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
                </li>
                <li>
                  <NavLink to="/formik-abstractation" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Formik Abstractation</NavLink>
                </li>
                <li>
                  <NavLink to="/users" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                </li>
              </ul>
            </nav>


            <Routes>
              <Route path="formik-basic" element={<FormikBasicPage />} />
              <Route path="formik-yup" element={<FormikYupPage />} />
              <Route path="formik-components" element={<FormikComponents />} />
              <Route path="formik-abstractation" element={<FormikAbstraction />} />
              <Route path="users" element={<h1>Users Page</h1>} />
              <Route path="/home" element={<RegisterPage />} />

              <Route path="/*" element={ <Navigate to="/home" replace />} />

            </Routes>
          

          </div>

        
    </BrowserRouter>
  )
}
