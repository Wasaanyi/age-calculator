import * as React from "react"
import {useState} from "react";
import {Result} from "../components/result";
import {SubmitButton} from "../components/submitButton";
import {FormControl} from "../components/formControl";
import {isValidDate} from "../utilities/isValidDate";

const IndexPage = () => {

    const [validData, setValidData] = useState({
        days: '--',
        months: '--',
        years: '--'
    })

    const [formData, setFormData] = useState({
        day: '',
        month: '',
        year: ''
    })

    const [errors, setErrors] = useState({
        day: '',
        month: '',
        year: '',
        dateError: '',
        isValid: ''
    })

    const handleChange = (e) => {
        // resetting results
        validData.days = '--'
        validData.months = '--'
        validData.years = '--'
        setValidData(validData)

        const {name, value}  = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))


    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const currentDate = new Date()

        const currentYear = currentDate.getFullYear()

        const {day, month, year} = formData
        const inputDate = `${year}-${month}-${day}`
        const dob = new Date(`${year}-${month}-${day}`)

        // perform validation
        let errorObj = {}
        errors.isValid = true

        // validating the day
        if (day.length <=0 ){
            errorObj.day = 'Field is required'
            errors.isValid = false
        }
        else if (day<0 || day>31){
            errorObj.day = 'Must be a valid day'
            errors.isValid = false
        }

        // validating month
        if (month.length<=0){
            errorObj.month = 'Field is required'
            errors.isValid = false
        }
        else if (month<=0 || month>12){
            errorObj.month = 'Must be a valid month'
            errors.isValid = false
        }

        // validating year
        if (year.length<=0){
            errorObj.year = 'Field is required'
            errors.isValid = false
        }
        else if (year>currentYear){
            errorObj.year = 'Must be in the past'
            errors.isValid = false
        }

        // validating date
        if(errors.isValid){
            if(!isValidDate(inputDate)){
                errorObj.dateError = 'Must be a valid date'
                errors.isValid = false
            }
        }


        setErrors(errorObj)

        // submit the form if it's valid
        if(errors.isValid){
            //const dob = new Date(`${year}-${month}-${day}`)
            const dateDifference = currentDate - dob
            // calculating years
            const msPerYear = 1000 * 60 * 60 * 24 * 365.25 // approximate milliseconds
            validData.years = Math.floor(dateDifference/msPerYear)

            // calculating months
            const remainingTimeInMs = dateDifference % msPerYear
            const msPerMonth = msPerYear / 12 // approximate milliseconds in a month
            validData.months = Math.floor(remainingTimeInMs / msPerMonth)

            // calculating days
            const remainingMonthsTimeInMs = remainingTimeInMs % msPerMonth
            const msPerDay = 1000 * 60 * 60 * 24 // milliseconds in a day
            validData.days = Math.floor(remainingMonthsTimeInMs / msPerDay)

            //updating results
            setValidData(validData)
        }

    }
    return (
    <main className="flex items-center justify-center h-screen bg-gray-100 ">
        <div className="p-3 h-96 md:w-1/3 md:max-w-lg w-screen mx-2 bg-white rounded-lg  rounded-br-[150px] ">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                    <FormControl errors={errors} name="day" data={formData.day} handleChange={handleChange} holder="DD"/>
                    <FormControl errors={errors} name="month" data={formData.month} handleChange={handleChange} holder="MM"/>
                    <FormControl errors={errors} name="year" data={formData.year} handleChange={handleChange} holder="YYYY"/>
                </div>
                {errors.dateError && <div className="text-red-500 text-[0.7rem]">{errors.dateError}</div>}
                <SubmitButton/>
            </form>
            <Result data={validData} />
        </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Age Calculator</title>
