import { useLocation } from "react-router-dom"

const useDynamicColor = () => {
    const location = useLocation();
    const getColor = (element) => {
        const colors = {
            "/mystory": {navbar: "rgba(217, 185, 160, 0.6)", title: "#d9b9a0", footer: "#d9b9a0"},
            "/services": {navbar: "rgba(202, 131, 131)", title: "#ca8383", footer: "#fff"},
            default: {navbar: "transparent", title: "#f1e7dd", footer: "#f1e7dd"},
        }
        return colors[location.pathname]?.[element] || colors.default[element]
    }
    return getColor;
}

export default useDynamicColor;