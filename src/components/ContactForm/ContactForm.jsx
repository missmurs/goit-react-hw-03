export default function ContactForm({ onAdd }) {
  const handleSumbit = (evt) => {
    evt.preventDefault();
    onAdd(evt.target.elements.name.value);
    evt.target.reset();
  };
  return (
    <form onSubmit={handleSumbit}>
      <input type="text" name="name" />
      <input type="number" name="number" />

      <button type="submit">Add contact</button>
    </form>
  );
}
