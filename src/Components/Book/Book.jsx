import { Link } from "react-router-dom";

export default function Book({ book }) {
    const { bookName, author, image, rating, category, tags ,bookId} = book;
  
    return (
      <Link to={}>
        <div className="max-w-sm p-6 bg-white rounded-2xl shadow-sm border border-[#13131326]">
        {/* Book Image */}
        <div className="flex justify-center items-center bg-gray-100 rounded-lg h-56">
          <img src={image} alt={bookName} className="h-40 object-contain" />
        </div>
  
        {/* Tags */}
        <div className="flex gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-main text-[16px] font-worksans  font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
  
        {/* Book Title */}
        <h3 className="mt-3 text-[24px] font-playfair  font-bold text-gray-900">
          {bookName}
        </h3>
  
        {/* Author */}
        <p className="text-gray-600 text-[16px] font-medium mb-1 font-worksans">
          By : {author}
        </p>
  
        {/* Category and Rating */}
        <div className="flex justify-between items-center mt-2 border-t border-dashed border-gray-300 pt-2 text-[#131313CC] text-sm font-worksans text-[16px] font-medium">
          <span>{category}</span>
          <span className="flex items-center gap-1">
            {rating}
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.911c.969 0 1.371 1.24.588 1.81l-3.976 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.976-2.89a1 1 0 00-1.175 0l-3.976 2.89c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.976-2.89c-.783-.57-.38-1.81.588-1.81h4.911a1 1 0 00.95-.69l1.518-4.674z"
              />
            </svg>
          </span>
        </div>
      </div>
      </Link>
    );
  }
  