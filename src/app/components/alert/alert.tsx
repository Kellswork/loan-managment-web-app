import React, { useEffect, useState } from "react";
import "./alert.scss";

function Alert({color, statusText}:{color: string, statusText: string}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 60000); 

    return () => {clearTimeout(timer)};
  }, []);

  const closeAlert = () => {
    setVisible(false);
  };


  if (!visible) return null;
  return (
    <div className={`alert-container ${color}`} role="alert">
      <strong className="font-bold">{statusText}!</strong>
      <span onClick={closeAlert} className="alert-close-btn">
        <svg
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  );
}

export default Alert;