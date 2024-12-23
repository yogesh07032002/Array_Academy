import React from 'react';

function CSSNotes() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-white bg-red-600 p-4 rounded-lg text-2xl font-semibold">
        CSS Tutorial
      </h1>
      <p className="mt-4 text-lg">
        CSS tutorial or CSS 3 tutorial provides basic and advanced concepts of CSS technology. Our CSS tutorial is developed for beginners and professionals. The major points of CSS are given below:
      </p>
      <ul className="mt-4 list-disc pl-6 text-lg">
        <li>CSS stands for Cascading Style Sheet.</li>
        <li>CSS is used to design HTML tags.</li>
        <li>CSS is a widely used language on the web.</li>
        <li>HTML, CSS, and JavaScript are used for web designing. It helps the web designers to apply style on HTML tags.</li>
      </ul>
      <p className="mt-4 text-lg">CSS Example with CSS Editor:</p>
      <pre className="mt-4 bg-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
        {`<!DOCTYPE html>  
<html>  
<head>  
<style>  
h1{  
  color:white;  
  background-color:red;  
  padding:5px;  
}  
p{  
  color:blue;  
}  
</style>  
</head>  
<body>  
<h1>Write Your First CSS Example</h1>  
<p>This is Paragraph.</p>  
</body>  
</html>`}
      </pre>
      <p className="mt-4 text-lg">Output:</p>
    </div>
  );
}

export default CSSNotes;
