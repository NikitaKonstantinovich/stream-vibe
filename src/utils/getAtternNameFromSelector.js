const getAtternNameFromSelector = (attrSelector) => {
    return attrSelector.substring(
        1,
        attrSelector.length - 1
    )
}

export default getAtternNameFromSelector