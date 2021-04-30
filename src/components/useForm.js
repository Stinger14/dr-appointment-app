import React, { useState } from 'react'

export default function useForm(initFieldVals) {

    //TODO Define component state here
    const [values, setValues] = useState(initFieldVals);

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        handleInputChange
    }
}
