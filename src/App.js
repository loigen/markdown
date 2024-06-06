import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

const initialMarkdown = `
# Heading Level 1

## Heading Level 2

[This is a link](https://www.example.com)

\`Inline code\`

\`\`\`
// Code block
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

- List item

> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**
`;

// Configuring marked to interpret carriage returns as <br> elements
marked.setOptions({
  breaks: true
});

function App() {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="editor-container">
        <textarea
          id="editor"
          value={markdown}
          onChange={handleMarkdownChange}
        />
      </div>
      <div
        id="preview"
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      />
    </div>
  );
}

export default App;
