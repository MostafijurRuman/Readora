import HeroBook from'../../assets/herobook.png'
export default function Hero() {
  return (
    <div className="hero bg-base-200  py-20 rounded-3xl">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={HeroBook}
      className="w-[318px] h-[394px]"
    />
    <div>
      <h1 className="text-[56px] font-playfair font-bold mb-12 mr-20">Books to freshen up <br /> your bookshelf</h1>
      <button className="btn  text-white text-[18px] rounded-[8px] bg-main px-6 py-6">View The List</button>
    </div>
  </div>
</div>
  )
}
