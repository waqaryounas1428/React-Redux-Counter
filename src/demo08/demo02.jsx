import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterslice";

export default function Demo02() {

    const counter=useSelector(state=>state.counter.value);


    return (
        <>
            <span style={{ display: "inline-block", width: "50px", textAlign: "center" }}>
                {counter}
            </span>
        </>
    )
}
