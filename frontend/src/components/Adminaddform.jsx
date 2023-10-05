import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Adminaddform = (props) => {
    const navigate = useNavigate();
    const [userToken, setUserToken] = useState(sessionStorage.getItem("userToken"));
    const [userID, setUserID] = useState(sessionStorage.getItem("userId"))
    const [post, setPost] = useState(props.data);

    console.log("method", props.method);
    console.log("data", props.data);

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setPost({
            ...post, [name]: value
        })
        console.log(post)
    }

    const addPost = async () => {
        let data = {
            userId: userID,
            token: userToken,
            title: post.title,
            img_url: post.img_url,
            category: post.category,
            language: post.language,
            cast: post.cast,
            content: post.content,
            ticketrate: post.ticketrate,
            seats: post.seats
        }
        console.log("add clicked");
        if (props.method === "post") {
            await axios.post("http://localhost:5000/api/addpost", data)
                .then((response) => {
                    console.log(response);
                    if (response.data.message === "Movie successfully added") {
                        alert(response.data.message);
                        navigate("/admindashboard")
                    } else {
                        alert(response.data.message)
                    }
                })
                .catch(err => console.log(err))
        }
        if (props.method === "put") {
            axios.put("http://localhost:5000/api/edit/" + post._id, post)
                .then((response) => {
                    if (response.data.message === "Updated successfully") {
                        alert(response.data.message);
                        window.location.reload(false)
                    } else {
                        alert(response.data.message)
                    }
                })
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="row g-3 mt-5">
                            <h3>Add latest movies</h3>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Movie Title </label>&nbsp;
                                <input name="title" value={post.title} onChange={inputHandler} type="text" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">img_url  </label>&nbsp;
                                <input name="img_url" value={post.img_url} onChange={inputHandler} type="text" />
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Category</label>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="category"
                                    value={post.category}
                                    onChange={inputHandler}
                                >
                                    <FormControlLabel value="Action" control={<Radio />} label="Action" />
                                    <FormControlLabel value="Drama" control={<Radio />} label="Drama" />
                                    <FormControlLabel value="Romance" control={<Radio />} label="Romance" />
                                    <FormControlLabel value="Comedy" control={<Radio />} label="Comedy" />
                                </RadioGroup>
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Language</label>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="language"
                                    value={post.language}
                                    onChange={inputHandler}
                                >
                                    <FormControlLabel value="English" control={<Radio />} label="English" />
                                    <FormControlLabel value="Malayalam" control={<Radio />} label="Malayalam" />
                                    <FormControlLabel value="Hindi" control={<Radio />} label="Hindi" />
                                    <FormControlLabel value="Tamil" control={<Radio />} label="Tamil" />
                                </RadioGroup>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Cast  </label>&nbsp;
                                <input name="cast" value={post.cast} onChange={inputHandler} type="text" />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Description  </label>
                                <textarea name="content" value={post.content} onChange={inputHandler} cols="30" rows="6" className="form-control" placeholder='Type something'></textarea>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Ticket rate  </label>&nbsp;
                                <input name="ticketrate" value={post.ticketrate} onChange={inputHandler} type="text" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">No.of seats  </label>&nbsp;
                                <input name="seats" value={post.seats} onChange={inputHandler} type="text" />
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <button className="btn btn-success" onClick={addPost}>Submit</button>
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

export default Adminaddform