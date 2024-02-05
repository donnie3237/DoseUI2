export const slider = {
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
    },
    '.d-slider': {
        width: "calc(100% - 40px)",
        display: "flex",
        overflowX: "scroll",
        margin: "20px 0",
        marginLeft:"20px",
        padding:"0 20px",
        paddingBottom: "20px",
        
        "&::-webkit-scrollbar" :{
            height: "10px",
            borderRadius: "5px",
            width: "0"
        },
        "&::-webkit-scrollbar-track" :{
            backgroundColor: "#aaaaaa",
            borderRadius: "5px"
        },
        "&::-webkit-scrollbar-thumb" : {
            background: "rgb(0, 0, 0)",
            borderRadius: "5px"
        }
    },
    '.d-slider-title':{
        width: "100%",
        fontSize: "1.5em",
        borderBottom: "2px solid rgb(0, 0, 0)",
        paddingBottom: "10px",
        marginTop: "30px",
        paddingLeft: "20px",
        fontWeight: "bold"
    }
}