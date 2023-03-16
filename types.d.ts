interface UserDetails {
  username: string;
  profileImage: string;
  score: number;
}

type LeaderboardData = {
  sort(arg0: (a: any, b: any) => number): LeaderboardData;
  map(arg0: (user: UserDetails) => JSX.Element): React.ReactNode;
  leaderboard: UserDetails[];
};

type ProfileData = {
  username: string;
  bio: string;
  age: number;
  twitter: string;
  email: string;
  birthday: string;
};
