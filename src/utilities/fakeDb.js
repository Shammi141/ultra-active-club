const addFakeDataToLocalStorage = time => {
    localStorage.setItem('break-time', JSON.stringify(time));
}

export {
    addFakeDataToLocalStorage,
}