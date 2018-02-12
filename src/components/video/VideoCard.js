import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ snippet, onClick, link }) => {
  return (
    <div className="column is-3">
      <Link to={link}>
        <div className="card" onClick={onClick}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={snippet.thumbnails.high.url} />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <p>{snippet.description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default VideoCard;
