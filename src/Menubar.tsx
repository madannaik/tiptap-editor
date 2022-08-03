import { ViewIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { FiBold, FiItalic } from "react-icons/fi";
import { FaParagraph, FaPlusSquare } from "react-icons/fa";
import {
  AiOutlinePlaySquare,
  AiOutlineRedo,
  AiOutlineStrikethrough,
  AiOutlineUndo,
} from "react-icons/ai";
import { VscHorizontalRule } from "react-icons/vsc";
import { GrLinkNext } from "react-icons/gr";
import { Editor, EditorOptions } from "@tiptap/react";

const MenuBar = ({ editor }: { editor: Editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="EditorBar">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
        style={{}}
      >
        <FiBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FiItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <AiOutlineStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <FaParagraph />
      </button>
      <button
        onClick={() => {}}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <FaPlusSquare />
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button> */}

      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <VscHorizontalRule />
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <GrLinkNext />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <AiOutlineUndo />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <AiOutlineRedo />
      </button>
    </div>
  );
};

export default MenuBar;
