export const scrollToComments = () => {
    const element = document.querySelector(".app")
    const distance = window.innerHeight - window.scrollY;

    // @ts-ignore
    element.scrollBy({
        top: distance,
        behavior: "smooth"
    });
}


