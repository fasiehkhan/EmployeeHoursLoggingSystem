import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './views/Login';
import { Manager } from './views/Manager';
import { Employee } from './views/Employee';
import { EmployeeHistory } from './views/EmployeeHistory';
import { EmployeeTimePunches } from './views/EmployeeTimePunches';
import { EmployeeStartShift } from './views/EmployeeStartShift';
import { EmployeeEndShift } from './views/EmployeeEndShift';
import { EmployeeStartBreak } from './views/EmployeeStartBreak';
import { EmployeeEndBreak } from './views/EmployeeEndBreak';

export default function App() {
  return (
    <div className="landing-page">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="manager" element={<Manager />} />
            <Route path="employee" element={<Employee />} />
            <Route path="employee-history" element={<EmployeeHistory />} />
            <Route path="employee-time-punches" element={<EmployeeTimePunches />} />
            <Route path="employee-start-shift" element={<EmployeeStartShift />} />
            <Route path="employee-end-shift" element={<EmployeeEndShift />} />
            <Route path="employee-start-break" element={<EmployeeStartBreak />} />
            <Route path="employee-end-break" element={<EmployeeEndBreak />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
