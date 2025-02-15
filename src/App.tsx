import React from "react";
import "./App.css";

const App: React.FC = () => {
  // Dados do contato para o arquivo VCF
  const handleSaveContact = () => {
    const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:Caue Catone Silva
TEL:+55 99 99999-9999
EMAIL:cauesilva@email.com
URL:https://portifolio-caue.vercel.app
END:VCARD`;

    const blob = new Blob([vcfData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "caue-silva.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <div className="profile">
        <h2>Caue Catone Silva</h2>
      </div>

      <div className="links">
        <a className="btn" href="https://www.linkedin.com/in/cauecatonesilva1551/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className="btn" href="https://github.com/cauesilva1" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="btn" href="https://portifolio-caue.vercel.app" target="_blank" rel="noopener noreferrer">
          Portfólio
        </a>
        <button className="btn save-contact" onClick={handleSaveContact}>
          Salvar Contato 📇
        </button>
      </div>

      <footer>© cauesilva1 2025</footer>
    </div>
  );
};

export default App;
