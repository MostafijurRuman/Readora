import booklogo from'../../assets/book.ico'
export default function Footer() {
  return (
    <div className='bg-base-200'>
        <footer className="footer sm:footer-horizontal  text-base-content p-10 max-w-screen-4xl mx-auto px-6 md:px-16 lg:px-28">
      <aside>
      
      <img src={booklogo} alt="" />
      <p className=" text-[28px]  font-bold">
        Readora
      </p>
      <p>
      Your gateway to endless stories
      </p>
      </aside>
      <nav>
      <h6 className="footer-title">Explore</h6>
      <a className="link link-hover">Genres</a>
      <a className="link link-hover">New Releases</a>
      <a className="link link-hover">Top Picks</a>
      <a className="link link-hover">Authors</a>
      </nav>
      <nav>
      <h6 className="footer-title">About</h6>
      <a className="link link-hover">Our Story</a>
      <a className="link link-hover">Team</a>
      <a className="link link-hover">Careers</a>
      <a className="link link-hover">Contact Us</a>
      </nav>
      <nav>
      <h6 className="footer-title">Support</h6>
      <a className="link link-hover">Help Center</a>
      <a className="link link-hover">Terms of Service</a>
      <a className="link link-hover">Privacy Policy</a>
      <a className="link link-hover">Community Guidelines</a>
      </nav>
    </footer>
    </div>
    );
}
