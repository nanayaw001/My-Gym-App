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
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #2ecc71;
  color: #ffffff;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
        <h1>Welcome to PowerPeak Gym</h1>
        <p>Your path to a healthier lifestyle starts here!</p>
      </Header>

      <Section>
        <Article>
          <h2>Cardio Workouts</h2>
          <Image src="https://plunkettfitness.com/wp-content/uploads/2018/11/cardio-1024x683.jpg" alt="Cardio Equipment" />
          <p>Improve your cardiovascular health with our state-of-the-art cardio equipment.</p>
          <Button>Learn More</Button>
        </Article>

        <Article>
          <h2>Strength Training</h2>
          <Image src="https://images3.alphacoders.com/990/990235.jpg" alt="Strength Training Machines" />
          <p>Build strength and muscle with our wide range of strength training machines.</p>
          <Button>Explore</Button>
        </Article>

        <Article>
          <h2>Group Classes</h2>
          <Image src="https://img.freepik.com/premium-photo/sports-people-fitness-training-with-weights-gym-workout-exercise-being-active-health-center-team-men-woman-lifting-friends-doing-teamwork-planks-exercising-sports-club_590464-78767.jpg" alt="Group Classes" />
          <p>Join our group classes for a fun and effective way to stay fit with others.</p>
          <Button>Join Now</Button>
        </Article>

        <Sidebar>
          <section>
            <h2>Membership Plans</h2>
            <ul>
              <li>Basic Plan</li>
              <li>Premium Plan</li>
              <li>Pro Plan</li>
            </ul>
            <Button>Sign Up</Button>
          </section>

          <section>
            <h2>Trainers</h2>
            <ul>
              <li>Nana Yaw</li>
              <li>Emmy Ace</li>
              <li>Kwaku BS</li>
            </ul>
            <Button>Meet Trainers</Button>
          </section>
        </Sidebar>
      </Section>

      <Footer>
        <p>&copy; 2023 PowerPeak Gym</p>
      </Footer>
    </Container>
  );
};

export default GymApp;
