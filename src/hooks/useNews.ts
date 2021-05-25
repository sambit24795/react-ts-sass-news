import useSwr from "swr";

const API_KEY = "0c50ebe917f6495f9a4ebcf6f0f78398";

const useNews = () => {
  const { data, error } = useSwr(
    `https://newsapi.org/v2/everything?q=apple&from=2021-05-24&to=2021-05-24&sortBy=popularity&apiKey=${API_KEY}`,
    { shouldRetryOnError: true }
  );

  return {
    news: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export default useNews;
