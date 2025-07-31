import ProductCardFooter from './ProductCardFooter'
import CardChips from './CardChips'


export default function ProductCardContent({ index, product }) {
    return (
        <div className="h-full backdrop-blur-[5.9px] bg-[rgba(0,0,0,0.80)] flex flex-col px-8 py-4 rounded-b-3xl">

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-2 py-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent" style={{ scrollbarWidth: "none" }}>
                <div className="text-[1rem] leading-[1.5] text-white">
                    Visitor Passes provide{" "}
                    <span className="font-semibold text-[#26FF51]">
                        3 days access
                    </span>{" "}
                    to GITEX NIGERIA exhibition and all free conference
                </div>

                {index === 0 ? (
                    <img
                        src="./cards/brands/gitex.png"
                        alt="brand"
                        className="w-[170px]"
                    />
                ) : (
                    <CardChips product={product} />
                )}
            </div>
            <ProductCardFooter product={product} />
        </div>
    );
}
