import React, { useEffect } from "react";
import Codemirror from "codemirror";
import "codemirror/addon/edit/closebrackets";
import "codemirror/theme/dracula.css";
import "codemirror/lib/codemirror.css";
import "codemirror/addon/edit/closetag";
import "codemirror/mode/javascript/javascript";
const EditorArea = () => {
  useEffect(() => {
    async function init() {
        Codemirror.fromTextArea(document.getElementById("realtimeEditor"), {
        mode: { name: "javascript", json: true },
        theme: "dracula",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    }
    init();
  }, []);
  return <textarea id="realtimeEditor"></textarea>;
};

export default EditorArea;
