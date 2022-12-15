export default function Card() {
  return (
    <div className="h-80 border-2 rounded-xl w-80 p-2">
      <div className="h-[60%] rounded-t-xl">
        <img
          src="https://nos.jkt-1.neo.id/mcdonalds/foods/August2019/AryU9XqfAtd0qRGb5zmi.png"
          alt="Item"
        />
      </div>
      <div className="h-[35%] rounded-b-xl">
        <div className="mx-5">
          <h1>Pancake</h1>
          <h1>Rp.20.000 </h1>
          <h1>Pancake</h1>
        </div>
        <div className="flex justify-around mx-5 mt-2">
          <button className="bg-blue-300 w-[45%] rounded-xl">Edit</button>
          <button className="bg-red-300 w-[45%] rounded-xl">Delete</button>
        </div>
      </div>
    </div>
  );
}
