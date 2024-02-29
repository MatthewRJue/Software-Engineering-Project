import {useState} from "react"

function EditMovie({isOpen, onClose, movieToEdit}) {

    const [name, setName] = useState(movieToEdit.name);
    const [genre, setGenre] = useState(movieToEdit.genre);
    const [rating, setRating] = useState(movieToEdit.rating);
    const [imageURL, setImageURL] = useState(movieToEdit.imageUrl);
    const [runtime, setRuntime] = useState(movieToEdit.runtime);
    const [review, setReview] = useState(movieToEdit.review);
    const [director, setDirector] = useState(movieToEdit.director);
    const [producer, setProducer] = useState(movieToEdit.producer);
    const [cast, setCast] = useState(movieToEdit.cast);
    const [category, setCategory] = useState(movieToEdit.category);
    const [embedID, setEmbedID] = useState(movieToEdit.embedId);
    const [synopsis, setSynopsis] = useState(movieToEdit.synopsis);


    const handleSubmit = (event) => {
        event.preventDefault();
        //Add movie info update function
        onClose()
    }


    if (!isOpen || !movieToEdit) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center" onClick={onClose}>
        <div className="relative top-52 bottom-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="moviename" className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              id="moviename"
              type="text"
              value={name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">Genre:</label>
            <input
              id="attribute2"
              type="text"
              value={genre}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating:</label>
            <input
              id="rating"
              type="text"
              value={rating}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">Image URL:</label>
            <input
              id="url"
              type="text"
              value={imageURL}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="runtime" className="block text-sm font-medium text-gray-700">Runtime:</label>
            <input
              id="runtime"
              type="text"
              value={runtime}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setRuntime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review:</label>
            <input
              id="review"
              type="text"
              value={review}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="director" className="block text-sm font-medium text-gray-700">Director:</label>
            <input
              id="director"
              type="text"
              value={director}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="producer" className="block text-sm font-medium text-gray-700">Producer:</label>
            <input
              id="producer"
              type="text"
              value={producer}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setProducer(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cast" className="block text-sm font-medium text-gray-700">Cast:</label>
            <input
              id="cast"
              type="text"
              value={cast}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setCast(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
            <input
              id="category"
              type="text"
              value={category}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="embedID" className="block text-sm font-medium text-gray-700">Embed ID:</label>
            <input
              id="embedID"
              type="text"
              value={embedID}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setEmbedID(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="synopsis" className="block text-sm font-medium text-gray-700">Synopsis:</label>
            <textarea
              id="synopsis"
              value={synopsis}
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setSynopsis(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-row mt-10 space-x-4 justify-center">
                <button 
                  className="px-20 py-2 text-sm font-semibold text-white bg-red-500 border rounded-md hover:bg-red-400"
                >
                Delete Movie
                </button>
                <button 
                  className="px-20 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                >
                Update Movie
                </button>
            </div>
        </form>
      </div>
    </div>
    );
}

export default EditMovie;
