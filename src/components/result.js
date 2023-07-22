import React from "react"
import CountUp from "react-countup";

export function Result ({data}) {
    return(
        <div>
            <h1 className="text-6xl font-bold" >
            <span className="text-purple-500">
                {data.years !== '--' ?  <CountUp end={data.years}/> : data.years}
            </span>
                year{data.years > 1 ? "s" : ""}
            </h1>

            <h1 className="text-6xl font-bold" >
            <span className="text-purple-500">
                {data.months !== '--' ?  <CountUp end={data.months}/> : data.months}
            </span>
                month{data.months > 1 ? "s" : ""}
            </h1>

            <h1 className="text-6xl font-bold" >
            <span className="text-purple-500">
                {data.days !== '--' ?  <CountUp end={data.days}/> : data.days}
            </span>
                day{data.days > 1 ? "s" : ""}
            </h1>
        </div>

    )
}
