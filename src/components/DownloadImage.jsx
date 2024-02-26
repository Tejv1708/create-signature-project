import React from "react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DownloadImageAsPDF = ({ url }) => {
  const downloadAsPDF = async () => {
    try {
      const imageElement = new Image();
      imageElement.src = url;

      imageElement.onload = async () => {
        const imageContainer = document.createElement("div");
        imageContainer.appendChild(imageElement);

        const canvas = await html2canvas(imageContainer);

        const pdf = new jsPDF();
        pdf.addImage(
          canvas.toDataURL("image/jpeg"),
          "JPEG",
          0,
          0,
          imageElement.width / 4,
          imageElement.height / 4
        ); // Adjust scale as needed

        saveAs(pdf.output("blob"), "image.pdf");
      };
    } catch (error) {
      console.error("Error converting image to PDF:", error);
    }
  };

  return <button onClick={downloadAsPDF}>Download as PDF!</button>;
};

export default DownloadImageAsPDF;
