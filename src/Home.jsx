import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome</p>
      <button type="blog">
        <Link to="/blog">Blog</Link>
      </button>
    </div>
  );
}

export default Home;
