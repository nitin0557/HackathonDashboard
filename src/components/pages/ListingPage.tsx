import React from "react";
import Header from "./Header";
import WhyParticipate from "./WhyParticipate";
import ExploreChallenges from "./ExploreChallenges";

interface Challenge {
  id: number;
  challengeName: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  levelType: "Easy" | "Medium" | "Hard";
  status: "Active" | "Upcoming" | "Past";
}

interface ListingPageProps {
  addChallenge: (challenge: Challenge) => void;
  challenges: Challenge[];
}

const ListingPage: React.FC<ListingPageProps> = ({
  addChallenge,
  challenges,
}) => {
  return (
    <div>
      <Header addChallenge={addChallenge} />
      <WhyParticipate />
      {challenges && challenges.length > 0 ? (
        <ExploreChallenges challenges={challenges} />
      ) : (
        <p>No challenges available.</p>
      )}
    </div>
  );
};

export default ListingPage;
