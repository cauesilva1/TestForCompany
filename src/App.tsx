import React from "react";
import "./App.css";

const App: React.FC = () => {
  // Função para converter a imagem para Base64
  const convertImageToBase64 = (img: string) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    
    image.src = img;
    
    return new Promise<string>((resolve, reject) => {
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx?.drawImage(image, 0, 0);
        resolve(canvas.toDataURL("image/jpeg"));
      };
      
      image.onerror = reject;
    });
  };

  const handleSaveContact = async () => {
    try {
      // Caminho da imagem na pasta public (não será exibida na página)
      const base64Image = await convertImageToBase64("/foto.jpg");

      const vcfData = `BEGIN:VCARD
VERSION:3.0
FN:Caue Catone Silva
TEL:+55 99 99999-9999
EMAIL:cauesilva@email.com
PHOTO;ENCODING=BASE64;TYPE=JPEG:${base64Image}
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
    } catch (error) {
      console.error("Erro ao salvar o contato:", error);
    }
  };

  return (
    <div className="container">
      <div className="profile">
        {/* Aqui não exibimos a imagem */}
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
