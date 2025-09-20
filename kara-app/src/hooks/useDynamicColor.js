import { useLocation } from "react-router-dom"

const useDynamicColor = () => {
    const location = useLocation();
    const getColor = (element) => {
        const colors = {
            "/mystory": {navbar: "transparent", title: "#d9b9a0", footer: "#d9b9a0"},
            "/services": {navbar: "rgba(202, 131, 131)", title: "#ca8383", footer: "#fff"},
            "/contactme": {navbar: "transparent", title: "#6c4b5e", footer: "#fff"},
            default: {navbar: "transparent", title: "#f1e7dd", footer: "#f1e7dd"},
        }
        return colors[location.pathname]?.[element] || colors.default[element]
    }
    return getColor;
}

export default useDynamicColor;