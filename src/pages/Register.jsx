import { useState } from "react";

export default function Register() {
  const [gender, setGender] = useState("");

  return (
    <section>
      <h2>Регистрация</h2>

      <div className="authCard">
        <input placeholder="Username" />

        <input placeholder="Имя и фамилия" />

        <input
          placeholder="Номер телефона"
          type="tel"
        />

        <input
          type="date"
          placeholder="Дата рождения"
        />

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Выберите пол</option>
          <option value="female">Женский</option>
          <option value="male">Мужской</option>
        </select>

        {gender === "female" && (
          <div className="avatarBox">👩 Женская аватарка</div>
        )}

        {gender === "male" && (
          <div className="avatarBox">👨 Мужская аватарка</div>
        )}

        <select>
          <option>Выберите город</option>
          <option>Астана</option>
          <option>Алматы</option>
          <option>Шымкент</option>
          <option>Караганда</option>
          <option>Актобе</option>
          <option>Тараз</option>
          <option>Павлодар</option>
          <option>Усть-Каменогорск</option>
          <option>Семей</option>
          <option>Костанай</option>
          <option>Кызылорда</option>
          <option>Атырау</option>
          <option>Актау</option>
          <option>Петропавловск</option>
          <option>Туркестан</option>
          <option>Кокшетау</option>
          <option>Талдыкорган</option>
        </select>

        <input type="password" placeholder="Пароль" />

        <button>Зарегистрироваться</button>
      </div>
    </section>
  );
}