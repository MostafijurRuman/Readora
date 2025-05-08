import { FaUser, FaRegFileAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BooksList({ book }) {
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
    bookId,
  } = book;

  return (
    <div className="w-full border rounded-xl p-4 md:p-6 flex gap-6 items-center bg-white shadow-sm  border-[#13131326]">
      {/* Book Image */}
      <div className="w-[120px] h-[160px] flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center p-2">
        <img src={image} alt={bookName} className="object-contain h-full" />
      </div>

      {/* Book Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold font-playfair text-gray-900 mb-1">
            {bookName}
          </h2>
          <p className="text-sm text-gray-600 font-medium font-worksans mb-2">
            By : {author}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-sm font-semibold font-worksans">Tag</span>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-green-100 text-green-700 font-medium px-2 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Year, Publisher, Pages */}
          <div className="flex flex-wrap items-center text-sm text-gray-700 gap-x-6 gap-y-2 mb-4 font-worksans">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-gray-500" />
              Year of Publishing: {yearOfPublishing}
            </div>
            <div className="flex items-center gap-1">
              <FaUser className="text-gray-500" />
              Publisher: {publisher}
            </div>
            <div className="flex items-center gap-1">
              <FaRegFileAlt className="text-gray-500" />
              Page {totalPages}
            </div>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <span className="text-xs font-medium font-worksans bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            Category: {category}
          </span>
          <span className="text-xs font-medium font-worksans bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            Rating: {parseFloat(rating).toFixed(1)}
          </span>
          <Link
            to={`/books/${bookId}`}
            className="bg-green-600 hover:bg-green-700 transition text-white text-sm px-4 py-2 rounded-full font-medium font-worksans"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

