import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.p`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({
    display: "none",
  })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>ECOMM</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
          incidunt.
        </Desc>
        <SocialContainer>
          <SocialIcon>FB</SocialIcon>
          <SocialIcon>IS</SocialIcon>
          <SocialIcon>TW</SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful link</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> botosani Romania</ContactItem>
        <ContactItem> 0752 000 000</ContactItem>
        <ContactItem> email@email.com</ContactItem>
      </Right>
    </Container>
  );
}

export default Footer;
