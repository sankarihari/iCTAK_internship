import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';


const Adminaddform = () => {
    const navigate = useNavigate();
    const[post,setPost]=useState({title:'',img_url:'',category:'',language:'',cast:'', content:'',ticketrate:'',seats:''});
    const inputHandler=(e)=>{
        const {name,value} = e.target;
        setPost({
            ...post,[name]:value
        })
        console.log(post)
    }
    const addPost= async()=>{
    console.log("add clicked");
    await axios.post("http://localhost:5000/api/addpost",post)
    .then((response)=>{
        console.log(response);
        if(response.data.message==="Movie successfully added"){
            alert(response.data.message);            
            navigate("/admindashboard")
        }else{
            alert(response.data.message)
            
        }
    })
    .catch(err=>console.log(err))
}
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">
                        <div className="row g-3 mt-5">
                            <h3>Add latest movies</h3>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label  htmlFor="" className="form-label">Movie Title </label>&nbsp;
                                <input name="title" value={post.title} onChange={inputHandler} type="text" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">img_url  </label>&nbsp;
                                <input name="img_url" value={post.img_url} onChange={inputHandler} type="text" />
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <label htmlFor=""  className="form-label">Category</label>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                />
                                <FormControlLabel name="category" value={post.category} onChange={inputHandler} control={<Radio />} label="Action" />
                                <FormControlLabel name="category" value={post.category} onChange={inputHandler}control={<Radio />} label="Drama" />
                                <FormControlLabel name="category" value={post.category} onChange={inputHandler} control={<Radio />} label="Romance" />
                                <FormControlLabel name="category" value={post.category} onChange={inputHandler} control={<Radio />} label="Comedy" />
                            </div>
                            <div className="col col-12 col-sm12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Language </label>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                />
                                <FormControlLabel name="language" value={post.language} onChange={inputHandler} control={<Radio />} label="English" />
                                <FormControlLabel name="language" value={post.language} onChange={inputHandler} control={<Radio />} label="Malayalam" />
                                <FormControlLabel name="language" value={post.language} onChange={inputHandler} control={<Radio />} label="Hindi" />
                                <FormControlLabel name="language" value={post.language} onChange={inputHandler} control={<Radio />} label="Tamil" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Cast  </label>&nbsp;
                                <input name="cast" value={post.cast} onChange={inputHandler} type="text" />
                            </div>
                           
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                                <label htmlFor="" className="form-label">Description  </label>
                                <textarea name="content" value={post.content} onChange={inputHandler}  cols="30" rows="6" className="form-control" placeholder='Type something'></textarea>
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
                                <button className="btn btn-success" onClick={addPost}>Add movie</button>
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