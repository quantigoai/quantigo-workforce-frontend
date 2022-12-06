import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Grid from '@mui/material/Unstable_Grid2';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Typography} from '@mui/material';

export const Dashboard = () => {

  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const handletask = () => {
    navigate("/task")
  }
  const handelNda = (e) => {

    e.preventDefault();

  }
  const handleaccount = () => {

    navigate("/editmyprofile")
  }
  var cardStyle = {
    transitionDuration: '0.3s',
    height: '15vw'
  }
  var cardStyleGrid1 = {
    transitionDuration: '0.3s',
    height: '15vw',

  }
  var cardStyleGrid2 = {
    transitionDuration: '0.3s',
    height: '12vw',
  }
  const paperstyle = { padding: '10px 20px', width: 1300, height: 300, margin: "5px auto" }
  const card1style = { padding: '3px 3px', width: 600, height: 250, margin: "5px auto" };
  const card2style = { padding: '3px 3px', width: 600, height: 250, margin: "5px auto" }
  const card3style = { padding: '3px 3px', width: 600, height: 250, margin: "10px auto" }
  const card4style = { padding: '3px 3px', width: 600, height: 250, margin: "10px auto" }
  const carddiv3style1 = { padding: '3px 3px', width: 400, height: 200, margin: "5px auto" }

  const [selectedImage, setSelectedImage] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [imageName, setImageName] = React.useState("");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);

    navigate("/project")

  };
  const handledisagree = () => {
    setOpen(false);
  }
  const handleClickNda = () => {
    navigate("/ndadownload")
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);



  return (

    <div>


      <div style={paperstyle}>
        <Grid container spacing={2} sx={{ position: "relative", bottom: "2px", "paddingTop": "40px" }}>
          <Grid xs={6}>

            <Card className="text-center" style={card1style} >
              <Card.Header as="h5">Start Tasking</Card.Header>
              <Card.Body>
                <Card.Title>Complete you Task Image </Card.Title>
                <Card.Text>
                  Quantigo ai training project  content
                </Card.Text>
                <Button onClick={handletask} variant="primary">Start Tasking</Button>
              </Card.Body>
            </Card>

          </Grid>

          <Grid xs={6}>
            <Card style={card2style} className="text-center" >
              <Card.Header as="h5">Project Start</Card.Header>
              <Card.Body>
                <Card.Title>Your Active Project</Card.Title>
                <Card.Text>
                  Quantigo ai training project  content.
                </Card.Text>
                {user.role === "level_1_annotator"
                  ?
                  <Button disabled variant="primary">project</Button>
                  :
                  <Button onClick={handleClickNda} variant="primary">project</Button>
                }
              </Card.Body>
            </Card>
          </Grid>
          {/* <Grid xs={2}>
        <Card style={cardStyleGrid1} className="text-center" >
        <Card.Header as="h5">{user.name}</Card.Header>
        <Card.Body>
        
        <Card.Text>
          {user.name} Role : {user.role}
        </Card.Text>
          {user.occupation}
         </Card.Body>
        </Card>
        </Grid> */}

        </Grid>



      </div>

      <div style={paperstyle}>
        <Grid container spacing={0} sx={{ position: "relative", bottom: "2px", "paddingTop": "30px" }}>
          <Grid xs={6}>
            <Card style={card3style}>
              <Card.Body>
                <Card.Title>Your PAY</Card.Title>
                <Card.Text>
                  Pending Payment
                  <Typography>$0.00</Typography>
                </Card.Text>
              </Card.Body>

            </Card>
          </Grid>
          <Grid xs={6}>
            <Card style={card4style}>
              <Card.Body>
                <Card.Title>Your Quality Report</Card.Title>
                <Card.Text>
                  Image Annotation
                </Card.Text>
              </Card.Body>

            </Card>
          </Grid>

        </Grid>
      </div>

      <div style={paperstyle}>
        <Grid container spacing={0} sx={{ position: "relative", bottom: "2px", "paddingTop": "40px" }}>
          <Grid xs={4}>
            <Card style={carddiv3style1}>
              <Card.Body>
                <Card.Title>Help Center </Card.Title>
                <Card.Text>
                  Guides and tasking Tips ,support
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Help Center </Button>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card style={carddiv3style1}>
              <Card.Body>
                <Card.Title> Discord Community</Card.Title>
                <Card.Text>
                  Meet fellow tasker and ask question
                </Card.Text>
              </Card.Body>
              <Button variant="primary">Go Discord Community</Button>
            </Card>
          </Grid>
          <Grid xs={4}>
            <Card style={carddiv3style1}>
              <Card.Body>
                <Card.Title>Your Account</Card.Title>
                <Card.Text>
                  Complete your profile to potentially unlock new project and task types
                </Card.Text>
              </Card.Body>
              <Button onClick={handleaccount} variant="primary"> Your Account </Button>
            </Card>
          </Grid>
        </Grid>

      </div>

      <div>
        <div>

          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">Terms and Conditions </DialogTitle>
            <DialogContent dividers={scroll === 'paper'}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                {[...new Array(1)]
                  .map(
                    () => `During the term of this Agreement, Recipients may receive and otherwise be exposed to Company’s or its
                customers’ confidential and/or proprietary information relating to Company’s or its customers’ business,
                strategies, and technologies, whether or not stored in any medium (the “Confidential Information”).
                Confidential Information includes, but not limited to images (simulated, rendered, or real), customers,
                prospective customers, suppliers, vendors, contractors, employees, systems, procedures, processes, policies,
                the Company’s technology, technical information, copyrights, models, drawings, designs, specifications,
                architectural plans, design plans, prototypes, computer programs or modules, ideas for computer programs
                or modules, source code, data (including, but not limited to, classification data, labelling, metadata),
                classification criteria / approaches, software modules and related documentation, know-how, algorithms,
                research and development information, trade secrets, business strategies, business opportunities, business
                plans, financial information, such as pricing and rate information, privileged information, including advice
                received from professional advisors such as legal counsel and financial advisors, information contained in
                the Company's manuals, training materials, plans, drawings, designs, specifications and other documents
                and records belonging to the Company, even if such information has not been labeled or identified as
                confidential, marketing opportunities and methodologies, as well as contacts, the business and organization
                of the Company and its business leads and sources of referral, and any other information which is
                confidential by its nature and proprietary to the Company that is not a matter of public record, such
                information disclosed in written form, orally, or in the form of magnetic recording or some other machine
                readable form or acquired by observation.
                

                `,
                  )
                  .join('\n')}
              </DialogContentText>
              <spam>Name:  {user.name}</spam>
              <br />
              <spam>Signature:       </spam>
              <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  setSelectedImage(event.target.files[0]);

                }}
              />
              {selectedImage && (
                <div>
                  <img
                    alt="not fount"
                    width={"100px"}
                    src={URL.createObjectURL(selectedImage)}
                  />
                  <br />
                  <button onClick={() => setSelectedImage(null)}>Remove</button>
                </div>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handledisagree}>Disagree</Button>
              {/* {files[0].name===""} */}
              <Button onClick={handleClose}>Agree</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>


    </div>
  )
}
