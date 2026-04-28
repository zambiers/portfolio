const ASTER_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/aster";
const UBUNTU_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/ubuntu";
const MINUTES_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/minutes";
const OIL_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/oil";

export const projects = [
  {
    id: '4',
    title: 'Aster',
    Role: "Team Lead & Gameplay Programmer",
    Extra: 'Game Jam: Unlikely Collaborators Game Jam 2026',
    Tools: 'Unity, GitHub',
    Length: "2 Weeks (March - April 2026)",
    url: './Aster',
    image: `${ASTER_URL}/testingTalking-Aster.gif`,
  },
  {
    id: '3',
    title: 'Finding Ubuntu',
    Role: "Gameplay Programmer",
    Extra: 'Game Jam: Unlikely Collaborators Game Jam 2025',
    Tools: 'Unreal Engine, GitHub',
    Length: "2 Weeks (March - April 2025)",
    url: './ubuntu',
    image: `${UBUNTU_URL}/homePageGif.gif`,
  },
  {
    id: '2',
    title: 'Five More Minutes...',
    Role: "Gameplay/UI Programmer",
    Extra: 'Game Jam: UW Tri-Campus Game Jam 2025',
    Tools: 'Godot, GitHub',
    Length: "1 Week (April 2025)",
    url: './minutes',
    image: `${MINUTES_URL}/Sheep%20moving.gif`,
  },

  {
    id: '1',
    title: "Avah's Oil Spill",
    Role: "Team Lead & Gameplay Programmer",
    Extra: 'Girls Make Games 2023',
    Tools: 'Construct 3',
    Length: "3 Weeks (July 2023)",
    url: '/oil',
    image: `${OIL_URL}/firstLevelDemo.gif`,
  },
];