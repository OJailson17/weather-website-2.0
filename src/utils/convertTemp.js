const convertTemp = (escale, temp) => {
    const temps = {
        Kelvin2C: (temp - 273.15).toFixed(0),
        Fahrenheit2C: (temp - 32) * (5/9)
    }

    return temps[escale]
}

export default convertTemp