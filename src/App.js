import { useState } from "react";
import Editor from "./components/Editor"

const App = () => {
  const [content, setContent] = useState('');

  return (
    <div>
      <Editor content={content} setContent={setContent} />
    </div>
  )
}

export default App