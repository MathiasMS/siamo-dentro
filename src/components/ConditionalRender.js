const ConditionalRender = ({ children, conditional }) => {
    return conditional ? children : null;
}

export default ConditionalRender;
