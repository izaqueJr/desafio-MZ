import "./global.css";
export default function Search() {
  return (
    <form action="" className="search">
      <input
        type="text"
        placeholder="O Que Você Busca?"
        className="search__input"
      />
      <button className="search__submit">
        <span>Buscar</span>
      </button>
    </form>
  );
}
