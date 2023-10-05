import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.whitby.ca/en/play/resources/Events/Town-Events/Movies-in-the-park/movies_1200x600px.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  margin-left: 50px;
  background-color: white;
 
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-family: serif;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  
`;

const Text = styled.a`
  margin: 5px 0px;
  font-size: 10;
  display:inline-block;
  
`;


const Login = () => {

  const initialValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setisSubmit(true);
    axios.post("http://localhost:5000/api/login", formValues)
      .then((response) => {
        console.log(response);
        if (response.data.message === "login successfully") {
          const token = response.data.token;
          const userid = response.data.data._id;
          console.log(token);
          console.log(userid);
          sessionStorage.setItem("userToken", token);
          sessionStorage.setItem("userId", userid);
          alert(response.data.message)
          navigate('/userdashboard')
        }
        else {
          alert(response.data.message)
        }
      })
  };

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required"
    }
    if (!values.password) {
      errors.password = "Password is required"
    } else if (values.password.length < 4) {
      errors.password = "Minimum 4 characters required!";
    } else if (values.password.length > 8) {
      errors.password = "Password can't exceed more than 8 characters!";
    }
    return errors;
  }

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>LOGIN</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange} />
            <p style={{ color: "red" }}>{formErrors.username}</p>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange} />
            <p style={{ color: "red" }}>{formErrors.password}</p>
            <Button>LOGIN</Button>
            Not a member?
            <Text> <a class="nav-link active" aria-current="page" href="/signup"><b>Signup</b></a></Text>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};


export default Login