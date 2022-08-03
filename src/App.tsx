import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Editor, EditorContent, EditorOptions, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Box } from "@chakra-ui/react";
import MenuBar from "./Menubar";
import ReactComponent from "./Extension";
function App() {
  const [count, setCount] = useState(0);

  const editor = useEditor({
    extensions: [StarterKit, ReactComponent],
    content: `<p>
  </p>
  <react-component>
    <p>This is editable.</p>
  </react-component>
  <p>
  
  </p>
    `,
  });
  return (
    <div className="App">
      <Box>
        <MenuBar editor={editor as Editor} />
        <EditorContent
          style={{
            width: "50vw",
            height: "40rem",
            border: "10px solid blue",
          }}
          editor={editor}
        />
      </Box>
    </div>
  );
}

export default App;
