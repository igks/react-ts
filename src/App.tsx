import "./App.css";
import { useGetPostQuery } from "./data/services/post";

function App() {
  const { data = [], error, isLoading } = useGetPostQuery();

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        data.map((post) => <p key={post.title}>{post.title}</p>)
      )}
    </>
  );
}

export default App;
