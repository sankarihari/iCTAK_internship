import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://st3.depositphotos.com/1064045/15061/i/450/depositphotos_150614902-stock-photo-unusual-cinema-concept-3d-illustration.jpg")
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

const Signup = () => {
  const initialValues = { username: "", email:"", password: "" };
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
    
		axios.post("http://localhost:5000/api/signup", formValues)
    .then((response)=>{
      console.log(response);
      if(response.data.message==="Registered successfuly"){
        alert(response.data.message);
        navigate('/userdashboard')
      }
    })
    .catch(err=>console.log((err)))
  };

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.name) {
      errors.name = "This field is required"
    }
    if (!values.username) {
      errors.username = "Username is required"
    }
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
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
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit}>
          <Input
              type="text"
              name="name"
              placeholder="Fullname"
              value={formValues.name}
              onChange={handleChange} />
            <p style={{ color: "red" }}>{formErrors.name}</p>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange} />
            <p style={{ color: "red" }}>{formErrors.username}</p>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange} />
            <p style={{ color: "red" }}>{formErrors.email}</p>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange} />
            <p style={{ color: "red" }}>{formErrors.password}</p>
            <Button>SIGNUP</Button>
            Already a member?
            <Text> <a class="nav-link active" aria-current="page" href="/login"><b>Login</b></a></Text>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};


export default Signup