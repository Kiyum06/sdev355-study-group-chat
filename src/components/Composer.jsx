export default function Composer() {
  return (
    <form className="composer">
      <textarea name="draft" rows={2} placeholder="Type a message..." />
      <button type="submit">Send</button>
    </form>
  );
}
