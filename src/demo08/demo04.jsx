import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import {  decrementByAmount } from "./counterslice";

export default function Demo04() {

    const dispatch=useDispatch();


    function handleIncrement() {
        dispatch(decrementByAmount(10))
    }



    return (
        <>
            <Button variant="primary" onClick={handleIncrement} > Decrement By 10</Button>
        </>
    )
}
