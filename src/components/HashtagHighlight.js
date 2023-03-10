import React from 'react';

const Hashtag = ({ text }) => {
  const regex = /(\#[a-zA-Z0-9]+\b)/g;

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (part.match(regex)) {
          const hashtag = part.slice(1);

          return (
            <a href={`/hashtag/${hashtag}`} key={index}>
              <strong>{part}</strong>
            </a>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

export default Hashtag;
