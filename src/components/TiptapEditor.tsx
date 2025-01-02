import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";

const TiptapEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Underline],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  const setFontStyle = (style: string, value: string) => {
    editor.chain().focus().updateAttributes("textStyle", { [style]: value }).run();
  };

  const isActive = (format: string) => editor.isActive(format);

  return (
    <div className="border p-4 rounded">
      {/* Formatting Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-4 py-2 rounded ${
            isActive("bold") ? "bg-blue-700 text-white" : "bg-gray-200"
          }`}
          aria-label="Bold"
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-4 py-2 rounded ${
            isActive("italic") ? "bg-blue-700 text-white" : "bg-gray-200"
          }`}
          aria-label="Italic"
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-4 py-2 rounded ${
            isActive("underline") ? "bg-blue-700 text-white" : "bg-gray-200"
          }`}
          aria-label="Underline"
        >
          Underline
        </button>
      </div>

      {/* Font Family Selector */}
      <div className="mb-4">
        <label htmlFor="fontFamily" className="mr-2">
          Font Family:
        </label>
        <select
          id="fontFamily"
          onChange={(e) => setFontStyle("fontFamily", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Arial, sans-serif">Arial</option>
          <option value="Times New Roman, serif">Times New Roman</option>
          <option value="Arial Black, sans-serif">Arial Black</option>
          <option value="Calibri, sans-serif">Calibri</option>
        </select>
      </div>

      {/* Font Size Selector */}
      <div className="mb-4">
        <label htmlFor="fontSize" className="mr-2">
          Font Size:
        </label>
        <select
          id="fontSize"
          onChange={(e) => setFontStyle("fontSize", e.target.value)}
          className="border p-2 rounded"
        >
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
      </div>

      {/* Editor Content */}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
