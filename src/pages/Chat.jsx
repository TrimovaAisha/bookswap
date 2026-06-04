import { useEffect, useState } from "react";

export default function Chat({
  createChatOpen,
  setCreateChatOpen,
}) {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [clubName, setClubName] = useState("");
  const [genre, setGenre] = useState("Все жанры приветствуются");
  const [gender, setGender] = useState("Для всех");
  const [ageRange, setAgeRange] = useState("");
  const [city, setCity] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    loadChats();
  }, []);

  const loadChats = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/chats"
      );

      const data = await response.json();

      setChats(data);

      if (data.length > 0) {
        openChat(data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const openChat = async (chat) => {
    setSelectedChat(chat);

    try {
      const response = await fetch(
        `http://localhost:5000/api/chats/${chat._id}`
      );

      const data = await response.json();

      setMessages(data.messages || []);
    } catch (error) {
      console.error(error);
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return;

    if (!selectedChat) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/chats/${selectedChat._id}/message`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            text: message,
            sender: "Вы",
          }),
        }
      );

      const updatedChat = await response.json();

      setMessages(updatedChat.messages);

      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };

  const createClub = async () => {
    if (!clubName.trim()) {
      alert("Введите название клуба");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/chats",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title: clubName,
            genre,
            gender,
            ageRange,
            city,
          }),
        }
      );

      const newChat = await response.json();

      setChats((prev) => [newChat, ...prev]);

      setCreateChatOpen(false);

      setClubName("");
      setAgeRange("");
      setCity("");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <section className="chatPage">
      <h2>Чаты</h2>

      <div className="chatLayout">
        <div className="chatList">
          {chats.length === 0 ? (
            <div className="emptySmall">
              Созданные чаты появятся здесь
            </div>
          ) : (
            chats.map((chat) => (
              <div
                key={chat._id}
                className={`chatItem ${
                  selectedChat?._id === chat._id
                    ? "active"
                    : ""
                }`}
                onClick={() => openChat(chat)}
              >
                {chat.title}
              </div>
            ))
          )}
        </div>

        <div className="chatWindow">
          <h3>
            {selectedChat
              ? selectedChat.title
              : "Выберите чат"}
          </h3>

          <div className="messages">
            {messages.length === 0 ? (
              <p className="systemMsg">
                Пока нет сообщений
              </p>
            ) : (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className="messageBubble"
                >
                  <strong>
                    {msg.sender}
                  </strong>

                  <p>{msg.text}</p>

                  <small>
                    {msg.createdAt
                      ? new Date(
                          msg.createdAt
                        ).toLocaleString()
                      : ""}
                  </small>
                </div>
              ))
            )}
          </div>

          <div className="messageInput">
            <input
              value={message}
              onChange={(e) =>
                setMessage(e.target.value)
              }
              onKeyDown={handleEnter}
              placeholder="Написать сообщение..."
            />

            <button onClick={sendMessage}>
              Отправить
            </button>
          </div>
        </div>
      </div>

      <button
        className="plusBtn"
        onClick={() => setCreateChatOpen(true)}>
        +
      </button>
      {createChatOpen && (
        <div className="modalBg">
          <div className="modal">
            <h2>Создать чат / клуб</h2>

            <input
              value={clubName}
              onChange={(e) =>
                setClubName(e.target.value)
              }
              placeholder="Название сообщества"
            />

            <select
              value={genre}
              onChange={(e) =>
                setGenre(e.target.value)
              }
            >
              <option>
                Все жанры приветствуются
              </option>
              <option>Классика</option>
              <option>Фэнтези</option>
              <option>Дарк романы</option>
              <option>Дарк академия</option>
              <option>Sci-fi</option>
            </select>

            <select
              value={gender}
              onChange={(e) =>
                setGender(e.target.value)
              }
            >
              <option>Для всех</option>
              <option>
                Только женщины
              </option>
              <option>
                Только мужчины
              </option>
            </select>

            <input
              value={ageRange}
              onChange={(e) =>
                setAgeRange(e.target.value)
              }
              placeholder="Возраст, например 16-20"
            />

            <input
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
              placeholder="Город"
            />

            <div className="modalBtns">
              <button onClick={createClub}>
                Создать
              </button>

              <button
                onClick={() =>
                  setCreateChatOpen(false)
                }
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}