import {useState} from "react"

function EditPrices({isOpen, onClose, prices}) {

    const [child, setChild] = useState(prices.child)
    const [adult, setAdult] = useState(prices.adult)
    const [senior, setSenior] = useState(prices.senior)
    const [feePercent, setFeePercent] = useState(prices.bookingFeePercent)

    const handleSubmit = (event) => {
        event.preventDefault();
        //Add movie info update function
        onClose()
    }


    if (!isOpen || !prices) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-y-auto h-full w-full flex justify-center items-center" onClick={onClose}>
        <div className="relative top-52 bottom-20 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Child Ticket:</label>
            <input
              id="username"
              type="text"
              value={child}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setChild(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Adult Ticket:</label>
            <input
              id="phone"
              type="text"
              value={adult}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setAdult(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Senior Ticket:</label>
            <input
              id="email"
              type="text"
              value={senior}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setSenior(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Booking Fee Percent</label>
            <input
              id="status"
              type="text"
              value={feePercent}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => setFeePercent(e.target.value)}
            />
          </div>
          <div className="flex flex-row mt-10 space-x-4 justify-center">
                <button 
                  className="px-20 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
                >
                Update Prices
                </button>
            </div>
        </form>
      </div>
    </div>
    );
}

export default EditPrices
