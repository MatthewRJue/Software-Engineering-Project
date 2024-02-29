import {useState} from "react"

function EditUser({isOpen, onClose, userToEdit}) {

    const [name, setName] = useState(userToEdit.name);
    const [email, setEmail] = useState(userToEdit.email);
    const [phone, setPhone] = useState(userToEdit.phone);
    const [status, setStatus] = useState(userToEdit.status);
    const [suspensionStatus, setSuspensionStatus] = useState(userToEdit.suspensionStatus);

    const handleSubmit = (event) => {
        event.preventDefault();
        //Add movie info update function
        onClose()
    }


    if (!isOpen || !userToEdit) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center" onClick={onClose}>
        <div className="relative top-8 bottom-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              id="email"
              type="text"
              value={email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              id="phone"
              type="text"
              value={phone}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status:</label>
            <input
              id="status"
              type="text"
              value={status}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="susStatus" className="block text-sm font-medium text-gray-700">SuspensionStatus:</label>
            <input
              id="susStatus"
              type="text"
              value={suspensionStatus}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setSuspensionStatus(e.target.value)}
            />
          </div>
          <div className="flex flex-row mt-10 space-x-4 justify-center">
                <button 
                  className="px-20 py-2 text-sm font-semibold text-white bg-red-500 border rounded-md hover:bg-red-400"
                >
                Delete User
                </button>
                <button 
                  className="px-20 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                >
                Update User
                </button>
            </div>
        </form>
      </div>
    </div>
    );
}

export default EditUser
