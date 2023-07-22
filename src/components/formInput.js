import React from 'react'
export const FormInput = ({name, holder, data, onChange, errors}) => (
        <input
            type="text"
            name={name}
            id={name}
            placeholder={holder.toUpperCase()}
            //required
            //pattern="^(?:[1-9]|[12]\d|3[01])$"
            value={data}
            onChange={onChange}
            className={`${errors[name] || errors.dateError ? 'border-red-500': ''} text-3xl w-full px-3 py-2 font-bold border rounded-lg shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
        />
)
