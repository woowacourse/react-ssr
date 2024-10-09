import React from "react";
import woowacourseLogo from "@images/woowacourse_logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 우아한테크코스 All Rights Reserved.</p>
      <p>
        <img src={woowacourseLogo} width="180" alt="우아한테크코스 로고" />
      </p>
    </footer>
  );
};

export default Footer;
