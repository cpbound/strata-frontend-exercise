interface UserDetails {
  username: string;
  profileImage: string;
  score: number;
}

type LeaderboardData = {
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
