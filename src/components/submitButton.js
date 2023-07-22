import React from 'react'
import {ArrowDownIcon} from "@heroicons/react/20/solid";

export const SubmitButton = () => (
    <div className="flex items-center justify-center mt-3">
        <hr className="w-full h-px bg-blue-500 my-4"/>
        <button id="submit" title="submit button" type="submit" className="flex items-center justify-center bg-blue-500 text-white px-4 py-4 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            <ArrowDownIcon className="w-5 h-5 " />
        </button>
        <hr className="w-full h-px bg-blue-500 my-4 md:hidden"/>
    </div>
)
