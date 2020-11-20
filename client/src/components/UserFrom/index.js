import React from "react";
import styled from "styled-components";
import { useInputValue } from "../../hooks/useInputvalue";
import { SubmitButton } from "../SubmitButton";

const Form = styled.form`
  padding: 16px 4px;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  outline: 0;
  &[disabled] {
    opacity: 0.3;
  }
`;

const H2 = styled.h2`
  font-size: 16px;
  font-weight: 500px;
  padding: 8px 0;
`;
const Error = styled.span`
  color: red;
  font-size: 14px;
`;

export const UserForm = ({ onSubmit, title, error, disabled, names }) => {
  const email = useInputValue("");
  const password = useInputValue("");
  const name = useInputValue("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: email.value,
      password: password.value,
      name: name.value,
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <H2>{title}</H2>
        {names && (
          <Input
            placeholder="Nombre"
            type="text"
            {...name}
            disabled={disabled}
          />
        )}
        <Input
          placeholder="Correo"
          type="email"
          {...email}
          disabled={disabled}
        />
        <Input
          placeholder="contraseña"
          type="password"
          {...password}
          disabled={disabled}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  );
};
