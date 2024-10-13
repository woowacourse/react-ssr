import React from "react";

import woowacourseLogoImage from "@images/woowacourse_logo.png";

const Footer = () => {
  return (
    <footer class="footer">
      <p>&copy; 우아한테크코스 All Rights Reserved.</p>
      <p>
        <img src={woowacourseLogoImage} width="180" />
      </p>
    </footer>
  );
};

export default Footer;
