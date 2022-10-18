import React from "react";

const Chip = (props) => {

    return (

        <p className="chip" style={{ backgroundColor: props.color, width: "content", padding: "7px", paddingLeft: "15px", paddingRight: "15px", textAlign: "center", height: "20px", borderRadius: "20px", marginTop: "1px", marginBottom: "1px", paddingBottom: "10px" }}>
            {props.text}
        </p>

    );


}

export default Chip;