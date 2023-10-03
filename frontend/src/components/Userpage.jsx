import { Avatar, Button, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: #d8d8d8;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;
const Cardbody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 11vh;
    flex-direction: column; 
`;
const Menuitem = styled.div`
    flex-direction: column;
    margin-left: 5vh;
`

const Userpage = () => {
    return (
        <Container>
            <Wrapper>
                <div class="card" style={{ width: 300, height: 360 }}>
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <Cardbody>
                                    <Avatar sx={{ width: 100, height: 100 }} src="/broken-image.jpg" />
                                    <Typography>Username</Typography>
                                </Cardbody>
                                <br></br>
                                <Menuitem>
                                    <Button variant="text" style={{ width: 150 }}>Booked tickets</Button>
                                    <br></br>
                                    <Button variant="text" style={{ width: 150 }}>Logout</Button>
                                </Menuitem>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </Container>
    )
}

export default Userpage