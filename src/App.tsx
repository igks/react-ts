import "./App.css";
import PostCard from "./components/PostCard";
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
        data.map((post) => <PostCard key={post.id} {...post} />)
      )}
    </>
  );
}

export default App;
