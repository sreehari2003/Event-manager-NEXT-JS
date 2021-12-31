import React, { useRef } from "react";
import Button from "../ui/Button";
import classes from "../styles/events-search.module.css";

const EventSearch = (props) => {
  const input = useRef();
  const month = useRef();
  const submitHanfler = (e) => {
    e.preventDefault();
    const year = input.current.value;
    const months = month.current.value;
    props.change(year, months);
  };
  return (
    <form className={classes.form} onSubmit={submitHanfler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="" id="year" ref={input}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">month</label>
          <select name="" id="month" ref={month}>
            <option value="1">january</option>
            <option value="2">febrauary</option>
            <option value="3">march</option>
            <option value="4">april</option>
            <option value="5">may</option>
            <option value="6">june</option>
            <option value="7">july</option>
            <option value="8">august</option>
            <option value="9">september</option>
            <option value="10">october</option>
            <option value="11">november</option>
            <option value="12">december</option>
          </select>
        </div>
      </div>
      <Button>Find events</Button>
    </form>
  );
};

export default EventSearch;
