export const weeklyConver = (date) => {
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const weekly = date.split(":");
    //   const day = days[new Date(date).getDay()];
    // const month = months[new Date(date).getMonth()];
    // const dateNumber = new Date(date).getDate();
    return {weekly};
};
