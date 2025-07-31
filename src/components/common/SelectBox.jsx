import { ChevronDownIcon } from '@heroicons/react/24/outline'
import ErrorWarning from './ErrorWarning'

export default function SelectBox({ label, name = "", required = false, error = "", options = [], onChange, value = "" }) {
    return (
        <div>
            <label className="block text-sm text-gray-700 mb-2 font-light">
                {label} {required ? <span className="text-red-500">*</span> : null}
            </label>
            <div className="relative">
                <select name={name} className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white ${value ? "text-gray-700" : "text-gray-400"}`} onChange={(e) => onChange(e.target.value)} value={value}>
                    <option value="" className='text-gray-400'>Please Select</option>
                    {options.map((option, index) => (
                        <option key={index} value={option} className='text-gray-700'>
                            {option}
                        </option>
                    ))}
                </select>
                <ChevronDownIcon className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
            {error && (
                <ErrorWarning error={error} />
            )}
        </div>
    )
}
