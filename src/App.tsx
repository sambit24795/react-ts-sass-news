import React, { useEffect } from "react";
import Home from "./components/Home";
import useNews from "./hooks/useNews";

function App() {
  /* useEffect(() => {
    
  }, []);
  
 */

  const { news, isError, isLoading } = useNews();
  console.log(news);

  return <Home />;
}

export default App;
