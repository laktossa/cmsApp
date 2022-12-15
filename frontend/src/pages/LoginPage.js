import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center border h-full">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-center">Please Login First</h1>
          </div>
          <div className="flex flex-col gap-4">
            <form action="" className="flex flex-col gap-2">
              <label htmlFor="" className="flex flex-col">
                Email
                <input type="email" className="border rounded-xl" />
              </label>
              <label htmlFor="" className="flex flex-col">
                Password
                <input type="password" className="border rounded-xl" />
              </label>
            </form>
            <div className="flex justify-center">
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
