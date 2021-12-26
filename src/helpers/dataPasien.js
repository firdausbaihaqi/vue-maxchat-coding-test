const defaultData = []
const getDataPasien = () => {
    const dataPasienLocal = JSON.parse(localStorage.getItem("dataPasien"));

    if (localStorage.getItem("dataPasien") === null) {
        setDataPasien(defaultData);
    }

    return { dataPasienLocal };
}

const setDataPasien = (newData) => {
    localStorage.setItem("dataPasien", JSON.stringify(newData));
}

const removeDataPasien = () => {
    setDataPasien(defaultData);
}

export { getDataPasien, setDataPasien, removeDataPasien }