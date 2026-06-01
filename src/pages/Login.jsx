export default function Login() {
  return (
    <section>
      <h2>Вход</h2>

      <div className="authCard">
        <input placeholder="Username" />
        <input type="password" placeholder="Пароль" />

        <button>Войти</button>
      </div>
    </section>
  );
}