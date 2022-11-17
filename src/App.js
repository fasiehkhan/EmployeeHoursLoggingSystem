import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './views/Login';
import { Manager } from './views/Manager';
import { Employee } from './views/Employee';

export default function App() {
  return (
    <div className="landing-page">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="manager" element={<Manager />} />
            <Route path="employee" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
