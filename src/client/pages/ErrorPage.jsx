import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function ErrorPage() {
  return (
    <>
      <main>
        <h2>요청하신 영화 페이지를 찾을 수 없습니다.</h2>
        <Link to="/">
          <button type="button" className="primary">
            메인 화면으로 돌아가기
          </button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
