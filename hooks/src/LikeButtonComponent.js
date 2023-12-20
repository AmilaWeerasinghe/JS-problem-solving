import React, { Component } from 'react';
import cx from 'classnames';

export default class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 100,
      isLiked: false,
    };
  }

  handleLikeClick = () => {
    this.setState((prevState) => ({
      likes: prevState.isLiked ? prevState.likes - 1 : prevState.likes + 1,
      isLiked: !prevState.isLiked,
    }));
  };

  render() {
    const { likes, isLiked } = this.state;

    return (
      <>
        <div>
          <h2>Like Button</h2>
          <button
            className={cx('like-button', { liked: isLiked })}
            onClick={this.handleLikeClick}
          >
            Like | <span className="likes-counter">{likes}</span>
          </button>
        </div>
        <style>{`
          .like-button {
              font-size: 1rem;
              padding: 5px 10px;
              color: #585858;
          }
          .liked {
              font-weight: bold;
              color: #1565c0;
          }
        `}</style>
      </>
    );
  }
}
