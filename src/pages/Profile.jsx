import { useState } from "react";

export default function Profile({ onLogout }) {
  const [adModal, setAdModal] = useState(false);

  return (
    <section>
      <h2>Профиль</h2>

      <div className="profileCard">
        <p><b>Имя:</b> будет из backend</p>
        <p><b>Город:</b> будет из backend</p>
        <p><b>Роль:</b> пользователь / админ / модератор</p>

        <button className="logoutBtn" onClick={onLogout}>
          Выйти
        </button>
      </div>

      <div className="profileBottom">
        <div className="profileTabs">
          <button>Мои объявления</button>
          <button onClick={() => setAdModal(true)}>
            Добавить объявление
          </button>
        </div>

        <div className="emptyBox">
          Здесь позже будут объявления пользователя из backend
        </div>
      </div>

      {adModal && (
        <div className="modalBg">
          <div className="modal">
            <h2>Добавить объявление</h2>

            <input placeholder="Название книги" />

            <select>
              <option>Жанр</option>
              <option>Классика</option>
              <option>Фэнтези</option>
              <option>Дарк романы</option>
              <option>Дарк академия</option>
              <option>Sci-fi</option>
              <option>Сказки</option>
              <option>Young-adult</option>
              <option>Детективы</option>
              <option>Романы</option>
              <option>Комедия</option>
            </select>

            <select>
              <option>Состояние книги</option>
              <option>Хорошее</option>
              <option>Нормальное</option>
              <option>Плохое</option>
            </select>

            <div className="modalBtns">
              <button>Добавить</button>
              <button onClick={() => setAdModal(false)}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}