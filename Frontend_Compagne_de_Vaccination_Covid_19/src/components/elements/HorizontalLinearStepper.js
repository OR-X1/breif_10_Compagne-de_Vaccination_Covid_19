import * as React from 'react';
import axios from "axios";

import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Box, Button, Typography } from '@mui/material';

import _ from "lodash";


// stepp seting


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage:
      //   'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',

      backgroundColor: '#0E906F',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      // backgroundImage:
      //   'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      backgroundColor: '#0E906F',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    backgroundColor: '#61CE70',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    backgroundColor: '#61CE70',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};





// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const steps = ['Dose', 'Add your Information',];


export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if(activeStep === steps.length - 1){

        const form_data = {
          cin: cin,
          tel: tel,
          email: email,
          adress: adress,
          nbr_dose:dose,
          effect:effect,
          malade: malade,
          traitement: traitement
          }

        console.log(form_data);
        setTimeout(() => {
        axios.post('http://localhost:3000/api/user/store',form_data
            ).then(response => {

                if(response.data.result){
                    console.log('good')
                        // window.location.reload()
                }else{
                    console.log("error");
                }

            }).catch(error =>{
                
                console.log("error"+error);
            }
            )
        }, 1000);

      console.log("login");
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

    }else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };




  // dose ----------------------------------------------
  const [dose, setDose] = React.useState('');
  const malades = [{ 'id':'malade 1'}, { 'id':'malade 2'}, { 'id':'malade 3'}, { 'id':'auther'}];
  const traitements = ['traitement 1', 'traitement 2', 'traitement 3'];

  const [malade, setMalade] = React.useState('null');
  const [traitement, setTraitement] = React.useState('');

  const [effect, setEffect] = React.useState('null');

  React.useEffect(()=>{
    const maladeValue = _.findIndex(malades, { 'id':malade} );
    setTraitement(traitements[maladeValue])
  },[malade])


const [cin, setCin] = React.useState('');
const [tel, setTel] = React.useState('');
const [adress, setAdress] = React.useState('');
const [email, setEmail] = React.useState('');


