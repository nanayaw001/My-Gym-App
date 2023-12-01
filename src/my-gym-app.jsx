import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  background-color: #f4f4f4;
  border-radius: 10px;
`;

const Header = styled.header`
  text-align: center;
  background-color: #2ecc71;
  color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;

const Article = styled.article`
  flex: 1 1 300px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  padding: 15px;
`;

const Sidebar = styled.aside`
  flex: 0 0 300px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #2c3e50;
  color: #ffffff;
  border-radius: 10px;
`;

// Application component
const GymApp = () => {
  return (
    <Container>
      <Header>
        <h1>Welcome to BodyForge Fitness</h1>
        <p>Your path to a healthier lifestyle starts here!</p>
      </Header>

      <Section>
        <Article>
          <h2>Cardio Workouts</h2>
          <p>Improve your cardiovascular health with our state-of-the-art cardio equipment.</p>
        </Article>

        <Article>
          <h2>Strength Training</h2>
          <p>Build strength and muscle with our wide range of strength training machines.</p>
        </Article>

        <Article>
          <h2>Group Classes</h2>
          <p>Join our group classes for a fun and effective way to stay fit with others.</p>
        </Article>

        <Sidebar>
          <section>
            <h2>Membership Plans</h2>
            <ul>
              <li>Basic Plan</li>
              <li>Premium Plan</li>
              <li>Pro Plan</li>
            </ul>
          </section>

          <section>
            <h2>Trainers</h2>
            <ul>
              <li>Nana Yaw</li>
              <li>Emmy Ace</li>
              <li>Kwaku BS</li>
            </ul>
          </section>
        </Sidebar>
      </Section>

      <Footer>
        <p>&copy; 2023 BodyForge Fitness</p>
      </Footer>
    </Container>
  );
};

export default GymApp;
