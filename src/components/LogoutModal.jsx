export default function LogoutModal({ setLogoutModal }) {
  return (
    <div className="modalBg">
      <div className="modal">
        <h2>ТОЧНО ВЫЙТИ С АККАУНТА?</h2>

        <div className="modalBtns">
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            Да
          </button>
          <button onClick={() => setLogoutModal(false)}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}