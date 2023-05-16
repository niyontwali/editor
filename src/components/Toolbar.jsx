import React from 'react';
import { FaBold, FaItalic, FaUnderline, FaListUl, FaListOl, FaQuoteLeft, FaCode } from 'react-icons/fa';
import { IoIosImage } from 'react-icons/io';
import { MdTitle } from 'react-icons/md';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

const Toolbar = ({ onToolbarAction }) => {
  const handleToolbarAction = (action) => {
    onToolbarAction(action);
  };

  return (
    <div className="toolbar">
      <Tooltip title="Bold" position="bottom">
        <button onClick={() => handleToolbarAction('bold')}>
          <FaBold />
        </button>
      </Tooltip>
      <Tooltip title="Italic" position="bottom">
        <button onClick={() => handleToolbarAction('italic')}>
          <FaItalic />
        </button>
      </Tooltip>
      <Tooltip title="Underline" position="bottom">
        <button onClick={() => handleToolbarAction('underline')}>
          <FaUnderline />
        </button>
      </Tooltip>
      <Tooltip title="Heading" position="bottom">
        <button onClick={() => handleToolbarAction('heading')}>
          <MdTitle />
        </button>
      </Tooltip>
      <Tooltip title="Bulleted List" position="bottom">
        <button onClick={() => handleToolbarAction('bulletedList')}>
          <FaListUl />
        </button>
      </Tooltip>
      <Tooltip title="Numbered List" position="bottom">
        <button onClick={() => handleToolbarAction('numberedList')}>
        <FaListOl />
        </button>
        </Tooltip>
        <Tooltip title="Quote" position="bottom">
        <button onClick={() => handleToolbarAction('quote')}>
        <FaQuoteLeft />
        </button>
        </Tooltip>
        <Tooltip title="Code Block" position="bottom">
        <button onClick={() => handleToolbarAction('codeBlock')}>
        <FaCode />
        </button>
        </Tooltip>
        <Tooltip title="Insert Image" position="bottom">
        <button onClick={() => handleToolbarAction('insertImage')}>
        <IoIosImage />
        </button>
        </Tooltip>
        </div>
        );
        };

export default Toolbar;
        
