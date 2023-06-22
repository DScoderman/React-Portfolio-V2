// import ButtonComponent from "../../../Components/Button"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img from '../../../Images/CodingDog.jpg';
import { Button, CardActionArea, CardActions } from '@mui/material';

// import CodingDog from '../../Images/Coding-Dog.jpg'
import uuid from 'react-uuid';
import { blue } from '@mui/material/colors';

const ProjectCardComponent = ({ project }) => {

    // console.log(props)
    // const {project} = props
    // const handleButtonPress = () => alert("You pressed a project!")


    // const otherPress = () => alert("You did something else!")

    console.log(project)
    return (
        <Card sx={{ maxWidth:250, m:10}}>
          <CardActionArea>
            <a href={project.websiteLink}>
            <CardMedia
            
              component="img"
              height="140"
             image={img}
          
             key="uuid()"
              alt="Coding dog"
            /> </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
            
              <a style = {{color:"blue "}}href={project.repoLink}>Click here for the repo link</a>
            </Button>
          </CardActions>
        </Card>
      );
}

export default ProjectCardComponent