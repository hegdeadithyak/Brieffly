'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "src/app/globals.css";

function GridDotBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-black bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}

// Mock data for the user
const user = {
  name: "Jane Doe",
  username: "janedoe",
  avatar: "/placeholder.svg",
  completedQuestions: {
    easy: 50,
    medium: 30,
    hard: 10,
  },
  activityData: [
    0, 1, 2, 3, 0, 1, 4, 
    2, 3, 4, 1, 0, 2, 3, 
    1, 2, 3, 4, 0, 1, 2, 
    3, 4, 0, 1, 2, 3, 4,
  ], // 4 weeks of mock data
};

const activityLevels = [
  "bg-green-100",
  "bg-green-300",
  "bg-green-500",
  "bg-green-700",
  "bg-green-900",
];

export default function Component() {
  const [selectedPeriod, setSelectedPeriod] = useState("last4Weeks");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value);
  };

  return (
    <div className="container mx-auto p-4 space-y-4">
      <GridDotBackground />
      {/* User Profile Card */}
      <Card>
        <CardHeader className="flex items-center space-x-4">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src={user.avatar}
              alt={user.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <CardTitle className="text-xl font-bold">{user.name}</CardTitle>
            <p className="text-sm text-gray-500">@{user.username}</p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {Object.entries(user.completedQuestions).map(([difficulty, count]) => (
              <Card key={difficulty}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">{count}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Activity</CardTitle>
            <select
              value={selectedPeriod}
              onChange={handleSelectChange}
              className="border border-gray-300 rounded-md p-2 text-sm"
            >
              <option value="last4Weeks">Last 4 Weeks</option>
              <option value="last3Months">Last 3 Months</option>
              <option value="lastYear">Last Year</option>
            </select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1">
            {user.activityData.map((level, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-sm ${activityLevels[level]}`}
                title={`${level} activities`}
              />
            ))}
          </div>
          <div className="flex justify-end items-center mt-2 text-sm text-gray-500">
            <span className="mr-1">Less</span>
            {activityLevels.map((color, index) => (
              <div key={index} className={`w-3 h-3 ${color} mr-0.5`} />
            ))}
            <span className="ml-1">More</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
