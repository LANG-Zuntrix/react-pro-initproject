import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";

import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage
} from '../03-forms/pages/';

import logo from '../logo.svg';


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
                  <NavLink to="/formik-register" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Register Formik</NavLink>
                </li>
                <li>
                  <NavLink to="/dynamic-form" className={ ({ isActive }) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
                </li>
              </ul>
            </nav>


            <Routes>
              <Route path="formik-basic" element={<FormikBasicPage />} />
              <Route path="formik-yup" element={<FormikYupPage />} />
              <Route path="formik-components" element={<FormikComponents />} />
              <Route path="formik-abstractation" element={<FormikAbstraction />} />
              <Route path="formik-register" element={<RegisterFormikPage />} />
              <Route path="dynamic-form" element={<DynamicForm />} />
              <Route path="/home" element={<RegisterPage />} />

              <Route path="/*" element={ <Navigate to="/home" replace />} />

            </Routes>
          

          </div>

        
    </BrowserRouter>
  )
}
