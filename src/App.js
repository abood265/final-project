import "./App.css";
import SimpleCard from '../src/Cards/SimpleCard.js';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  girdContainer:{
    paddingLeft:"40px",
    paddingRight:"40px",
    paddingTop:"30px"
   
  }
});

function App() {
  const classes =useStyles();
  let cardsInfo=[
    {name:'William James',des:"Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains" ,  
    url:"https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg"},
    { name:"Mason Walker" ,  des:"Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
    url:"https://therapidian.org/sites/default/files/article_images/jamesperson.jpg"},
    {
      name:"Emma Cooper" ,des:"Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
      url:"https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg",
    },
    {name:"Sophia Clark", des:"Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains",
    url:"https://4.bp.blogspot.com/-ZIAhd7LD2ig/W3xRzvE1YWI/AAAAAAAATeg/rZSoQk0jikkulFQJvX44kRZGBPocZoKTACLcBGAs/s1600/2.png",},
  ]
  return (
    <div>
      <div class="header">
  <a href="#default" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
    <h1 style={{display:'flex',justifyContent:'center',fontFamily:'sans-serif',color:'blue'}}>Motion graphics</h1>
    <p style={{fontWeight:'bold',paddingLeft:'40px',paddingRight:'40px',fontFamily:'sans-serif'}}>Motion graphics (sometimes mograph) are pieces of animation or digital footage which create the illusion of motion or rotation, and are usually combined with audio for use in multimedia projects. Motion graphics are usually displayed via electronic media technology, but may also be displayed via manual powered technology (e.g. thaumatrope, phenakistoscope, stroboscope, zoetrope, praxinoscope, flip book). The term distinguishes static graphics from those with a transforming appearance over time, without over-specifying the form.[1] While any form of experimental or abstract animation can be called motion graphics, the term typically more explicitly refers to the commercial application of animation and effects to video, film, TV, and interactive applications. Motion graphics are exceptional way to communicate with viewer, and it can add depth to the story. Also it can give us a message by music and effective copy together, they use it to create ads, television title sequence, explaining a concept, and share a product video that help to communicate their message.</p>
  
    <Grid container spacing={4} className={classes.girdContainer}  justify = "center">
     
    
      {cardsInfo.map((cardinfo)=> <Grid item xs={12} sm={6} md={3}><SimpleCard name={cardinfo.name}  des={cardinfo.des}
       url={cardinfo.url}/> </Grid>)} </Grid>

    
     </div>
  );
}

export default App;
