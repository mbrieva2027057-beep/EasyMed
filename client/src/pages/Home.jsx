function Home({ logout }) {
  return (
    <div>
      <h1>Welcome to EasyMed</h1>
      <p>You are logged in.</p>

      <br />

      <button onClick={logout}>
        Log out
      </button>
    </div>
  );
}

export default Home;