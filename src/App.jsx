import { useState } from "react";
import Sidebar from "./components/Sidebar";
import LogoutModal from "./components/LogoutModal";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [createChatOpen, setCreateChatOpen] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Sidebar setPage={setPage} dark={dark} setDark={setDark} />

      <main className="content">
        {page === "home" && <Home />}
        {page === "chat" && (
          <Chat
            createChatOpen={createChatOpen}
            setCreateChatOpen={setCreateChatOpen}
          />
        )}
        {page === "profile" && (
          <Profile onLogout={() => setLogoutModal(true)} />
        )}
      </main>
      <footer></footer>
      {logoutModal && (
        <LogoutModal setLogoutModal={setLogoutModal} />
      )}
    </div>
  );
}
