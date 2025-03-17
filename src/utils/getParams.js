import getAtternNameFromSelector from "@/utils/getAtternNameFromSelector";

const getParams = (element, dataAttrSelector) => {
    return JSON.parse(
        element.getAttribute(
            getAtternNameFromSelector(dataAttrSelector)
        )
    )
}

export default getParams