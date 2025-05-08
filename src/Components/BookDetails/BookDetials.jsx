import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utility/AddToLoacalDB";

export default function BookDetails() {
  const { bookId } = useParams();
  const data = useLoaderData();

  const book = data.find((book) => book.bookId == bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handelAddtoReadList = (id)=>{
    addToStoredReadList(id);
  }
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 font-worksans text-gray-800">
      {/* Book Image */}
      <div className="bg-gray-100 rounded-xl flex justify-center items-center p-10">
        <img src={image} alt={bookName} className="h-80 object-contain" />
      </div>

      {/* Book Info */}
      <div>
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
          {bookName}
        </h2>
        <p className="text-sm text-gray-600 mb-1 font-semibold">
          By : {author}
        </p>
        <p className="text-gray-700 mb-4 font-semibold">{category}</p>

        <hr className="border-t border-dashed border-gray-300 mb-4" />

        <p className="text-sm leading-relaxed">
          <span className="font-semibold">Review :</span> {review}
        </p>

        {/* Tags */}
        <div className="mt-4">
          <span className="font-semibold">Tag:</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-green-600 text-white px-2 py-1 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <hr className="border-t border-dashed border-gray-300 my-4" />

        {/* Details */}
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Number of Pages:</span>{" "}
            {totalPages}
          </p>
          <p>
            <span className="font-semibold">Publisher:</span>{" "}
            <span className="font-bold">{publisher}</span>
          </p>
          <p>
            <span className="font-semibold">Year of Publishing:</span>{" "}
            {yearOfPublishing}
          </p>
          <p>
            <span className="font-semibold">Rating:</span>{" "}
            {parseFloat(rating).toFixed(1)}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button onClick={()=>handelAddtoReadList(bookId)} className="px-6 py-2 border border-gray-600 text-gray-700 rounded-md hover:bg-gray-100 transition-all duration-200">
            Mark As Read
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-200">
           Add To Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
