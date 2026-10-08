export default function Message({ message }) {
  return (
    <li className="message">
      <span className="author">{message.author}</span>
      <p className="text">{message.text}</p>
      {message.hearts > 0 && <span className="hearts">♥ {message.hearts}</span>}
    </li>
  );
}
