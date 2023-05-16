import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = ({ content, setContent }) => {
  const [value, setValue] = useState(content);
  const editorRef = useRef(null);

  useEffect(() => {
    setValue(content);
  }, [content]);

  const handleOnChange = (newValue) => {
    setValue(newValue);
    setContent(newValue);
  };

  const handleOnFocus = () => {
    editorRef.current.focus();
  };

  return (
    <div onClick={handleOnFocus}>
      <ReactQuill
        ref={editorRef}
        value={value}
        onChange={handleOnChange}
        modules={{
          toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            ['image', 'clean'],
          ],
        }}
        placeholder="Write something here..."
      />
    </div>
  );
};

export default Editor;
