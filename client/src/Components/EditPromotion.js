import {useState} from "react"
import { doc, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from '../firebaseConfig';

const EditPromotion = ({isOpen, onClose, promoToEdit}) => {

    const id = promoToEdit.id;

    const [name, setName] = useState(promoToEdit.name)
    const [ein, setEIN] = useState(promoToEdit.ein)
    const [percent, setPercent] = useState(promoToEdit.percent)
    const [expiration, setExpiration] = useState(promoToEdit.expiration)
    const [validMovie, setValidMovie] = useState(promoToEdit.validMovie)

    const handleUpdate = async (event) => {
        event.preventDefault();
        
        // New promotion object with updated fields
        const updatedPromo = {
            id,
            name,
            ein,
            percent,
            expiration,
            validMovie
        }


        // Update the document in Firestore
        await updateDoc(doc(db, "promotions", id), updatedPromo);
        onClose()
    };

    // Function to handle promotion deletion
    const handleDelete = async () => {
        // Delete the document in Firestore
        await deleteDoc(doc(db, "promotions", id));
        onClose();
    };




    if (!isOpen || !promoToEdit) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center" onClick={onClose}>
        <div className="relative top-8 bottom-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              id="username"
              type="text"
              value={name}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">ID:</label>
            <input
              id="phone"
              type="text"
              value={ein}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setEIN(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Percent Off:</label>
            <input
              id="email"
              type="text"
              value={percent}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setPercent(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Valid Movie:</label>
            <input
              id="status"
              type="text"
              value={validMovie}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setValidMovie(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="susStatus" className="block text-sm font-medium text-gray-700">Expiration Date:</label>
            <input
              id="susStatus"
              type="text"
              value={expiration}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setExpiration(e.target.value)}
            />
          </div>
          <div className="flex flex-row mt-10 space-x-4 justify-center">
                <button
                  onClick={handleDelete}
                  className="px-20 py-2 text-sm font-semibold text-white bg-red-500 border rounded-md hover:bg-red-400"
                >
                Delete Promotion
                </button>
                <button 
                  className="px-20 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                >
                Update Promotion
                </button>
            </div>
        </form>
      </div>
    </div>
    );
}

export default EditPromotion
