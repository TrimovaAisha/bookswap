export default function Chat({ createChatOpen, setCreateChatOpen }) {
  return (
    <section className="chatPage">
      <h2>Чаты</h2>

      <div className="chatLayout">
        <div className="chatList">
          <div className="chatItem active">Чат с модератором</div>
          <div className="emptySmall">Созданные чаты появятся здесь</div>
        </div>

        <div className="chatWindow">
          <h3>Чат с модератором</h3>

          <div className="messages">
            <p className="systemMsg">
              Модератор будет следить за правилами общения.
            </p>
          </div>

          <div className="messageInput">
            <input placeholder="Написать сообщение..." />
            <button>Отправить</button>
          </div>
        </div>
      </div>

      <button className="plusBtn" onClick={() => setCreateChatOpen(true)}>
        +
      </button>

      {createChatOpen && (
        <div className="modalBg">
          <div className="modal">
            <h2>Создать чат / клуб</h2>

            <input placeholder="Название сообщества" />

            <select>
              <option>Все жанры приветствуются</option>
              <option>Классика</option>
              <option>Фэнтези</option>
              <option>Дарк романы</option>
              <option>Дарк академия</option>
              <option>Sci-fi</option>
            </select>

            <select>
              <option>Для всех</option>
              <option>Только женщины</option>
              <option>Только мужчины</option>
            </select>

            <input placeholder="Возраст, например 16-20" />
            <input placeholder="Город" />

            <div className="modalBtns">
              <button>Создать</button>
              <button onClick={() => setCreateChatOpen(false)}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}