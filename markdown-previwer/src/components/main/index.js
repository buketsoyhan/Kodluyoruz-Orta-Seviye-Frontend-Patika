import React from "react";
import "./style.css";
import ReactMarkdown from "react-markdown";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";



function Main() {
  const [markDown, setMarkDown] = useState("this is user input");
  const help = `Heading
=======
Sub-heading
-----------
### Another deeper heading
Paragraphs are separated
by a blank line.
Leave 2 spaces at the end of a line to do a
line break
Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .
Shopping list:
  * apples
  * oranges
  * pears
Numbered list:
  1. apples
  2. oranges
  3. pears
The rain---not the reign---in
Spain.
 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;
  return (
    <div className="container">
      <div className="question">
        <button onClick={setMarkDown}> ?</button>
      </div>

      <div className="header"> Markdown Previewer </div>

      <div className="panel">
        <div className="panel-left">
          <textarea rows={30} cols={50} value={markDown} onChange={(e) => setMarkDown(e.target.value)}>
            cdghcg
          </textarea>
        </div>
        <div className="panel-right">
          <textarea rows={30} cols={50} value={markDown}>
            <ReactMarkdown
              className="output__box"
              children={markDown}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, "")}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />
          </textarea>
        </div>
      </div>
    </div>
  );
}

export default Main;
