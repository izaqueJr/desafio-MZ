export default function Form() {
  return (
    <form className="newsletter-form">
      <input type="text" placeholder="E-mail" className="newsletter__email" />

      <button className="newsletter__submit" type="submit">
        <span>ENVIAR</span>
      </button>
    </form>
  );
}
