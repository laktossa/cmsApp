import Card from "../components/Card";

export default function HomePage() {
  return (
    <>
      <div className="w-full justify-center flex flex-col">
        <div className="w-full grid grid-rows-6 justify-center">
          <div className="row-start-1 row-end-2 ">
            <div className="flex justify-center h-full items-center">
              <h1 className="font-bold text-3xl text-center">List Item</h1>
            </div>
          </div>
          <div className="row-start-2 row-end-7">
            <div className="grid grid-cols-4 gap-4 ">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <h1> 1 </h1>
        </div>
      </div>
    </>
  );
}
