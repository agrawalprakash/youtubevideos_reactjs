import { Container,
         Card,
         CardBody,
         CardTitle,
         CardSubtitle,
         CardText,
         CardFooter,
         Button,
        } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import YoutubeEmbed from "./YoutubeEmbed";

const Video = ({ video, update }) => {

    const deleteVideo=(id)=> {
            axios.delete(`${base_url}/videos/${id}`).then(
                (response)=> {
                        toast.success("Video deleted");
                        update(id);
                }, (errror)=> {
                    toast.error("Video did not get deleted, resolve at server side");
                }
            )
    }

    return (

        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{video.title}</CardSubtitle>
                <CardText> {video.description}</CardText>
                <YoutubeEmbed embedId= {video.url} />
                <Container className="text-center">
                    <Button 
                        color="danger"
                        onClick={() => {
                            deleteVideo(video.id);
                        }}>Delete</Button>
                </Container>
            </CardBody>
        </Card>

    );

}

export default Video;