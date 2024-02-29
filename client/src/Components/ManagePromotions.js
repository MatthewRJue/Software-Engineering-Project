import React, { useState } from "react";
import EditPromotion from "./EditPromotion";
import AddPromotion from "./AddPromotion";

export default function ManagePromotions({promoList, status}) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState(null); // Step 2
  const [addPromotionOpen, setAddPromotionOpen] = useState(false)
  const promoIcon = "https://static.vecteezy.com/system/resources/thumbnails/027/381/485/small_2x/discount-icon-percentage-icon-shopping-tags-outline-black-discount-label-pricing-tag-retail-related-badges-special-offer-symbol-sale-sign-business-and-finance-design-elements-vector.jpg"
  
  const handleOpenAddPromo = () => {
    setAddPromotionOpen(true)
  }

  const handleCloseAddPromo = () => {
    setAddPromotionOpen(false)
  }

  const handleOpenEdit = (promo) => { // Updated to include movie parameter
    setSelectedPromotion(promo)
    setIsEditOpen(true)
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false)
    setSelectedPromotion(null) // Reset selected movie on close
  };

  return (
    <div>
        <div>
            <button onClick={handleOpenAddPromo} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                Add Promotion
            </button>
        </div>
      <ul className="divide-y divide-gray-100 p-20">
        {promoList.map((promo) => (
          <li key={promo.id} className="flex justify-between gap-x-6 py-5 bg-white shadow-lg rounded-xl p-8 space-y-8 mb-6">
            <div className="flex min-w-0 gap-x-4">
              <img className="w-40 flex-none bg-gray-50" src={promoIcon} alt="" />
              <div className="min-w-0 flex-auto">
                <p className="text-3xl font-semibold leading-6 text-gray-900">{promo.name}</p>
                <p className="mt-4 truncate text-sm leading-5 text-gray-500">Valid For: {promo.validMovie}</p>
                <p className="mt-2 truncate text-sm leading-5 text-gray-500">{promo.percent}% Off</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">Expires: {promo.expiration}</p>
              <p className="text-sm leading-6 text-gray-900">ID: {promo.id}</p>
            </div>
            <div className="mt-4 space-x-4">
              <button  onClick={() => handleOpenEdit(promo)} className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
                Edit Promotion
              </button>
            </div>
          </li>
        ))}
      </ul>
    {selectedPromotion && <EditPromotion isOpen={isEditOpen} onClose={handleCloseEdit} promoToEdit={selectedPromotion}/>}
    <AddPromotion onClose={handleCloseAddPromo} isOpen={addPromotionOpen}/>
    </div>
  );
}
