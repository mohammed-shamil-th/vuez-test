import { useEffect, useState } from "react";
import PopupHeader from "./PopupHeader";
import PopupFooter from "./PopupFooter";

export default function SolutionsProductsPopup({ currentTicket, isOpen, setIsOpen, selectedOptions, setSelectedOptions, formik }) {
  const [searchText, setSearchText] = useState("");
  const [isMain, setIsMain] = useState(true);
  const [categories, setCategories] = useState({
    mainCategories: [],
    subCategories: []
  });

  const handleMainCategories = (id, checked) => {
    const existingCategories = formik.values.mainCategories || [];
    if (existingCategories?.length >= 2 && checked) {
      alert('You can select a maximum of 2 main categories.');
      return;
    }
    const newCategories = checked
      ? [...existingCategories, id]
      : existingCategories.filter((w) => w !== id);
    formik.setFieldValue('mainCategories', newCategories);
  };

  const handleSubCategories = (id, checked) => {
    const existingCategories = formik.values.subCategories || [];
    if (existingCategories?.length >= 5 && checked) {
      alert('You can select a maximum of 5 sub categories.');
      return;
    }
    const newCategories = checked
      ? [...existingCategories, id]
      : existingCategories.filter((w) => w !== id);
    formik.setFieldValue('subCategories', newCategories);
  };

  const handleApply = () => {
    if (formik.values.mainCategories.length === 0) {
      alert("Please select at least one option.");
      return;
    }
    if (isMain) {
      setIsMain(!isMain)
      return;
    }
    if (formik.values.subCategories.length > 5) {
      alert("You can only select a maximum of 5 options.");
      return;
    }
    setIsOpen(false);
    setIsMain(true);
  };

  const handleCancel = () => {
    if (isMain) {
      setIsOpen(false);
    };
    setIsMain((prev) => !prev);
    formik.setFieldValue('mainCategories', categories.mainCategories);
    formik.setFieldValue('subCategories', categories.subCategories);
    setSearchText('');
    setCategories({
      mainCategories: [],
      subCategories: []
    });
  };

  useEffect(() => {
    setCategories({
      mainCategories: formik?.values?.mainCategories || [],
      subCategories: formik?.values?.subCategories || []
    })
  }, [isOpen])

  return (
    <div className="font-poppins fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <PopupHeader handleCancel={handleCancel} />

        <div className="p-6">

          <div className="mb-6">
            <input
              type="text"
              placeholder="Try Product/Service"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <p className="text-gray-700 text-sm">
              I Am Interested In Sourcing The Following Solutions/Products? (Select Top 5) * Please Ensure You Have Chosen At Least One Category In Each Section
            </p>
          </div>

          {isMain ? <div className="max-h-72 overflow-y-auto">
            {currentTicket?.mainCategory
              ?.filter(option =>
                option.name.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={formik.values.mainCategories.includes(option.id)}
                    onChange={(e) => handleMainCategories(option?.id, e.target.checked)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700 text-sm flex-1">
                    {option.name}
                  </span>
                </label>
              ))}
          </div> :
            <div className="grid grid-cols-2 gap-x-6 max-h-72 overflow-y-auto">
              {currentTicket?.subCategory
                ?.filter(option =>
                  option.name.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                  >
                    <input
                      type="checkbox"
                      checked={formik.values.subCategories.includes(option.id)}
                      onChange={(e) => handleSubCategories(option?.id, e.target.checked)}
                      className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <span className="text-gray-700 text-sm flex-1">
                      {option.name}
                    </span>
                  </label>
                ))}
            </div>
          }
        </div>

        {/* Footer */}
        <PopupFooter handleCancel={handleCancel} handleApply={handleApply} />

      </div>
    </div>
  );
}