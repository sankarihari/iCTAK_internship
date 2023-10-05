import { Rating } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Addreview = () => {
    const navigate = useNavigate();
    const [review, setReview] = useState({ username: '', comment: '' });
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setReview({
            ...review, [name]: value
        })
        console.log(review)
    }
    const addReview = () => {
        console.log("review clicked");
        axios.post("http://localhost:5000/api/review", review)
            .then((response) => {
                console.log(response);
                if (response.data.message === "Review successfully added") {
                    alert(response.data.message);
                    navigate('/moviedetails')
                } else {
                    alert(response.data.message);
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="row g-3 mt-5">
                            <h3>Add your review</h3>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Username  </label>
                                <br></br>
                                <input name="username" value={review.username} onChange={inputHandler} type="text" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Rating  </label>
                                <br></br>
                                <Rating defaultValue={2} size="small" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <textarea name="comment" value={review.comment} onChange={inputHandler} cols="30" rows="6" className="form-control" placeholder='Type something'></textarea>
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <button className="btn btn-success" onClick={addReview}>Submit</button>
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Addreview