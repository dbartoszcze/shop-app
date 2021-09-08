


const getWindowSize = () => {
    const { innerWidth: width } = window;
    if (width <= 768) {
        return 'small';
    }
    if (width <= 1024) {
        return 'middle';
    }
    return 'large';
};


export {
    getWindowSize
}