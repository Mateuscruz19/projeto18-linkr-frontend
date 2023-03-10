import React from 'react';
import styled from 'styled-components';

const Hashtag = ({ text }) => {
  const regex = /(\#[a-zA-Z0-9]+\b)/g;

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => {
        if (part.match(regex)) {
          const hashtag = part.slice(1);

          return (
            <Styl>
            <a href={`/hashtag/${hashtag}`} key={index}>
              <strong>{part}</strong>
            </a>
            </Styl>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const Styl = styled.div`
  a{
    text-decoration: none;
    font-weight: bold;
    color: white;
  }
`

export default Hashtag;
