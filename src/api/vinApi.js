const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles'

export async function decodeVin(vin) {
    try {
        const response = await fetch(`${BASE_URL}/DecodeVin/${vin}?format=json`)

        if (!response.ok) {
            throw new Error('Не вдалося отримати дані VIN')
        }

        return await response.json()
    } catch (error) {
        console.error('decodeVin error:', error)
        throw error
    }
}

export async function getVehicleVariables() {
    try {
        const response = await fetch(`${BASE_URL}/GetVehicleVariableList?format=json`)

        if (!response.ok) {
            throw new Error('Не вдалося отримати список змінних')
        }

        return await response.json()
    } catch (error) {
        console.error('getVehicleVariables error:', error)
        throw error
    }
}

export async function getVehicleVariableById(id) {
    try {
        const response = await fetch(`${BASE_URL}/GetVehicleVariableList?format=json`)

        if (!response.ok) {
            throw new Error('Не вдалося отримати дані змінної')
        }

        const data = await response.json()
        return data.Results.find(item => String(item.ID) === String(id))
    } catch (error) {
        console.error('getVehicleVariableById error:', error)
        throw error
    }
}