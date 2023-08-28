import React, { useState } from "react";
import mammoth from "mammoth";

const DocxViewer = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const result = await mammoth.convertToHtml({ arrayBuffer: file });

        const html = result.value; // Le HTML généré
        const messages = result.messages; // Les messages d'erreur et de conversion

        setHtmlContent(html);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div >
      <input className="section__article__docsV" type="file" onChange={handleFileChange} accept=".docx" />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default DocxViewer;
