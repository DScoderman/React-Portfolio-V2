
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
// import 'bootstrap/dist/css/bootstrap.css';
import HomePage from './Pages/Homepage';
import ProjectPage from './Pages/Projects';
import ContactPage from './Pages/ContactMe';
import ResumePage from './Pages/Resume';
import MeInfoPage from './Pages/MeInfo';



function App() {
  return (
    <BrowserRouter basename='/React-Portfolio-V2'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="ContactMe" element={<ContactPage />} />
          <Route path="Resume" element={<ResumePage />} />
          <Route path="MeInfo" element={<MeInfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
