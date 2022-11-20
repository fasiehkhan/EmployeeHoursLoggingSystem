import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './views/Login';
import { Manager } from './views/Manager';
import { Employee } from './views/Employee';
import { EmployeeHistory } from './views/EmployeeHistory';
import { EmployeeTimePunches } from './views/EmployeeTimePunches';
import { EmployeeRequest } from './views/EmployeeRequest';
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
          <Navbar />
    <div className="landing-page">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="manager" element={<Manager />} />
            <Route path="employee" element={<Employee />} />
            <Route path="employee-history" element={<EmployeeHistory />} />
            <Route path="employee-time-punches" element={<EmployeeTimePunches />} />
            <Route path="employee-request" element={<EmployeeRequest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
