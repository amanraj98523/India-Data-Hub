import Login from "../components/Login";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  return (
    <div>
      <Navbar showDatasetSelect={false} />
      <div className="login-container">
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
