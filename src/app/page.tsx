import "./page.scss";
import Logo from "./components/logo";
import Login from "./login/login";

export default function Home() {
  return (
    <main className="main-container">
      <nav>
        <Logo />
      </nav>
      <Login />
    </main>
  );
}
