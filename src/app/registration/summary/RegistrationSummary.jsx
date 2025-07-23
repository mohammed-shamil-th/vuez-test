import { useState } from "react";

export default function RegistrationSummary() {
    const [promoCode, setPromoCode] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [marketingConsent, setMarketingConsent] = useState(false);

    const handleApplyPromo = () => {
        // Handle promo code application
        console.log("Applying promo code:", promoCode);
    };
    return (
            <div className="max-w-6xl mx-auto px-6 py-8">
                {/* Registration Summary Header */}
                <div className="bg-green-600 text-white p-6 rounded-t-lg">
                    <h1 className="text-2xl font-bold">Registration Summary</h1>
                </div>

                {/* Content */}
                <div className="bg-white border-l border-r border-b rounded-b-lg p-6">
                    {/* Ticket Items */}
                    <div className="space-y-4 mb-8">
                        {/* Premium Ticket */}
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <div>
                                <h3 className="font-semibold text-gray-900">PREMIUM TICKET x 2</h3>
                            </div>
                            <div className="text-right">
                                <span className="font-semibold text-gray-900">EUR 40.19</span>
                            </div>
                        </div>

                        {/* Student Ticket */}
                        <div className="flex justify-between items-center py-3 border-b border-gray-200">
                            <div>
                                <h3 className="font-medium text-gray-900">Student Ticket Access On Day 3 Only</h3>
                            </div>
                            <div className="text-right">
                                <span className="font-medium text-gray-900">EUR 50.40 SUBJECT TO APPROVAL</span>
                                <div className="text-sm text-gray-600">Incl. 19%</div>
                            </div>
                        </div>
                    </div>

                    {/* Promo Code Section */}
                    <div className="mb-8">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h3 className="font-medium text-green-700 mb-3">Have a promo code?</h3>
                            <div className="flex gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter Promo code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-400"
                                />
                                <button
                                    onClick={handleApplyPromo}
                                    className="px-6 py-2 bg-red-800 text-white rounded-md hover:bg-red-900 font-medium"
                                >
                                    APPLY
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-end mb-8">
                        <div className="text-right">
                            <div className="text-2xl font-bold text-gray-900">Total: EUR 300</div>
                            <div className="text-sm text-gray-600">Incl. 19% VAT</div>
                        </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4 mb-8">
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                            />
                            <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                                I have read and accept the{" "}
                                <a href="#" className="text-red-600 underline">terms and conditions</a>,{" "}
                                <a href="#" className="text-red-600 underline">Privacy Policy</a>, and consent that attendees under the age of 21 will not be admitted, and admission to the exhibition is restricted to trade and business professionals only, and students above 16 and below 18 can attend only if accompanied by school or faculty member{" "}
                                <span className="text-red-500">*</span>
                            </label>
                        </div>

                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="marketing"
                                checked={marketingConsent}
                                onChange={(e) => setMarketingConsent(e.target.checked)}
                                className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                            />
                            <label htmlFor="marketing" className="text-sm text-gray-700 leading-relaxed">
                                I hereby consent the use of my data by the organiser, exhibitors and sponsors of DWTC & KAOUN International to delivering services and for marketing purposes. I am aware that I can object to the sending of newsletters at any time{" "}
                                <span className="text-red-500">*</span>
                            </label>
                        </div>
                    </div>
                </div>
        </div>
    );
}