import React from 'react'
export const FormLabel = ({name,errors}) => (
    <label htmlFor={name} className={`block  text-[0.7rem] font-bold mb-1 ${errors.day || errors.dateError ? 'text-red-500' : 'text-gray-700'}`}>{name.toUpperCase()}</label>
)
