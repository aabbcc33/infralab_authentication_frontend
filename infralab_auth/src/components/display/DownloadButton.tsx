import React from 'react';
import logo from '../../images/download.png'
import styles from '../../css/DownloadButton.module.css'

interface DownloadButtonProps {
  text: string;
  filename: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text, filename }) => {
  const handleDownload = () => {
    console.log("test");
    const element = document.createElement('a');
    const file = new Blob([text], { type: 'text/plain' });

    console.log(element);
    console.log(file);
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <button onClick={handleDownload} className="download-button"><img src={logo} className={styles.logo}/>Download File</button>
  );
};

export default DownloadButton;