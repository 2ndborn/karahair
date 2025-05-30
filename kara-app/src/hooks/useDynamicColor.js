import { useLocation } from "react-router-dom"

const useDynamicColor = () => {
    const location = useLocation();
    const getColor = (element) => {
        const colors = {
            "/mystory": {navbar: "blue", title: "blue", footer: "blue"},
            default: {navbar: "#CA8E83", title: "#CA8E83", footer: "#CA8E83"},
        }
        return colors[location.pathname]?.[element] || colors.default[element]
    }
    return getColor;
}

export default useDynamicColor;