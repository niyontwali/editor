import React from 'react';
import ReactMarkdown from 'react-markdown';

const Preview = ({ content }) => {
  return (
    <div className="preview">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Preview;