import React from 'react';

function JSNotes() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-white bg-blue-600 p-4 rounded-lg text-2xl font-semibold">
        JavaScript Tutorial
      </h1>
      <p className="mt-4 text-lg">
        Our JavaScript Tutorial is designed for beginners and professionals both. JavaScript is used to create client-side dynamic pages.
      </p>
      <p className="mt-4 text-lg">
        JavaScript is an object-based scripting language which is lightweight and cross-platform.
      </p>
      <p className="mt-4 text-lg">
        JavaScript is not a compiled language, but it is a translated language. The JavaScript Translator (embedded in the browser) is responsible for translating the JavaScript code for the web browser.
      </p>
      
      <h2 className="mt-6 text-xl font-semibold text-blue-500">What is JavaScript</h2>
      <p className="mt-2 text-lg">
        JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages. It is an interpreted, full-fledged programming language that enables dynamic interactivity on websites when applied to an HTML document. It was introduced in the year 1995 for adding programs to the webpages in the Netscape Navigator browser. Since then, it has been adopted by all other graphical web browsers. With JavaScript, users can build modern web applications to interact directly without reloading the page every time. The traditional website uses js to provide several forms of interactivity and simplicity.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-blue-500">Features of JavaScript</h2>
      <ul className="mt-4 list-disc pl-6 text-lg">
        <li>All popular web browsers support JavaScript as they provide built-in execution environments.</li>
        <li>JavaScript follows the syntax and structure of the C programming language. Thus, it is a structured programming language.</li>
        <li>JavaScript is a weakly typed language, where certain types are implicitly cast (depending on the operation).</li>
        <li>JavaScript is an object-oriented programming language that uses prototypes rather than using classes for inheritance.</li>
        <li>It is a light-weighted and interpreted language.</li>
        <li>It is a case-sensitive language.</li>
        <li>JavaScript is supportable in several operating systems including, Windows, macOS, etc.</li>
        <li>It provides good control to the users over the web browsers.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-blue-500">History of JavaScript</h2>
      <p className="mt-2 text-lg">
        In 1993, Mosaic, the first popular web browser, came into existence. In the year 1994, Netscape was founded by Marc Andreessen. He realized that the web needed to become more dynamic. Thus, a 'glue language' was believed to be provided to HTML to make web designing easy for designers and part-time programmers. Consequently, in 1995, the company recruited Brendan Eich intending to implement and embed Scheme programming language to the browser. But, before Brendan could start, the company merged with Sun Microsystems for adding Java into its Navigator so that it could compete with Microsoft over the web technologies and platforms. Now, two languages were there: Java and the scripting language. Further, Netscape decided to give a similar name to the scripting language as Java's. It led to 'Javascript'. Finally, in May 1995, Marc Andreessen coined the first code of Javascript named 'Mocha'. Later, the marketing team replaced the name with 'LiveScript'. But, due to trademark reasons and certain other reasons, in December 1995, the language was finally renamed to 'JavaScript'. From then, JavaScript came into existence.
      </p>

      <h2 className="mt-6 text-xl font-semibold text-blue-500">Application of JavaScript</h2>
      <p className="mt-2 text-lg">
        JavaScript is used to create interactive websites. It is mainly used for:
      </p>
      <ul className="mt-4 list-disc pl-6 text-lg">
        <li>Client-side validation</li>
        <li>Dynamic drop-down menus</li>
        <li>Displaying date and time</li>
        <li>Displaying pop-up windows and dialog boxes (like an alert dialog box, confirm dialog box, and prompt dialog box)</li>
        <li>Displaying clocks, etc.</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold text-blue-500">JavaScript Example</h2>
      <pre className="mt-4 bg-gray-200 p-4 rounded-lg overflow-x-auto text-sm">
        {`<script>  
document.write("Hello JavaScript by JavaScript");  
</script>`}
      </pre>
    </div>
  );
}

export default JSNotes;
