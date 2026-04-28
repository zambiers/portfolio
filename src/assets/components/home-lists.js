const ASTER_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/aster";
const UBUNTU_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/ubuntu";
const MINUTES_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/minutes";
// const GNOME_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/gnome";
// const ESCAPEZA_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/escapeza";
const OIL_URL = "https://aaportfoliobucket.s3.us-east-2.amazonaws.com/images/oil";

export const projects = [
  {
    id: '4',
    title: 'Aster',
    description: "Long before books, before temples, before maps — there was the sky. The ancient Greeks looked up and saw not just light, but lives—heroes frozen in glory. Gods locked in jealousy. Lovers separated by fate, reunited only in the heavens. Every constellation holds a message. A warning. A truth. Something worth carrying with you when you set the game down and look up at your own sky. Find the constellation. Learn the story. Pass it along. After all, the night sky is our awe.",
    Extra: 'Game Jam: Unlikely Collaborators Game Jam 2026',
    Language: 'Unity, GitHub',
    Type: "Game",
    url: './Aster',
    image: `${ASTER_URL}/testingTalking-Aster.gif`,
  },
  {
    id: '3',
    title: 'Finding Ubuntu',
    description: "In 'Finding Ubuntu', you step into the shoes of a funeral director who just moved into the small town of Windwood Oaks — a haunted place, fractured by a complicated history and insidious, hidden biases. When the sudden death of a local figure ignites controversy, you're tasked with preparing their final rites, but the story of their life is anything but clear.",
    Extra: 'Game Jam: Unlikely Collaborators Game Jam 2025',
    Language: 'Unreal Engine, GitHub',
    Type: "Game",
    url: './ubuntu',
    image: `${UBUNTU_URL}/homePageGif.gif`,
  },
  {
    id: '2',
    title: 'Five More Minutes...',
    description: "Five More Minutes is a dream-logic time puzzle where you're stuck in the endless loop of alarm-snoozing. As sheep leap over the fence in your half-conscious mind, each one skips time forward — but not evenly. It's your job to listen for audio cues, decipher time patterns, and decide which sheep to let through… and which ones to correct.",
    Extra: 'Game Jam: UW Tri-Campus Game Jam 2025',
    Language: 'Godot, GitHub',
    Type: "Game",
    url: './minutes',
    image: `${MINUTES_URL}/Sheep%20moving.gif`,
  },

  {
    id: '1',
    title: "Avah's Oil Spill",
    description: "Avah and her friend, June, were in the park when the oil started to rain down on them. June became sick and was taken home. Queen Rachel gives Avah the task to save June and the ocean from the oil",
    Extra: 'Girls Make Games 2023',
    Language: 'Construct 3',
    Type: "Game",
    url: '/oil',
    image: `${OIL_URL}/firstLevelDemo.gif`,
  },
];