import React from "react";

function HTMLNotes() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          HTML Introduction
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          HTML tutorial or HTML5 tutorial provides basic and advanced concepts
          of HTML. Our HTML tutorial is developed for beginners and professionals. 
          Every topic is given step-by-step so you can learn it in an easy way.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          If you are new to HTML, you can learn from basic to professional level. 
          After learning HTML with CSS and JavaScript, you will be able to create 
          your own interactive and dynamic websites. In this tutorial, we will focus 
          on HTML only.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          What is HTML?
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          HTML stands for HyperText Markup Language. It is used to create web 
          pages and web applications. HTML is a widely used language on the web. 
          We can create static websites using only HTML. Technically, HTML is a 
          markup language, not a programming language.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          HTML Example with Editor
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          In this tutorial, you will find many HTML examples, at least one example 
          for each topic with an explanation. You can also edit and run these examples 
          with our online HTML editor. Learning HTML is fun, and it's very easy to learn.
        </p>
        <div className="bg-gray-100 border-l-4 border-blue-500 p-4 rounded-md mb-6">
          <p className="text-gray-700 font-mono text-sm leading-loose">
            &lt;!DOCTYPE&gt; <br />
            &lt;html&gt; <br />
            &lt;head&gt; <br />
            &lt;title&gt;Web page title&lt;/title&gt; <br />
            &lt;/head&gt; <br />
            &lt;body&gt; <br />
            &nbsp;&nbsp;&lt;h1&gt;Write Your First Heading&lt;/h1&gt; <br />
            &nbsp;&nbsp;&lt;p&gt;Write Your First Paragraph.&lt;/p&gt; <br />
            &lt;/body&gt; <br />
            &lt;/html&gt;
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          HTML Text Editors
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          An HTML file is essentially a text file, so you can use any text editor to create one. Text editors are software programs that allow you to write and edit text. To build a web page, you need to write your HTML code using a text editor.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          There are various text editors available for different levels of expertise. For beginners, we recommend starting with basic editors like Notepad (for Windows) or TextEdit (for macOS). Once you're comfortable with the basics, you can explore more advanced editors like Notepad++, Sublime Text, or Vim.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">A. HTML Code with Notepad (Recommended for Beginners)</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Notepad is a simple and user-friendly text editor available in all versions of Windows. It’s ideal for beginners to start learning HTML.
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li><strong>Step 1:</strong> Open Notepad (Windows)</li>
          <li><strong>Step 2:</strong> Write Code in HTML. Here's an example:</li>
          <pre className="bg-gray-200 p-3 rounded-md">
            <code>
              {"<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Web Page</title>\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n  </body>\n</html>"}
            </code>
          </pre>
          <li><strong>Step 3:</strong> Save the HTML File</li>
          <li><strong>Step 4:</strong> Open the HTML Page in Your Web Browser</li>
        </ol>

        <h3 className="text-xl font-semibold text-gray-800 mb-3">B. HTML Code with Sublime Text (Recommended After Learning the Basics of HTML)</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Once you've mastered the basics of HTML, you may want to use more powerful text editors like Sublime Text. Sublime Text is a professional code editor that helps you write clean and efficient code with features like code suggestions, syntax highlighting, and multiple cursors.
        </p>
        <ol className="list-decimal pl-6 mb-4">
          <li><strong>Step 1:</strong> Open Sublime Text (download it from their official site).</li>
          <li><strong>Step 2:</strong> Save the Page Before Writing Code.</li>
          <li><strong>Step 3:</strong> Write the Code in Sublime Text.</li>
          <pre className="bg-gray-200 p-3 rounded-md">
            <code>
              {"<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Web Page</title>\n  </head>\n  <body>\n    <h1>Welcome to HTML!</h1>\n  </body>\n</html>"}
            </code>
          </pre>
          <li><strong>Step 4:</strong> Open the HTML Page in Your Browser</li>
        </ol>
      </div>
    </div>
  );
}

export default HTMLNotes;
