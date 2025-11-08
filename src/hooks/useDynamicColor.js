import { useLocation } from "react-router-dom"

const useDynamicColor = () => {
    const location = useLocation();
    const getColor = (element) => {
        const colors = {
            "/mystory": {navbar: "transparent", title: "#d9b9a0", footer: "#d9b9a0"},
            "/services": {navbar: "transparent", title: "#ca8383", footer: "#ca8383"},
            "/gallery": {navbar: "transparent", title: "#9B6771", footer: "#9B6771"},
            "/contactme": {navbar: "transparent", title: "#6c4b5e", footer: "#6c4b5e"},
            default: {navbar: "transparent", title: "#f1e7dd", footer: "#f1e7dd"},
        }
        return colors[location.pathname]?.[element] || colors.default[element]
    }
    return getColor;
}

export default useDynamicColor;