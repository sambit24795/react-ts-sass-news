import React from "react";

interface ICardProps {}

const Card: React.FunctionComponent<ICardProps> = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/68faeac4691b0ad5e853ff6efd4ea6f7.jpg"
          alt=""
        />
      </div>
      <div className="card-text">
        <span className="card-text__date">2021-05-24</span>
        <h2>Post One</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iure
          nulla natus, dignissimos facilis fugiat magnam veritatis reprehenderit
          aliquid veniam.
        </p>
      </div>
    </div>
  );
};

export default Card;
