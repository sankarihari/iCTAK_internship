import { Add, Delete, Edit } from '@mui/icons-material'
import { Button, Rating } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Adminaddform from './Adminaddform';


const Admin = () => {
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const [singleValue, setSingleValue] = useState([]);

  const fetchDataFromApi = () => {
    axios.get("http://localhost:5000/api/viewpost")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      });
  };
  const deleteMovie = (id) => {
    console.log("delete cliked");
    console.log(id);
    axios.delete("http://localhost:5000/api/delete/" + id)
      .then((response) => {
        alert(response.data.message);
        window.location.reload(false);
      })
  }

  const updateForm = (val) => {
    console.log("update clicked", val);
    setUpdate(true);
    setSingleValue(val);
  }

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  let finalJSX = <div>
    {data.map((item) => (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">MOVIE</th>
            <th scope="col">CATEGORY</th>
            <th scope="col">LANGUAGE</th>
            <th scope="col">AVARAGE RATING</th>
            <th scope="col">NO.OF TICKETS SOLD</th>
            <th scope="col">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><img src={item.img_url} alt="" /> {item.title}</th>
            <td>{item.category}</td>
            <td>{item.language}</td>
            <td><Rating name="size-small" defaultValue={2} size="small" /></td>
            <td>{item.seats}</td>
            <td>
              <Button variant="contained" color="error" size="small" onClick={() => deleteMovie(item._id)}><Delete /></Button>
              <br></br>
              <Button variant="contained" color="success" size="small" onClick={() => updateForm(item)}><Edit /></Button>
              <br></br>
              <Button variant="contained" href='/adminaddform' size="small"><Add /></Button>
            </td>
          </tr>
        </tbody>
      </table>
    ))}
  </div>
  if (update) finalJSX = <Adminaddform method='put' data={singleValue} />
  return (
    finalJSX
  )
}

export default Admin