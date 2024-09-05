// App.tsx
import React, { useState } from 'react';
import './App.css';
import Navigationbar from './components/pages/Navigationbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListingPage from './components/pages/ListingPage';
import data from './mockData.json';
import EditDetails from './components/pages/EditDetails';

interface Challenge {
  id: number;
  challengeName: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  levelType: 'Easy' | 'Medium' | 'Hard';
  status: 'Active' | 'Upcoming' | 'Past';
}

interface Data {
  challenges: Challenge[];
}

const initialChallenges: Challenge[] = (data as Data).challenges;

function App() {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges);

  const addChallenge = (newChallenge: Challenge) => {
    setChallenges([...challenges, newChallenge]);
  };

  const updateChallenge = (updatedChallenge: Challenge) => {
    setChallenges(challenges.map(challenge =>
      challenge.id === updatedChallenge.id ? updatedChallenge : challenge
    ));
  };

  const deleteChallenge = (challengeId: number) => {
    setChallenges(challenges.filter(challenge => challenge.id !== challengeId));
  };

  return (
    <>
      <Router>
        <div className="App">
          <Navigationbar />
          <Routes>
            <Route
              path="/hackathon"
              element={
                <ListingPage
                  addChallenge={addChallenge}
                  challenges={challenges}
                />
              }
            />
            <Route
              path="/challenge/:id"
              element={
                <EditDetails
                  challenges={challenges}
                  updateChallenge={updateChallenge}
                  deleteChallenge={deleteChallenge}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
