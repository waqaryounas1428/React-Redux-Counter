import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import {  incrementByAmount } from "./counterslice";

export default function Demo03() {

    const dispatch=useDispatch();


    function handleIncrement() {
        dispatch(incrementByAmount(10));
    }



    return (
        <>
            <Button variant="primary" onClick={handleIncrement} > Increment By 10</Button>
        </>
    )
}
