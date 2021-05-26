import React from "react";

interface ICardProps {
  imageUrl: string;
  description: string;
  content: string;
  author: string;
  date: string;
  url?: string;
}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  const modifiedDate = new Date(props.date).toDateString();

  const authorToArr = props.author && props.author.split("/");
  const modifiedAuthor =
    (authorToArr && authorToArr[authorToArr.length - 1]).replace("-", " ") ||
    props.author;

  return (
    <div className="card">
      <div>
        <img className="card-image" src={props.imageUrl} alt={props.author} />
        <h3 className="card-title">{props.description}</h3>
        <p className="card-content">{props.content}</p>
      </div>
      <div className="card-info">
        <div>
          <h4>{modifiedAuthor}</h4>
          <p>{modifiedDate}</p>
        </div>
        <div>
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn__link"
          >
            more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
