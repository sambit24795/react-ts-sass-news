export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Array<Article>;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface Source {
  id?: any;
  name: string;
}
