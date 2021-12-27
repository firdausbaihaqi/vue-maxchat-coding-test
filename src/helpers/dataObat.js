const defaultData = []
const getDataObat = () => {
    const dataObatLocal = JSON.parse(localStorage.getItem("dataObat"));

    if (localStorage.getItem("dataObat") === null) {
        setDataObatLocal(defaultData);
    }

    return { dataObatLocal };
}

const setDataObatLocal = (newData) => {
    localStorage.setItem("dataObat", JSON.stringify(newData));
}

export { getDataObat, setDataObatLocal }