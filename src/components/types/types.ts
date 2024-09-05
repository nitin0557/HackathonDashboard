export interface Challenge {
    id: number;
    challengeName: string;
    startDate: string;
    endDate: string;
    description: string;
    image: string;
    levelType: 'Easy' | 'Medium' | 'Hard';
    status: 'Active' | 'Upcoming' | 'Past';
  }

  export interface Data {
    challenges: Challenge[];
  }