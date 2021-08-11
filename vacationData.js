
const vacationData = [
    {
        name: "Thailand",
        average_temp: 82,
        cost_of_flight: 765,
        has_beach: true,
        has_mountains: true
    },
    {
        name: "Minnesota",
        average_temp: 41,
        cost_of_flight: 235,
        has_beach: false,
        has_mountains: false
    },
    {
        name: "New Zealand",
        average_temp: 66,
        cost_of_flight: 433,
        has_beach: true,
        has_mountains: true
    },
    {
        name: "England",
        average_temp: 45,
        cost_of_flight: 290,
        has_beach: false,
        has_mountains: false
    },
    {
        name: "Tristan da Cunha",
        average_temp: 59,
        cost_of_flight: 1304,
        has_beach: true,
        has_mountains: true,
    }
]

const airlineData = [
    {
        name: "Spirit",
        destinations_flown_to: ["New Zealand", "Scotland"]
    },
    {
        name: "Lufthansa",
        destinations_flown_to: ["Tristan da Cunha", "Scotland", "Thailand"]
    },
    {
        name: "Delta",
        destinations_flown_to: ["Thailand", "Minnesota", "England", "Scotland"]
    },
    {
        name: "Southwest",
        destinations_flown_to: ["New Zealeand", "Tristan de Cunha", "Minnesota"]
    }
]

export default { vacationData, airlineData }