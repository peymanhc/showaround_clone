import React, { useEffect } from "react";

import styles from "./style.module.scss";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loadingTripdata } from "../../store/actions/createTrip";

const CreateTrip: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  useEffect(()=>{
    window.scroll(0,0)
  })
  const SubmitBtn = (data: any) => {
    dispatch(
      loadingTripdata(
        data.location,
        data.datefrom,
        data.dateto,
        data.numberofpeople
      )
    );
  };

  const onFocus = (e: any) => {
    e.currentTarget.type = "date";
  };
  const onBlur = (e: any) => {
    e.currentTarget.type = "text";
  };

  return (
    <div>
      <div className={styles.header_overlay}>
        <div className={styles.header}>
          <h1>My Trips</h1>
          <p>Save time by planning your Trip and get offers from Locals </p>
        </div>
      </div>
      <div className={styles.formSection}>
        <div className="p-4">
          <h5>Create a Trip</h5>
          <div className={styles.Fields}>
            <label>Where are you going?</label>
            <input
              id="location"
              name="location"
              ref={register({ required: true })}
              type="text"
              placeholder="Where Next ?"
            />
          </div>
          <div className={styles.Fields}>
            <Row>
              <Col>
                <label>Date from:</label>
                <input
                  id="datefrom"
                  name="datefrom"
                  ref={register({ required: true })}
                  className={styles.datapicker}
                  placeholder="Type Date"
                  type="text"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </Col>
              <Col>
                <label>Date to:</label>
                <input
                  id="dateto"
                  name="dateto"
                  ref={register({ required: true })}
                  className={styles.datapicker}
                  placeholder="Type Date"
                  type="text"
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
              </Col>
            </Row>
          </div>
          <div className={styles.Fields}>
            <label>Number of People:</label>
            <select
              id="numberofpeople"
              name="numberofpeople"
              ref={register({ required: true })}
              defaultValue="DEFAULT"
              className="custom-select custom-select-sm"
            >
              <option disabled>Number Of People</option>
              <option defaultValue="1">Just me</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
              <option defaultValue="3">More</option>
            </select>
          </div>
        </div>
        <div className={styles.submitSec}>
          <Button
            onClick={handleSubmit(SubmitBtn)}
            type="submit"
            className={styles.submitbtn}
            variant="primary"
          >
            Submit
          </Button>
        </div>
      </div>
      <p className={styles.text}>
        You haven't created any Trips yet. Create your first Trip so available
        locals can send you offers.
      </p>
    </div>
  );
};
export default CreateTrip;
