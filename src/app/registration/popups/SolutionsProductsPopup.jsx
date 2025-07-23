import { useEffect, useState } from "react";
import PopupHeader from "./PopupHeader";
import PopupFooter from "./PopupFooter";

export default function SolutionsProductsPopup({ isOpen, setIsApplied, setIsOpen, selectedOptions, setSelectedOptions }) {
  const [searchText, setSearchText] = useState("");
  const [isMain, setIsMain] = useState(true);

  const options = [
    { id: "global-leaders", label: "Global Leaders Forum !NEW (3 Days)", isNew: true },
    { id: "gitex-main", label: "GITEX Main Stage" },
    { id: "ai-robotics", label: "Artificial Intelligence & Robotics (15)", count: 15 },
    { id: "future-health-1", label: "Future Health !NEW (2 Days)", isNew: true },
    { id: "cybersecurity", label: "Cybersecurity (4 Days)", count: 4 },
    { id: "future-health-2", label: "Future Health !NEW (2 Days)", isNew: true },
    { id: "ai-everything", label: "AI Everything (4 Days)", count: 4 },
    { id: "future-health-3", label: "Future Health !NEW (2 Days)", isNew: true }
  ];

  const subOptions = [
    { id: "global-leaders", label: "Global Leaders Forum !NEW (3 Days)", isNew: true },
    { id: "gitex-main", label: "GITEX Main Stage" },
    { id: "ai-robotics", label: "Artificial Intelligence & Robotics (15)", count: 15 },
    { id: "future-health-1", label: "Future Health !NEW (2 Days)", isNew: true },
    { id: "cybersecurity", label: "Cybersecurity (4 Days)", count: 4 },
    { id: "future-health-2", label: "Future Health !NEW (2 Days)", isNew: true },
    { id: "ai-everything", label: "AI Everything (4 Days)", count: 4 },
    { id: "future-health-3", label: "Future Health !NEW (2 Days)", isNew: true },
    { id: "digital-cities", label: "Digital Cities (1 Day)", count: 1 },
    { id: "edtech", label: "Edtech (1 Day)", count: 1 },
    { id: "energy-transition", label: "Energy Transition (1 Day)", count: 1 },
    { id: "intelligent-connectivity", label: "Intelligent Connectivity (1 Day)", count: 1 },
    { id: "digital-finance", label: "Digital Finance (1 Day)", count: 1 },
    { id: "future-mobility", label: "Future Mobility (1 Day)", count: 1 },
  ]

  const handleCheckboxChange = (option, checked) => {
    if (isMain) {
      setIsMain(false);
      return setSelectedOptions([]);
    }
    if (checked) {
      setSelectedOptions((prev) => [...prev, option]);
    } else {
      setSelectedOptions((prev) =>
        prev.filter((selected) => selected.id !== option.id)
      );
    }
  };

  const handleApply = () => {
    if (selectedOptions.length === 0) {
      alert("Please select at least one option.");
      return;
    }
    if (selectedOptions.length > 5) {
      alert("You can only select a maximum of 5 options.");
      return;
    }
    setIsOpen(false);
    setIsMain(true);
    setIsApplied(true);
  };

  const handleCancel = () => {
    if (isMain) {
      setIsOpen(false);
    };
    setIsMain((prev) => !prev);
    setSelectedOptions([]);
  };

  function isChecked(option) {
    return selectedOptions.some(selected => selected?.id === option?.id);
  }

  useEffect(() => {
    setSelectedOptions([]);
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
            {options.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
              >
                <input
                  type="checkbox"
                  checked={isChecked(option)}
                  onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <span className="text-gray-700 text-sm flex-1">
                  {option.label}
                  {option.count && (
                    <span className="text-gray-500"> ({option.count})</span>
                  )}
                </span>
              </label>
            ))}
          </div> :
            <div className="grid grid-cols-2 gap-x-6 max-h-72 overflow-y-auto">
              {subOptions.map((option) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={isChecked(option)}
                    onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                  <span className="text-gray-700 text-sm flex-1">
                    {option.label}
                    {option.count && (
                      <span className="text-gray-500"> ({option.count})</span>
                    )}
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