import Message from "./Message.jsx";

export default function MessageList({ messages }) {
  return (
    <ul className="messages">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </ul>
  );
}
