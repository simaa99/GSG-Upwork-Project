"use client";
import React, { Component, ChangeEvent, memo } from "react";
import { InputAdornment, Typography, Box, Link } from "@mui/material";
import axios from "axios";
import * as yup from "yup";

// Custom Components
import Button from "@/components/atoms/Button/Button";
import FormContainer from "@/components/atoms/FormContainer/FormContainer";
import DviderText from "@/components/atoms/DviderText/DviderText";
import TextField from "@/components/molecules/TextField/TextField";
import CustomTypography from "@/components/atoms/Typography";
import CustomCheckBox from "@/components/atoms/CheckBox";
import { END_POINTS } from "@/constant/EndPoint";

// Mock Data and Style
import buttons from "@/styles/buttons.json";
import data from "@/mock/data.json";
import colors from "@/styles/colors.json";
import { Auth_API, registerRoute } from "@/api/Auth";

// Styled Component
import InputAlert, { InputContainer, SignUpContainer } from "./_document";

interface State {
  signupError: string;
  fName: { value: string; err: any };
  lName: { value: string; err: any };
  email: { value: string; err: any };
  password: { value: string; err: any };
}

class Index extends Component<{}, State> {
  initialState: State = {
    signupError: "",
    fName: { value: "", err: "" },
    lName: { value: "", err: "" },
    email: { value: "", err: "" },
    password: { value: "", err: "" },
  };

  Schema = yup.object({
    fName: yup
      .string()
      .required(data.requiedFirstName)
      .min(6, data.minLengthFirstName)
      .max(10, data.maxLengthFirstName),

    lName: yup
      .string()
      .required(data.requiedLastName)
      .min(6, data.minLengthLastName)
      .max(10, data.maxLengthLastName),

    email: yup.string().email(data.correctEmail).required(data.requiedEmail),
    password: yup
      .string()
      .required(data.requiedPassword)
      .matches(new RegExp(data.passwordRegex), data.correctPassword)
      .min(6, data.minLengthPassword)
      .max(10, data.maxLengthPassword),
  });

  constructor(props: {}) {
    super(props);
    this.state = this.initialState;

    this.removeEmail = this.removeEmail.bind(this);
    this.submitUserInfo = this.submitUserInfo.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  removeEmail() {
    this.setState(this.initialState);
  }

  async submitUserInfo() {
    await this.Schema.validate(
      {
        email: this.state.email.value,
        password: this.state.password.value,
        fName: this.state.fName.value,
        lName: this.state.lName.value,
      },
      { abortEarly: false }
    )
      .catch((err: any) =>
        err.errors.forEach(({ field, err }: { field: any; err: any }) =>
          this.onError(field, err)
        )
      )
      .then(() => {
        this.setState((prev) => ({ ...prev, loading: true }));

        axios
          .post(Auth_API + registerRoute, {
            name: this.state.fName.value + " " + this.state.lName.value,
            email: this.state.email.value,
            password: this.state.password.value,
          })
          .then((_) => {
            // Handle success or navigation if needed
          })
          .catch(
            ({
              response: {
                data: { message },
              },
            }) => {
              this.setState((prev) => ({ ...prev, signupError: message }));
            }
          )
          .finally(() => {
            this.setState((prev) => ({ ...prev }));
          });
      })
      .finally(() => {
        this.setState((prev) => ({ ...prev }));
      });
  }

  onChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    this.setState((prev) => ({ ...prev, [name]: { err: "", value } }));
  }

  onError(name: keyof State, err: string) {
    this.setState((prev) => ({
      ...prev,
      [name]: { ...(prev[name] as any), err },
    }));
  }

  formStyle: React.CSSProperties = {
    width: "550px",
    padding: "20px",
  };

  checkBoxPolicy = (
    <Typography fontSize="12px" fontWeight="300">
      Yes, I understand and agree to the{" "}
      <Link
        zIndex={10}
        href={"/"}
        target="_blank"
        fontWeight="500"
        color={colors.mainGreenColor}
        underline="hover"
      >
        Upwork Terms of Service
      </Link>
      , including the{" "}
      <Link
        zIndex={10}
        href={"/"}
        target="_blank"
        fontWeight="500"
        color={colors.mainGreenColor}
        underline="hover"
      >
        User Agreement
      </Link>{" "}
      and{" "}
      <Link
        zIndex={10}
        href={"/"}
        target="_blank"
        fontWeight="500"
        color={colors.mainGreenColor}
        underline="hover"
      >
        Privacy Policy
      </Link>
      .
    </Typography>
  );

  render() {
    return (
      <SignUpContainer>
        <FormContainer sx={this.formStyle}>
          <InputContainer>
            <CustomTypography
              sx={{ fontWeight: "500", fontSize: "1.4rem" }}
              text={data.registerPage}
            />
            <Button loginType={buttons.apple} />
            <Button loginType={buttons.google} />
            <DviderText text="or" />
            <InputAlert err={this.state.signupError} />
            <Box display="flex" gap="2%" width="100%">
              <Box width="100%">
                <TextField
                  err={this.state.fName.err}
                  name="fName"
                  value={this.state.fName.value}
                  onChange={this.onChange}
                  placeholder="First Name"
                />
                <InputAlert err={this.state.fName.err} />
              </Box>
              <Box width="100%">
                <TextField
                  err={this.state.lName.err}
                  name="lName"
                  value={this.state.lName.value}
                  onChange={this.onChange}
                  placeholder="Last Name"
                />
                <InputAlert err={this.state.lName.err} />
              </Box>
            </Box>
            <TextField
              err={this.state.email.err}
              name="email"
              value={this.state.email.value}
              onChange={this.onChange}
              placeholder="Email"
              icon="email"
            />
            <InputAlert err={this.state.email.err} />
            <TextField
              err={this.state.password.err}
              name="password"
              value={this.state.password.value}
              type="password"
              onChange={this.onChange}
              icon="password"
              placeholder="Password (at least 6 letters and numbers)"
            />
            <InputAlert err={this.state.password.err} />
            <Box
              display="flex"
              flexDirection="column"
              alignItems="left"
              width="100%"
              justifyContent="space-between"
            >
              <CustomCheckBox
                label={
                  <Typography fontSize="12px" fontWeight="300">
                    {data.sendHelpfullemail}
                  </Typography>
                }
              />
              <CustomCheckBox label={this.checkBoxPolicy} />
            </Box>
            <Button text={data.normalRegister} onClick={this.submitUserInfo} />
            <Typography>
              Already have an account?{" "}
              <Link
                variant="body2"
                href="/login"
                color={colors.mainGreenColor}
                underline="hover"
              >
                Log In
              </Link>
            </Typography>
            <Box></Box>
          </InputContainer>
        </FormContainer>
      </SignUpContainer>
    );
  }
}

export default memo(Index);
