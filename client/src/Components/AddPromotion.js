import {useState} from "react"
import { doc, collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';

function AddPromotion({isOpen, onClose}) {

    const [name, setName] = useState("");
    const [ein, setEIN] = useState("")
    const [percent, setPercent] = useState("")
    const [expiration, setExpiration] = useState("")
    const [validMovie, setValidMovie] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Add a new document with a generated id.
        try {
        await addDoc(collection(db, "promotions"), { ...newPromotion });
        } catch (error) {
          console.log(error + "Error adding document");
        }
        onClose()
    }

   
    if (!isOpen) return null;
   
    const newPromotion = {
        id:doc.id,
        name,
        ein,
        percent,
        expiration,
        validMovie
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center" onClick={onClose}>
        <div className="relative top-8 bottom-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="moviename" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              id="moviename"
              type="text"
              value={name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="genre" className="block text-sm font-medium text-gray-700">ID:</label>
            <input
              id="attribute2"
              type="text"
              value={ein}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setEIN(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Percent Off:</label>
            <input
              id="rating"
              type="text"
              value={percent}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setPercent(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Expiration Date:</label>
            <input
              id="rating"
              type="text"
              value={expiration}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setExpiration(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Valid Movie:</label>
            <input
              id="rating"
              type="text"
              value={validMovie}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setValidMovie(e.target.value)}
            />
          </div>
          
          <div className="flex flex-row mt-10 space-x-4 justify-center">
                <button 
                  className="px-20 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                >
                Add Promotion
                </button>
            </div>
        </form>
      </div>
    </div>
    );
}

export default AddPromotion
