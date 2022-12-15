import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-start-1 col-end-3 bg-red-300">
        <div className="my-10">
          <div className="flex justify-center mb-10 bg-white">
            <h1 className="font-bold text-3xl my-4">Admin</h1>
          </div>
          <div className="flex flex-col gap-2">
            <button
              className="hover:bg-white"
              onClick={() => navigate("/home")}
            >
              <h1 className="font-bold">Daftar Item</h1>
            </button>
            <button className="hover:bg-white" onClick={() => navigate("/add")}>
              <h1 className="font-bold">Tambah Item</h1>
            </button>
            <button className="hover:bg-white">
              <h1 className="font-bold">Tambah Kategori</h1>
            </button>
            <button
              className="hover:bg-white"
              onClick={() => navigate("/histories")}
            >
              <h1 className="font-bold">Riwayat</h1>
            </button>
            <button className="hover:bg-white">
              <h1 className="font-bold">Tambah Admin</h1>
            </button>
            <button className="hover:bg-white" onClick={() => navigate("/")}>
              <h1 className="font-bold">Keluar</h1>
            </button>
          </div>
        </div>
      </div>
      <div className="col-start-3 col-end-13">
        <div className="h-full p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
