import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-consent">
      <p>We use cookies to improve your experience. You can accept or reject cookies.</p>
      <div className="cookie-buttons">
        <button className="btn btn-primary me-2" onClick={handleAccept}>
          Accept
        </button>
        <button className="btn btn-secondary" onClick={handleReject}>
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
