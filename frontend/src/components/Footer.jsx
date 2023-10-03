import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, TheaterComedy, Twitter } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
height: 50vh;
  display: flex;
  background-color: #1f2b2d;
  margin-top: 30px;
 
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
color: white;
`;



const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-top: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  color: white;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
  return (
    <Container>

      <Left>
        <Logo><TheaterComedy />MovieMania</Logo>

        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>About</Title>
        <List>
          <ListItem>
            <a class="nav-link active" href="/register">Terms & Conditions</a>
          </ListItem>
          <ListItem>
            <a class="nav-link active" href="/register">Privacy Policy</a>
          </ListItem>
          <ListItem>
            <a class="nav-link active" href="/register">Purchase Policy</a>
          </ListItem>

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> 42, Dr Ranga Road, Kochi,
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +91 2345678123
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@moviemania.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer