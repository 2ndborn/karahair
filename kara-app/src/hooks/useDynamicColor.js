import { useLocation } from "react-router-dom"

const useDynamicColor = () => {
    const location = useLocation();
    const getColor = (element) => {
        const colors = {
            "/mystory": {navbar: "#d9b9a0", title: "#d9b9a0", footer: "#d9b9a0"},
            default: {navbar: "transparent", title: "#f1e7dd", footer: "#f1e7dd"},
        }
        return colors[location.pathname]?.[element] || colors.default[element]
    }
    return getColor;
}

export default useDynamicColor;