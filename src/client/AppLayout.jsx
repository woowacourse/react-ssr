import { Outlet, useLocation } from "react-router-dom";

function AppLayout() {
  const location = useLocation();
  const background = location.state?.background; // 현재 위치를 백그라운드로 사용

  return (
    <>
      {/* 모달이 아닌 경우 기본 페이지 렌더링 */}
      <Outlet />
      {/* 모달이 떠야 하는 상황일 때, 백그라운드를 유지하고 모달 띄움 */}
      {background && <Outlet />}
    </>
  );
}

export default AppLayout;
