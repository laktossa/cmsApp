import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center h-full -mt-24">
        <div className="flex flex-col gap-8 border p-20 bg-red-300 rounded-xl">
          <div>
            <h1 className="text-center font-bold text-3xl">Masuk</h1>
          </div>
          <div className="flex flex-col gap-4">
            <form action="" className="flex flex-col gap-2">
              <label htmlFor="" className="flex flex-col">
                Email
                <input type="email" className="border rounded-xl px-3 py-1" />
              </label>
              <label htmlFor="" className="flex flex-col">
                Password
                <input
                  type="password"
                  className="border rounded-xl px-3 py-1"
                />
              </label>
            </form>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => navigate("/home")}
                className=" hover:bg-blue-600 hover:animate-pulse bg-blue-400 rounded-xl w-32"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
