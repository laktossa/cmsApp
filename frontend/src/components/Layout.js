import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-start-1 col-end-3 border">
        <h1>Side bar</h1>
      </div>
      <div className="col-start-3 col-end-13">
        <Outlet />
      </div>
    </div>
  );
}
