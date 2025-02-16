export default function Cines() {
  return (
    <div className="mt-20">
      Cines
      <div className="flex">
        {/* Logo  */}
        <div className="m-2">
          <img className="rounded-2xl" src="https://picsum.photos/200" alt="" />
        </div>
        {/* Thông tin */}
        <div className="flex">
          <div className="w-[50px] h-[50px]">
            <img
              className="rounded-full"
              src="https://picsum.photos/200"
              alt=""
            />
          </div>
          <div className="mx-2">
            <p>Rạp phim</p>
          </div>
        </div>
      </div>
    </div>
  );
}
