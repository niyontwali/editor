import { useState } from "react";
import Editor from "./components/Editor"
import Preview from "./components/Preview";

const App = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <Editor content={content} setContent={setContent} />
    </div>
  )
}

export default App