export const snap = {
    '.d-snap': {
        display: "flex",
        flexDirection: "column",
        overflowY: "scroll",
        scrollSnapType: "y mandatory", /* กำหนดให้ scroll ตรงขึ้นแนวนอน */
        whiteSpace: "nowrap", /* ห้ามขึ้นบรรทัดใหม่ */
        height: "100vh",
        "&::-webkit-scrollbar" :{
            height: "0px",
            width: "0"
        },
    },
    '.d-snap-items':{
        width: "100%",
        height: "100%",
        flexShrink: "0", /* ไม่ให้ย่อขนาดเมื่อเลื่อน */
        scrollSnapAlign: "start", /* ให้ตรงขึ้นที่จุดเริ่มต้นของแต่ละ Item */
        backgroundColor: "#3498db",
       
    }
}