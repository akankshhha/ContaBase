export const getCaseFluctuations = async () => {
    const url = "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    try {
        const fluctuationData = await fetch(url)
        const jsonDataFluctuation = await fluctuationData.json()
        return jsonDataFluctuation
               
    } catch {
        console.log("Error fetching covid data - message from service file");
    }
} 

export const getCountryWiseData = async () => {
    const url = "https://disease.sh/v3/covid-19/countries"
    try {
        const data = await fetch(url)
        return data.json()
    } catch {
        console.log("Error fetching country-wise covid data - message from service file");
    }
}