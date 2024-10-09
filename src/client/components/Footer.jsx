import React from "react";

import logoImage from "@images/woowacourse_logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 우아한테크코스 All Rights Reserved.</p>
      <p>
        <img src={logoImage} width="180" />
      </p>
    </footer>
  );
}
