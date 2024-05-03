import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
     <div>
      Logo
     </div>
     <div>
       <h2>Welcome</h2>
       <p>Enter details to login</p>
       <form>
        <label>
          Email
        </label>
        <input />
        <label>
          Password
        </label>
        <input />
       </form>
       <p>forgot password</p>
       <button>Log in</button>
     </div>
    </main>
  );
}
