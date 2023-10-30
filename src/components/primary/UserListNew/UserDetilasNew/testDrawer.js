const styled = (isLightTheme) => {
    const buttonStyle = {
        width: "120px",
        textTransform: "none",
        backgroundColor: isLightTheme ? "#F4F7FE" : "#000",
        color: "#62728F",
        borderRadius: "8px",
        "&:hover": {
            backgroundColor: "#F4F7FE",
            color: "#62728F",
            border: "1px solid #F4F7FE",
        },
    };
    const BoxStyle = {
        position: "relative",
        top: "50%",
        left: "50%",
        // width :"40%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "background.paper",
        border: "none",
        borderRadius: "8px",
        p: 0,
        input: {
            color: isLightTheme ? "black" : "#fff",
            height: "20px",
            borderRadius: "8px",
        },
        select: {
            height: "20px",
            color: isLightTheme ? "black" : "#fff",
        },
    };
    return {
        buttonStyle,
        BoxStyle,
    };
};

export default styled;
