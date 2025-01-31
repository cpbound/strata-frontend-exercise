// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import path from "path";
import { ReactNode } from "react";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeaderboardData>
) {
  // read all files from public leaderboard folder
  const imgPaths = fs.readdirSync(path.join(process.cwd(), "public", "users"));

  // randomize images
  imgPaths.sort(() => Math.random() - 0.5);

  const leaderboard = imgPaths.map((imgPath) => {
    return {
      // trim extensions from filenames
      username: imgPath.replace(/\.[^/.]+$/, ""),
      profileImage: `/users/${imgPath}`,
      score: 100 + Math.floor(Math.random() * 1000),
    };
  });

  res.status(200).json({
    leaderboard,
    map: function (): ReactNode {
      throw new Error("Function not implemented.");
    },
    sort: function (arg0: (a: any, b: any) => number): LeaderboardData {
      throw new Error("Function not implemented.");
    }
  });
}
