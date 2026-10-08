export default function ChatHeader({ channel }) {
  return (
    <header className="chat-header">
      <h1># {channel.name}</h1>
    </header>
  );
}
