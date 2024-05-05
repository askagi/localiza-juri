import { useId } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../App/router";
import "./LoginForm.scss";
export function LoginForm() {
  const emailId = useId();
  const passwordId = useId();

  const navigate = useNavigate();
  function handleLogin() {
    navigate(ROUTER.home);
  }
  return (
    <Form className="login-form" autoComplete="off">
      <FloatingLabel controlId={emailId} label="E-mail" className="mb-4">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId={passwordId} label="Senha" className="mb-5">
        <Form.Control type="password" placeholder="Senha" />
      </FloatingLabel>
      <Button className="w-100 py-2" onClick={handleLogin}>
        Entrar
      </Button>
    </Form>
  );
}
