
export default function CategoriesComponent({ ticket, values }) {

    const mainCategories = ticket?.mainCategory?.filter(category => values.mainCategories.includes(category.id)) || [];

    const subCategories = ticket?.subCategory?.filter(category => values.subCategories.includes(category.id)) || [];

    return (
        <div className="mb-6">
            {/* Main Categories Section */}
            <div className="mb-4">
                <h2 className="text-m font-semi-bold mb-4">Main Categories</h2>
                <div className="flex flex-wrap gap-3">
                    {mainCategories.map((category) => (
                        <button
                            type="button"
                            key={category?.id}
                            className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 text-white"
                            style={{ background: '#5E3169' }}
                        >
                            {category?.name}
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
                            type="button"
                            key={category?.id}
                            className="px-4 py-2 rounded-full text-sm font-medium border text-gray-700
                                bg-gray-600 border-gray-700"
                            style={{ background: '#F5F5F5' }}
                        >
                            {category?.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}