import useLocalStorage from "./useLocalStorage"

const useDarkMode = (initialValue) => {

    const [ someValue, setSomeValue] = useLocalStorage(initialValue);


    return([someValue, setSomeValue]);
}

export default useDarkMode;