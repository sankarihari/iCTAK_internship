import { Add, Delete, Edit } from '@mui/icons-material'
import { Button, Rating } from '@mui/material'
import React from 'react'

const Admin = () => {
  return (
    <div >
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Category</th>
            <th scope="col">Languages</th>
            <th scope="col">Avarage rating</th>
            <th scope="col">No.of tickets sold</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gFf21D7vU4WgPm2m2Ifh8cUb1XpXn0DD848Y2uMmkFxDK5RdQDOJfdf2Nfre-1eQ&usqp=CAU" alt="" /> A small light</th>
            <td>Action/Drama</td>
            <td>English</td>
            <td><Rating name="size-small" defaultValue={2} size="small" /></td>
            <td>120</td>
            <td>
            <Button variant="contained" color="error" size="small"><Delete/></Button>
              <br></br>
              <Button variant="contained" color="success" size="small"><Edit/></Button>
              <br></br>
              <Button variant="contained"  href='/adminaddform'  size="small"><Add/></Button>
            </td>
          </tr>
          <tr>
            <th scope="row"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gFf21D7vU4WgPm2m2Ifh8cUb1XpXn0DD848Y2uMmkFxDK5RdQDOJfdf2Nfre-1eQ&usqp=CAU" alt="" /> A small light</th>
            <td>Action/Drama</td>
            <td>English</td>
            <td><Rating name="size-small" defaultValue={2} size="small" /></td>
            <td>120</td>
            <td>
            <Button variant="contained" color="error" size="small"><Delete/></Button>
              <br></br>
              <Button variant="contained" color="success" size="small"><Edit/></Button>
              <br></br>
              <Button variant="contained" href='/adminaddform'  size="small"><Add/></Button>
            </td>
          </tr>
          <tr>
            <th scope="row"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6gFf21D7vU4WgPm2m2Ifh8cUb1XpXn0DD848Y2uMmkFxDK5RdQDOJfdf2Nfre-1eQ&usqp=CAU" alt="" /> A small light</th>
            <td>Action/Drama</td>
            <td>English</td>
            <td><Rating name="size-small" defaultValue={2} size="small" /></td>
            <td>120</td>
            <td>
              <Button variant="contained" color="error" size="small"><Delete/></Button>
              <br></br>
              <Button variant="contained" color="success" size="small"><Edit/></Button>
              <br></br>
              <Button variant="contained"   href='/adminaddform' size="small"><Add/></Button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Admin