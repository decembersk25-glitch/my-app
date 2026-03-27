import { useState } from "react";
import AdminLogin from "./AdminLogin";
import RegisterPage from "./RegisterPage";
import Dashboard from "./Dashboard";

function App() {
  const [page, setPage] = useState("login");

  return (
    <div>
      {page === "login" && (
        <AdminLogin onLogin={() => setPage("register")} />
      )}

      {page === "register" && (
        <RegisterPage onRegister={() => setPage("dashboard")} />
      )}

      {page === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;