export const API_GET_ELEC = "http://localhost:7000/api/electricity"
export const API_GET_WATER = "http://localhost:7000/api/water"

export function getMonthName(monthNumber) {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return monthNames[monthNumber - 1];
}
