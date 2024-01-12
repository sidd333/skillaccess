import { initialConfig } from "./editorConfig";

import { $getRoot, $getSelection, EditorState } from "lexical";
import { useEffect, useState } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";

// import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

function OnChangePlugin({ onChange }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
}

export default function Editor() {
  const [editorState, setEditorState] = useState();
  function onChange(editorState) {
    // Call toJSON on the EditorState object, which produces a serialization safe string
    const editorStateJSON = editorState.toJSON();
    // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
    setEditorState(JSON.stringify(editorStateJSON));
    console.log(editorStateJSON);
  }

  return (
    <LexicalComposer initialConfig={initialConfig} className="w-96 h-96">
      <PlainTextPlugin
        contentEditable={<ContentEditable className="bg-gray-100 h-96" />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />

      <HistoryPlugin />
      <ListPlugin />
      <OnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
}
