import React, { useState } from "react";
import ContentResult from './ContenteResult'
import { 
    FormControl,
    Select, 
    MenuItem, 
    InputLabel, 
    TextField, 
    Button, 
    Typography, 
    CircularProgress, 
    Divider
} from '@mui/material';
import Factory from "../../services/endpoints/Factory";
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';



const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
}));

const ContentPage = () => {
    const [loading, setLaoding] = React.useState(false)
    const [dataSummoner, setDataSummoner] = useState([])
    const [dataRanked, setDataRanked] = useState([])
    const [dataRankedTft, setDataRankedTft] = useState([])
    const [summitSummoner, setSummitSummoner] = useState([])
    const [dataMastery, setDataMastery] = useState([])
    const [values, setValues] = React.useState({
        nickname: '',
          contry: '',
    });

    /*     const handleChange = (event) => {
        setValues(event.target.value);
    }; */

    /* useEffect(()=>{
        if(status == true){
            setDisabledDanfeDowload(false);
        }else{
            setDisabledDanfeDowload(true);
        }
    },[status]); */

    /* useEffect(()=>{
        console.log(values)
    }) */

    const handleChangeValue = name => event => {
        setValues({ ...values, [name]: event.target.value });  
    };

    const sumitSummoner = async () =>{

        setLaoding(true);

        if (values.nickname === "") {
            window.alert("inform your nickname");
            setLaoding(false);
            return
        }

        const response = await Factory.getNicknameBR({
            nickname: values.nickname,
              contry: values.contry
        });

        
        setSummitSummoner(response)
        setDataSummoner(response.dataSummoner)
        setDataRanked(response.dataRanked)
        setDataMastery(response.dataMastery)
        setDataRankedTft(response.dataRankedTft)
        setLaoding(false);

        console.log(response)
    }

    return (
        <React.Fragment>
            <div className="flex flex-col w-full align-center justify-center">
                <div className="flex flex-col pt-32 items-center flex-wrap">

                    <div className="flex flex-row align-center justify-center mb-16 flex-wrap" >
                        <Typography variant="h4" className="pr-2 uppercase" >Inform your</Typography>
                        <Typography variant='h4' fontWeight={600} className="text-red uppercase" >Nickname</Typography>
                    </div>

                    <div className="flex w-100 justify-center flex-wrap">

                        <div className='mx-5 mb-5'>
                            <TextField
                                style={{minWidth: 290}}
                                id="outlined-basic" 
                                label="Your Nickname" 
                                variant="outlined" 
                                value={values.nickname}
                                onChange={handleChangeValue('nickname')}
                            />

                        </div>

                        <div style={{width: 290}} className="flex w-100 justify-between">

                            <FormControl className="">
                                <InputLabel id="demo-simple-select-label">Your Contry</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.contry}
                                label="Your Contry"
                                onChange={handleChangeValue('contry')}
                                style={{width:180}}
                                >
                                <MenuItem value='BR'>BR</MenuItem>
                                <MenuItem value='EUW'>EUW</MenuItem>
                                <MenuItem value='JP'>JP</MenuItem>
                                </Select>
                            </FormControl>

                            <ColorButton
                                style={{width:90, height:56, fontWeight: 'bold', boxShadow: 'none',}}
                                variant="contained"
                                size={"large"}
                                onClick={()=>sumitSummoner()}
                            >
                                Summit
                            </ColorButton>
                        </div>
                        
                    </div>
                    
                    {loading &&
                    
                        <CircularProgress className="m-0" />
    
                    }

                    <Divider className='pt-32' style={{width: '100%'}} />

                </div>
                { (summitSummoner.length === 0) 

                    ?
                    <div></div>
                    :
                    <ContentResult dataSummoner={dataSummoner} dataRanked={dataRanked} dataRankedTft={dataRankedTft} summitSummoner={summitSummoner} dataMastery={dataMastery} loading={loading} />
                }
            </div>
        </React.Fragment>
    )
}

export default ContentPage;