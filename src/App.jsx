import { CHANNELS, SEED_MESSAGES } from "./data.js";
import Sidebar from "./components/Sidebar.jsx";
import ChatHeader from "./components/ChatHeader.jsx";
import MessageList from "./components/MessageList.jsx";
import Composer from "./components/Composer.jsx";

export default function App() {
  return (
    <div className="app">
      <Sidebar channels={CHANNELS} />
      <main className="main">
        <ChatHeader channel={CHANNELS[0]} />
        <MessageList messages={SEED_MESSAGES.general} />
        <Composer />
      </main>
    </div>
  );
}
