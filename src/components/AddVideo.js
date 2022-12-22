import React, { useEffect , useState } from 'react';
import {Container, Form, FormGroup, Input, Button, ToastHeader } from 'reactstrap';

import axios from "axios";
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const AddVideo=()=> {

    useEffect = (()=> {
        document.title = "Add Videos";
    }, []);

   const [video, setVideo] = useState({});

   const handleForm = (e) => {
        console.log(video);
        postDataToServer(video);
        e.preventDefault();
    }

    const postDataToServer = (data) => {
        axios.post(`${base_url}/videos`, data).then(
            (response)=> {
                    console.log(response);
                    console.log("success");
                    toast.success("Video channel added successfully");
            }, (error)=> {
                    console.log(error);
                    console.log("error");
                    toast.error("Error ! Something went wrong");
            }
        )
    };

    return (
    <div>
        <h1 className="text-center my-3" >Fill the Video Details</h1>
        <Form onSubmit={handleForm}>
            <FormGroup>
                <label for = "id">Video Id</label>
                <Input 
                        type="text" 
                        placeholder="Enter here" 
                        name="id"
                        id="id"
                        onChange={(e)=> {
                            setVideo({...video, id: e.target.value});
                        }}
                  />      

            </FormGroup>

            <FormGroup>
                <label for="title">Video Title</label>
                <Input 
                        type="text" 
                        placeholder="Enter title here"
                        id="title"
                        onChange = {(e) => {
                            setVideo({...video, title: e.target.value})
                        }}
                        />
 
            </FormGroup>

            <FormGroup>
                <label for="description">Video Description</label>
                <Input 
                        type="textarea" 
                        placeholder="Enter description here"
                        id="description"
                        style={{ height: 150 }}
                        onChange={(e) => {
                            setVideo({...video, description: e.target.value})
                        }}
                        />
            </FormGroup>

            <FormGroup>
                <label for="url">Video URL</label>
                <Input 
                        type="text" 
                        placeholder="Enter URL here"
                        id="url"
                        onChange={(e) => {
                            setVideo({...video, url: e.target.value})
                        }}
                        />
            </FormGroup>
        <Container className="text-center">
            <Button type="submit" color="success">Add Video</Button>
            <Button 
            type="reset" 
            color="warning ml-2" 
            onClick ={() => {
                setVideo({id: "", title: "", description: "", url: ""});
            }}>Clear</Button>
        </Container>

        </Form>



    </div>
    );

};

export default AddVideo;