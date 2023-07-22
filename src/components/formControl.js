import React from 'react'
import {FormLabel} from "./formLabel";
import {FormInput} from "./formInput";

export const FormControl = ({name, errors, handleChange, data, holder}) => (
    <div>
        <FormLabel name={name} errors={errors} />
        <FormInput name={name} errors={errors} onChange={handleChange} data={data} holder={holder}/>
        {errors[name] && <div className="text-red-500 text-[0.7rem]">{errors[name]}</div>}
    </div>
)
