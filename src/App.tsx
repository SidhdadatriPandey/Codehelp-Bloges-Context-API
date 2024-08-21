import Bloges from "./Components/Bloges";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import useAppContext from "./useAppcontext";
import { useEffect } from "react";

function App() {
  const context=useAppContext();
  const { fetchBlogPosts}=context;
  useEffect(()=>{
    if(fetchBlogPosts){
      fetchBlogPosts(1)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="App">
      <Header/>
      <Bloges/>
      <Pagination/>
    </div>
  );
}

export default App;
