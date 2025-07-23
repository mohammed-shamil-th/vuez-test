
export default function CategoriesComponent() {

    const mainCategories = [
        "Artificial Intelligence & Robotics",
        "Artificial Intelligence & Robotics",
    ];

    const subCategories = [
        "Edge Computing",
        "Cloud Computing",
        "Cognitive Computing",
    ];

    return (
        <div className="mb-6">
            {/* Main Categories Section */}
            <div className="mb-4">
                <h2 className="text-m font-semi-bold mb-4">Main Categories</h2>
                <div className="flex flex-wrap gap-3">
                    {mainCategories.map((category) => (
                        <button
                            key={category}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 text-white"
                            style={{ background: '#5E3169' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Sub Categories Section */}
            <div>
                <h2 className="text-m font-semi-bold mb-4">Sub Categories</h2>
                <div className="flex flex-wrap gap-3">
                    {subCategories.map((category) => (
                        <button
                            key={category}
                            className="px-4 py-2 rounded-full text-sm font-medium border text-gray-700
                                bg-gray-600 border-gray-700"
                            style={{ background: '#F5F5F5' }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}