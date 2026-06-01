export default function Home() {
  return (
    <section>
      <h2>Обмен книгами внутри Казахстана</h2>
      <div className="filters">
        <input placeholder="Поиск книг или сообществ из backend части..."/>

        <select>
          <option>Все города</option>
          <option>Астана</option>
          <option>Алматы</option>
          <option>Шымкент</option>
          <option>Караганда</option>
        </select>

        <select>
          <option>smsmsmsms</option>
          <option>Все жанры</option>
          <option>Классика</option>
          <option>Фэнтези</option>
          <option>Дарк романы</option>
          <option>Дарк академия</option>
          <option>Sci-fi</option>
        </select>
      </div>

      <div className="emptyBox">
        Здесь позже будут книги из backend
      </div>

      <h3>Книжные клубы</h3>

      <div className="emptyBox">
        Здесь позже будут сообщества из backend
      </div>
    </section>
  );
}