// console.log(maladeValue);
console.log("traitement : "+traitement);


  let numbers = '';
  if(activeStep === 0){
    numbers= (
      <div>
          <form  className=' mt-5  d-flex justify-content-evenly'>
            <div class="mb-3 form-check">
              <input 
                    type="radio" 
                    class="form-check-input" 
                    value="dose1" 
                    name="dose" 
                    id="exampleCheck1"
                onChange={(e) => setDose(e.target.value)}
                    />
              <label class="form-check-label" for="exampleCheck1">Dose 1</label>
            </div>
            <div class="mb-3 form-check">
              <input 
                    type="radio" 
                    class="form-check-input" 
                    value="dose2" 
                    name="dose" 
                    id="exampleCheck2"
                onChange={(e) => setDose(e.target.value)}
                    />
              <label class="form-check-label" for="exampleCheck2">Dose 2</label>
            </div>
            <div class="mb-3 form-check">
              <input 
                    type="radio" 
                    class="form-check-input" 
                    value="dose3" 
                    name="dose" 
                    id="exampleCheck3"
                onChange={(e) => setDose(e.target.value)}
                    />
              <label class="form-check-label" for="exampleCheck3">Dose 3</label>
            </div>
          </form>

          {(() => {
            if (dose === "dose1") {
              return (
                <div className='m-5 d-flex justify-content-center'>
                  <div className=' col-6'>
                    <div class="mb-3">
                      <select 
                          className='form-select'
                          value={ malade }
                          onChange={(e) => setMalade(e.target.value)}>

                          {malades.map((item , index) => (

                            <option key={index} value={item.id}>{item.id}</option>

                          ))}
                      </select>
                    </div>
                    {malade === "auther" ? (
                       <div class="mb-3">
                        <label for="traitement" class="form-label">type traitement</label>
                        
                        <input type="text" class="form-control" id="traitement" aria-describedby="emailHelp" onChange={(e) => setTraitement(e.target.value)} value={traitement}/>
                      </div>
                    ) : (
                      <div class="mb-3">
                        <label for="traitement" class="form-label">traitement</label>
                        
                        <input type="text" disabled class="form-control" id="traitement" aria-describedby="emailHelp" onChange={(e) => setTraitement(e.target.value)} value={traitement}/>
                        
                      </div>
                    )}
                    {traitement}
                  </div>
                </div>
              )
            } else if (dose === "dose2") {
              return (
                <div className='m-5 '>
                  <p className='text-center '>Do you have any effect from the dose 1</p>
                    <form className='d-flex justify-content-evenly m-4'>
                    <div class="mb-3 form-check">
                      <input 
                            type="radio" 
                            class="form-check-input" 
                            value="no" 
                            name="dose2" 
                            id="exampleCheckEffect1"
                        onChange={(e) => setEffect(e.target.value)}
                            />
                      <label class="form-check-label" for="exampleCheckEffect1">No</label>
                    </div>
                    <div class="mb-3 form-check">
                      <input 
                            type="radio" 
                            class="form-check-input" 
                            value="yes" 
                            name="dose2" 
                            id="exampleCheckEffect2"
                            onChange={(e) => setEffect(e.target.value)}
                            />
                      <label class="form-check-label" for="exampleCheckEffect2">Yes</label>
                    </div>
                  </form><br />

                  {(() => {
                    if(effect === "yes"){
                      return (
                        <div className='d-flex justify-content-center'>
                          <div class="mb-3 col-6 ">
                          <label for="effect1" class="form-label">type you effect</label>
                          <input type="email" class="form-control" id="effect1" aria-describedby="emailHelp" />
                        </div>
                        </div>
                      )
                    }else if(effect === "no"){
                      return (
                        <p className='text-center'>3la slamtk</p>
                      )
                    }else{
                      return (
                        <></>
                      )
                    }
                  })()}
                </div>
              )
            } else {
              return (
                <div className='m-5 '>
                  <p className='text-center '>Do you have any effect from the dose 2</p>
                    <form className='d-flex justify-content-evenly m-4'>
                    <div class="mb-3 form-check">
                      <input 
                            type="radio" 
                            class="form-check-input" 
                            value="no" 
                            name="dose3" 
                            id="exampleCheckEffect3"
                        onChange={(e) => setEffect(e.target.value)}
                            />
                      <label class="form-check-label" for="exampleCheckEffect3">No</label>
                    </div>
                    <div class="mb-3 form-check">
                      <input 
                            type="radio" 
                            class="form-check-input" 
                            value="yes" 
                            name="dose3" 
                            id="exampleCheckEffect4"
                            onChange={(e) => setEffect(e.target.value)}
                            />
                      <label class="form-check-label" for="exampleCheckEffect4">Yes</label>
                    </div>
                  </form><br />


                  {(() => {
                    if(effect === "yes"){
                      return (
                        <div className='d-flex justify-content-center'>
                          <div class="mb-3 col-6 ">
                          <label for="effect2" class="form-label">type you effect</label>
                          <input type="email" class="form-control" id="effect2" aria-describedby="emailHelp" />
                        </div>
                        </div>
                      )
                    }else if(effect === "no"){
                      return (
                        <p className='text-center'>3la slamtk</p>
                      )
                    }else{
                      return (
                        <></>
                      )
                    }
                  })()}
                </div>
              )
            }
        })()}
      </div>
    );
  }else if(activeStep === 1){
  numbers= (
    <div className='my-5 d-flex justify-content-center'>
      <form className='col-6'>
            <div class="mb-3">
              <label for="info1" class="form-label">CIN</label>
              <input type="text" class="form-control" id="info1" aria-describedby="emailHelp" value={cin}  onChange={e => setCin(e.target.value)} />
            </div>
            <div class="mb-3">
              <label for="info2" class="form-label">Tel</label>
              <input type="number" class="form-control" id="info2" value={tel}  onChange={e => setTel(e.target.value)} />
            </div>
            <div class="mb-3">
              <label for="info1" class="form-label">Adress</label>
              <input type="text" class="form-control" id="info1" aria-describedby="emailHelp" value={adress}  onChange={e => setAdress(e.target.value)} />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}  onChange={e => setEmail(e.target.value)} />
            </div>
          </form>
    </div>
  );
  }
  return (
    <Box sx={{ width: '100%' }}>

      <Stack sx={{ width: '100%' }} spacing={4}>
      
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
        
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            
          {/* { numbers[activeStep]} */}

          {numbers}

          <br />

          

          

          <br />
          
          {/* <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
          </form> */}

          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            <button type="button" onClick={handleNext}   class="btn btn-primary">
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
            {/* <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button> */}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}