import { useNavigate } from "react-router-dom";

function Blog() {
  const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const Navigate = useNavigate();

  const handleView = (p) => {
    Navigate(`/blog/${p}`);
  };

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts.map((p) => {
          return (
            <div key={p}>
              <h3 >Post{p}</h3>
              <button onClick={() => handleView(p)}>View</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
