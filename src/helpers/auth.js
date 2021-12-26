
const defaultData = { email: null }

const getUserLogin = () => {
    let isLoggedIn = false;

    const data = JSON.parse(localStorage.getItem("userLogin"));

    if (localStorage.getItem("userLogin") === null) {
        localStorage.setItem("userLogin", JSON.stringify(defaultData))
    }
    else if (data.email === defaultData.email) {
        // console.log("ada isi tapi default")
    } else {
        isLoggedIn = true;
    }

    return { data, isLoggedIn };
}

const setUserLogin = (newData) => {
    localStorage.setItem("userLogin", JSON.stringify(newData));
    return console.log("set data completed!");
}

const removeUserLogin = () => {
    setUserLogin(defaultData);
}

export { getUserLogin, setUserLogin, removeUserLogin }