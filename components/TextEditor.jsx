"use client"

import { Block } from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useState } from "react";
import { Textarea } from "./ui/textarea";
 

 
export default function TextEditor({data,editable}) {
  // Stores the document JSON.
  const [blocks, setBlocks] = useState([]);
  let editor;
  // Creates a new editor instance.
  if(data != null ){
    editor = useCreateBlockNote({
    initialContent: JSON.parse(data.text),
  });}
  else{
    editor = useCreateBlockNote({
      initialContent: [
        {
          type: "paragraph",
          content: "You can simply click and edit",
        },
        {
          type: "heading",
          content: "This is a header",
        },
        {
          type: "paragraph",
          content: "This is a paragraph block",
        },
        {
          type: "paragraph",
        },
      ],
    });
  }
 
  // Renders the editor instance and its document JSON.
  return (
    <div className="bg-background">
      <div className="bg-background">
        <BlockNoteView
        
          editor={editor}
          editable={editable}
          onChange={() => {
            // Saves the document JSON to state.
            setBlocks(editor.document);
          }}
        />
      </div>
      <div>
          <Textarea className="hidden" id="text" value={JSON.stringify(blocks, null, 2)} name='text' placeholder="Users can do this and that in..." required />
      </div>
    </div>
  );
}
 