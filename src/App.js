import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  // Correct values for validation
  const correctUser = "user";
  const correctPassword = "password";

  const [formValues, setFormValues] = useState({ user: "", password: "", favClass: "1" });
  const [validationStates, setValidationStates] = useState({ userState: true, passwordState: true });

  const handleUserChange = (e) => {
    setFormValues({ ...formValues, user: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    const isUserValid = formValues.user === correctUser;
    const isPasswordValid = formValues.password === correctPassword;

    setValidationStates({
      userState: isUserValid,
      passwordState: isPasswordValid,
    });

    if (isUserValid && isPasswordValid) {
      alert("Login successful!");
    } else {
      alert("Login failed. Please check your username and password.");
    }
  };

  return (
    <div>
      <h1>Adopta un robot con RobotLovers</h1>
      <img
        src="https://s3-alpha-sig.figma.com/img/6be0/8970/63bb2d1e43b5d380b6078a7b3a2d56a7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fw2jUle4ph-OvQCKCgeXE13cL8eqF0~x46PB5Ex9ZeGitifxGVpHkmgVWrSyoX40yf8kDFyDG0kCOsznQzvCm0ZRb6XBZa5wBkuSP72z2zVgbM0VRQF2LisfTuqH6zBQ6XxW2mHLr-SJ9YKwtG5qeZgWHU-63kWUHQ2WAdjoQYOQmQQbnCwb9ovR4qWeOQ4YSFoDkr7P-oiW~T9vjfymu8J6k0Wjfs8eWsu77z63tgntK~UEcReqX5fDEJ2LokvINxIvxXv~xUNNQUH0785O-R0R2AbNVDsjfwFCG1b-C-oNuHCsY88sNBPUEr6TLV39DYSEGU4TZrzYQK-FCQ82oQ__"
        alt="Form header"
        style={{ width: '100%', height: 'auto', marginBottom: '20px' }}
      />

      <Form>
        <Form.Group className="mb-6" controlId="formBasicUser">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="user" placeholder="Enter user" onChange={handleUserChange} value={'user'} />
          {!validationStates.userState && (
            <Form.Text className="text-danger">The username is incorrect. Please try again.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={'password'} />
          {!validationStates.passwordState && (
            <Form.Text className="text-danger">The password is incorrect. Please try again.</Form.Text>
          )}
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
