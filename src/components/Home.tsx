import React, { useState } from "react";
import useNews from "../hooks/useNews";
import Card from "../ui/Card";
import Navbar from "../ui/Navbar";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [newsQuery, setNewsQuery] = useState<string>("");

  const { news, isLoading, isError } = useNews(newsQuery);

  return (
    <React.Fragment>
      <Navbar setNewsRef={setNewsQuery} />
      <div className="container">
        {news &&
          !isLoading &&
          !isError &&
          news.articles.map((el) => (
            <Card
              imageUrl={el.urlToImage}
              description={el.description}
              content={el.content}
              author={el.author}
              url={el.url}
              date={el.publishedAt}
              key={`${el.urlToImage}+${el.publishedAt}`}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
