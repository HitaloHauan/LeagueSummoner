import { Typography, } from "@mui/material";
import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Footer = () => {

    return(
        <div className='flex justify-center items-center w-full fixed inset-x-0 bottom-0 z-10' style={{height: 70, background: '#bb242f'}}>

            <div className='flex justify-center items-center flex-wrap px-2'>
                <Typography fontWeight={600} className="text-white pr-2">Desenvolvido por</Typography>
                <Typography fontWeight={600} className="text-white text-center">Hitalo Hauan</Typography>
            </div>

            <div className='flex justify-center align-center px-5 '>

                <a className='no-underline px-2' style={{textDecoration: 'none'}} href='https://www.linkedin.com/in/hitalo-hauan-lacerda-avan%C3%A7o-90523a197/' rel="noopener">
                    <div className='flex flex-row justify-start items-center flex-nowrap pb-2'>
                        <LinkedInIcon className='pr-2' style={{color: 'white', fontSize: 30}} />
                        <Typography fontWeight={600} className="text-white">Linkedin</Typography>
                    </div>
                </a>

                <a className='no-underline px-2' style={{textDecoration: 'none'}} href='https://github.com/HomunculusAdvence' rel="noopener">
                    <div className='flex flex-row justify-start items-center flex-nowrap'>
                        <GitHubIcon className='pr-2' style={{color: 'white', fontSize: 30}} />
                        <Typography fontWeight={600} className="text-white">GitHub</Typography>
                    </div>
                </a>
                
            </div>

        </div>
    )

}

export default Footer