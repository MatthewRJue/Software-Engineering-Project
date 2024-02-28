import {useState} from "react"

function EditMovie({isOpen, onClose, movieToEdit}) {

    const [name, setName] = useState(movieToEdit.name);
    const [genre, setGenre] = useState(movieToEdit.genre);
    const [rating, setRating] = useState(movieToEdit.rating);
    const [imageURL, setImageURL] = useState(movieToEdit.imageURL);
    const [runtime, setRuntime] = useState(movieToEdit.runtime);
    const [review, setReview] = useState(movieToEdit.review);
    const [director, setDirector] = useState(movieToEdit.director);
    const [producer, setProducer] = useState(movieToEdit.producer);
    const [cast, setCast] = useState(movieToEdit.cast);
    const [category, setCategory] = useState(movieToEdit.category);
    const [embedID, setEmbedID] = useState(movieToEdit.embedID);
    const [synopsis, setSynopsis] = useState(movieToEdit.synopsis);


    const handleSubmit = (event) => {
        event.preventDefault();
        //Add movie info update function
        onClose()
    }


    if (!isOpen || !movieToEdit) return null;

   

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" onClick={onClose}>
        <div className="relative top-20 bottom-20 mx-auto p-5 border max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="moviename">Title:</label>
            <input
              id="moviename"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="genre">Genre:</label>
            <input
              id="attribute2"
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rating">Rating:</label>
            <input
              id="rating"
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="url">Image URL:</label>
            <input
              id="url"
              type="text"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="runtime">Runtime:</label>
            <input
              id="review"
              type="text"
              value={runtime}
              onChange={(e) => setRuntime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <input
              id="review"
              type="text"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="director">Director:</label>
            <input
              id="director"
              type="text"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="producer">Producer:</label>
            <input
              id="producer"
              type="text"
              value={producer}
              onChange={(e) => setProducer(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cast">Cast:</label>
            <input
              id="cast"
              type="text"
              value={cast}
              onChange={(e) => setCast(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="category">Category:</label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="embedID">Trailer ID:</label>
            <input
              id="embedID"
              type="text"
              value={embedID}
              onChange={(e) => setEmbedID(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="synopsis">Synopsis:</label>
            <input
              id="synopsis"
              type="text"
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
            />
          </div>
    
          <button type="submit">Update Card</button>
        </form>
        </div>
        </div>
      );
    };

export default EditMovie



