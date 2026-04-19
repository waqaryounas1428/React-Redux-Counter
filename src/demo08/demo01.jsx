import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./counterslice";
// import { useState } from "react";

export default function Demo01() {



    // const [counter, setCounter] = useState(0);

    // function handleIncrement() {
    //     setCounter(p => p + 1);
    // }



    // function handleDecrement() {
    //     setCounter(p => p - 1);
    // }

    const counter=useSelector(state=>state.counter.value);
    const dispatch=useDispatch();


    function handleIncrement() {
        dispatch(increment());
    }

    function handleDecrement() {
        dispatch(decrement())
    }


    return (
        <>
            <Button variant="primary" onClick={handleDecrement} > <FontAwesomeIcon icon="fa fa-minus" /> </Button>
            <span style={{ display: "inline-block", width: "50px", textAlign: "center" }}>
                {counter}
            </span>
            <Button variant="primary" onClick={handleIncrement} > <FontAwesomeIcon icon="fa fa-plus" /> </Button>
        </>
    )
}
