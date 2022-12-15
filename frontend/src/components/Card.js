export default function Card() {
  return (
    <div className="h-80 border-2 rounded-xl w-80 p-2">
      <div className="h-[60%] rounded-t-xl flex justify-center items-center">
        <img
          src="https://nos.jkt-1.neo.id/mcdonalds/foods/September2022/g5jrtY6DiQip0sacG8j3.png"
          alt="Item"
          className="hover:scale-110 h-40"
        />
      </div>
      <div className="h-[35%] rounded-b-xl">
        <div className="mx-5">
          <h1>BigMac</h1>
          <h1>Rp.40.000 </h1>
          <h1>Burger</h1>
        </div>
        <div className="flex justify-around mx-5 mt-2">
          <button className="bg-blue-300 hover:bg-blue-500 w-[45%] rounded-xl">
            Edit
          </button>
          <button className="bg-red-300 hover:bg-red-500 w-[45%] rounded-xl">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
