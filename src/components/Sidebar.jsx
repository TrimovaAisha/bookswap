export default function Sidebar({ setPage, dark, setDark }) {
  return (
    <aside className="sidebar">
      <h1>KitapSwap</h1>

      <button onClick={() => setPage("home")}>Главная</button>
      <button onClick={() => setPage("chat")}>Чаты</button>
      <button onClick={() => setPage("profile")}>Профиль</button>
      <button className="themeBtn" onClick={() => setDark(!dark)}>
        Сменить тему
      </button>
    </aside>
  );
}