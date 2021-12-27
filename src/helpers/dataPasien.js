const defaultData = []
const getDataPasien = () => {
    const dataPasienLocal = JSON.parse(localStorage.getItem("dataPasien"));

    if (localStorage.getItem("dataPasien") === null) {
        setDataPasienLocal(defaultData);
    }

    return { dataPasienLocal };
}

const setDataPasienLocal = (newData) => {
    localStorage.setItem("dataPasien", JSON.stringify(newData));
}

const removeDataPasien = () => {
    setDataPasienLocal(defaultData);
}

export { getDataPasien, setDataPasienLocal, removeDataPasien }