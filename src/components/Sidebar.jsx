export default function Sidebar({ channels }) {
  return (
    <nav className="sidebar">
      <h2>Channels</h2>
      {channels.map((channel) => (
        <button key={channel.id} className="channel">
          # {channel.name}
        </button>
      ))}
    </nav>
  );
}
