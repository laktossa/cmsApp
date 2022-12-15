export default function HistoriesPage() {
  return (
    <div className="h-full w-full flex flex-col items-center gap-8">
      <div>
        <h1 className="font-bold text-3xl">Riwayat</h1>
      </div>
      <div className="w-full flex justify-center">
        <table className="w-[50%] border-2 border-black">
          <thead className="border-2 border-black">
            <tr>
              <th className="text-left">No</th>
              <th className="text-left">Detail</th>
              <th className="text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Menambahkan Item</td>
              <td>admin@gmail.com</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mengubah Item</td>
              <td>admin@gmail.com</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Menambahkan Item</td>
              <td>admin@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
