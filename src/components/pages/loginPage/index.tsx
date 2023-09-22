"use client";
import Button from "@/components/atoms/Button/Button";
import FormContainer from "@/components/atoms/FormContainer/FormContainer";
import DviderText from "@/components/atoms/DviderText/DviderText";
import TextField from "@/components/molecules/TextField/TextField";
import Typography from "@/components/atoms/Typography";
import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { getToken, setToken } from "@/utilies/localStorage";
// Mock Data and Style
import buttons from "@/styles/buttons.json";
import data from "@/mock/data.json";
import colors from "@/styles/colors.json";
import { Auth_API, LoginRoute } from "@/api/Auth";
import { Box, Checkbox, FormControlLabel, Link } from "@mui/material";
import InputAlert, { InputContainer, LoginContainer } from "./_document";

const Index: React.FC = () => {
  const initialState = {
    emailAdded: false,
    loginError: "",
    loading: false,
    email: { value: "", err: "" },
    password: { value: "", err: "" },
  };

  const [state, setState] = useState(initialState);

  const emailSchema = yup.object({
    email: yup.string().email(data.correctEmail).required(data.requiedEmail),
  });

  const passwordSchema = yup.object({
    password: yup
      .string()
      .required(data.requiedPassword)
      .matches(new RegExp(data.passwordRegex), data.correctPassword)
      .min(6, data.minLengthPassword)
      .max(10, data.maxLengthPassword),
  });

  const removeEmail = () => {
    setState(initialState);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: { err: "", value } }));
  };

  const submitEmail = async () => {
    try {
      await emailSchema.validate(
        { email: state.email.value },
        { abortEarly: false }
      );
      setState((prevState) => ({ ...prevState, emailAdded: true }));
    } catch (err: any) {
      setState((prevState) => ({
        ...prevState,
        email: { ...prevState.email, err: err.errors[0].err },
      }));
    }
  };

  const submitUserInfo = async () => {
    try {
      await passwordSchema.validate(
        { password: state.password.value },
        { abortEarly: false }
      );

      setState((prevState) => ({ ...prevState, loading: true }));

      axios
        .post(Auth_API + LoginRoute, {
          email: state.email.value,
          password: state.password.value,
        })
        .then(({ data }) => {
          setToken(data.token);
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            setState((prevState) => ({ ...prevState, loginError: message }));
          }
        )
        .finally(() => {
          setState((prevState) => ({ ...prevState, loading: false }));
        });
    } catch (err: any) {
      setState((prevState) => ({
        ...prevState,
        password: { ...prevState.password, err: err.errors[0].err },
      }));
    }
  };

  return (
    <LoginContainer>
      <FormContainer>
        {state.emailAdded ? (
          <>
            <InputContainer>
              <Typography variant="h5" text={"Welcome"} />
              <Typography variant="body2" text={state.email.value} />
              <TextField
                err={state.password.err}
                type={"password"}
                name="password"
                value={state.password.value}
                onChange={onChange}
                placeholder={"Password"}
                icon={"password"}
              />
              <InputAlert err={state.password.err || state.loginError} />
              <Box
                display={"flex"}
                alignItems={"center"}
                width="100%"
                justifyContent={"space-between"}
              >
                <FormControlLabel
                  control={<Checkbox color="success" defaultChecked />}
                  label={data.remmberMe}
                />
                <Link
                  variant="body2"
                  href="#"
                  color={colors.mainGreenColor}
                  underline="hover"
                >
                  Foreget password
                </Link>
              </Box>
              <Button
                text={"Log in"}
                sx={{ width: "200px" }}
                onClick={submitUserInfo}
              />
              <Link
                variant="body2"
                sx={{ marginBottom: "30px" }}
                onClick={removeEmail}
                href="/login"
                color={colors.mainGreenColor}
                underline="hover"
              >
                Not you?
              </Link>
            </InputContainer>
          </>
        ) : (
          <>
            <InputContainer>
              <Typography
                sx={{ fontWeight: "500", fontSize: "1.4rem" }}
                text={data.loginPage}
              />
              <TextField
                err={state.email.err}
                type="email"
                name="email"
                value={state.email.value}
                onChange={onChange}
                placeholder={"Username or Email"}
                icon={"email"}
              />
              <InputAlert err={state.email.err} />
              <Button text={data.normalLogin} onClick={submitEmail} sx={{}} />
              <DviderText text={"or"} />
              <Button loginType={buttons.google} />
              <Button loginType={buttons.apple} />
            </InputContainer>
            <InputContainer>
              <DviderText text={data.dontHaveAccount} />
              <Link href="/signup">
                <Button 
                  sx={{ width: "200px", marginBottom: "15px" }}
                  loginType={buttons.register}
                />
              </Link>
            </InputContainer>
          </>
        )}
      </FormContainer>
    </LoginContainer>
  );
};

export default Index;
