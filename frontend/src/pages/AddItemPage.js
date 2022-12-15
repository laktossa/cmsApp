export default function AddItemPage() {
  return (
    <div className="w-full justify-center flex flex-col">
      <div className="w-full grid grid-rows-6 justify-center">
        <div className="row-start-1 row-end-2 ">
          <div className="flex justify-center h-full items-center">
            <h1 className="font-bold text-3xl text-center">Tambah Item</h1>
          </div>
        </div>
        <div className="row-start-3 row-end-7 ">
          <form
            action=""
            className="flex flex-col gap-5 justify-center w-full border-2 border-black rounded-xl p-16 "
          >
            <input
              type="text"
              placeholder="Nama"
              className="border border-black px-2 rounded-xl"
            />
            <input
              type="text"
              placeholder="Kategori"
              className="border border-black px-2 rounded-xl"
            />
            <input
              type="text"
              placeholder="Harga"
              className="border border-black px-2 rounded-xl"
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              className="border border-black p-2 rounded-xl"
            />
            <div className="w-full flex justify-center mt-2">
              <button className="bg-blue-300 hover:bg-blue-500 px-10 rounded-xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
