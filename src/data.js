// The channels in the sidebar, and the messages each one starts with.
export const CHANNELS = [
  { id: "general", name: "general" },
  { id: "react-help", name: "react-help" },
  { id: "project", name: "project-team" },
];

export const SEED_MESSAGES = {
  general: [
    { id: "g1", author: "Maya", time: "9:02 AM", hearts: 0,
      text: "Morning! Is anyone else studying in the library today?" },
    { id: "g2", author: "Leo", time: "9:05 AM", hearts: 1,
      text: "Second floor, by the windows. There are free tables." },
  ],
  "react-help": [
    { id: "r1", author: "Sam", time: "10:14 AM", hearts: 0,
      text: "Why doesn't my sibling component update when I change state?" },
    { id: "r2", author: "Priya", time: "10:16 AM", hearts: 2,
      text: "Siblings can't read each other's state. Move it up to their parent." },
  ],
  project: [
    { id: "p1", author: "Jordan", time: "1:30 PM", hearts: 0,
      text: "The first draft of the wireframes is in the shared folder." },
  ],
};
