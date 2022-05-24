import React from "react";
import { 
    Typography, 
    Divider
} from '@mui/material';
import { validarChampName, validarChamp } from './components/ValidaId'

//imports images
import Unranked from "../assets/ranks/Unranked.png";
import Bronze from "../assets/ranks/Emblem_Bronze.png";
import iron from "../assets/ranks/Emblem_Iron.png";
import silver from "../assets/ranks/Emblem_Silver.png";
import gold from "../assets/ranks/Emblem_Gold.png";
import platinum from "../assets/ranks/Emblem_Platinum.png";
import diamond from "../assets/ranks/Emblem_Diamond.png";
import grandmaster from "../assets/ranks/Emblem_Grandmaster.png";
import master from "../assets/ranks/Emblem_Master.png";
import challenger from "../assets/ranks/Emblem_Challenger.png";
//imports masterys
import Mastery_1 from "../assets/masterys/Mastery_Level_1.png";
import Mastery_2 from "../assets/masterys/Mastery_Level_2.png";
import Mastery_3 from "../assets/masterys/Mastery_Level_3.png";
import Mastery_4 from "../assets/masterys/Mastery_Level_4.png";
import Mastery_5 from "../assets/masterys/Mastery_Level_5.png";
import Mastery_6 from "../assets/masterys/Mastery_Level_6.png";
import Mastery_7 from "../assets/masterys/Mastery_Level_7.png";


function ContentPage({ dataRanked, dataSummoner, dataMastery }) {

    const validarElo = (elo) => {
        switch (elo) {
          case "":
            return <img style={{width: 300, height: 300}} src={Unranked} alt="elo" />;
          case "BRONZE":
            return <img style={{width: 300, height: 300}} src={Bronze} alt="elo" />;
          case "IRON":
            return <img style={{width: 300, height: 300}} src={iron} alt="elo" />;
          case "SILVER":
            return <img style={{width: 300, height: 300}} src={silver} alt="elo" />;
          case "GOLD":
            return <img style={{width: 300, height: 300}} src={gold} alt="elo" />;
          case "PLATINUM":
            return <img style={{width: 300, height: 300}} src={platinum} alt="elo" />;
          case "DIAMOND":
            return <img style={{width: 300, height: 300}} src={diamond} alt="elo" />;
          case "GRANDMASTER":
            return <img style={{width: 300, height: 300}} src={grandmaster} alt="elo" />;
          case "MASTER":
            return <img style={{width: 300, height: 300}} src={master} alt="elo" />;
          case "CHALLENGER":
            return <img style={{width: 300, height: 300}} src={challenger} alt="elo" />;
          default: break;
        }
    }

    

    const validarMastery = (mastery) => {
        switch (mastery) {
          case 1:
            return(
                <div style={{borderStyle: 'solid', borderColor: '#725a34 #725a34 transparent #725a34' ,borderWidth: '85px 70px 25px', marginTop: 200}} className='flex justify-center items-center absolute bg-white z-0' alt="mastery">
                    <img
                    alt='mastery 1'
                    style={{width: 100, height: 100}}
                    className="rounded-full absolute z-0'"
                    src={Mastery_1}
                    />
                </div>
            )
          case 2:
            return(
                <div style={{borderStyle: 'solid', borderColor: '#725a34 #725a34 transparent #725a34' ,borderWidth: '85px 70px 25px', marginTop: 200}} className='flex justify-center items-center absolute bg-white z-0' alt="mastery">
                    <img
                    alt='mastery 2'
                    style={{width: 100, height: 100}}
                    className="rounded-full absolute z-0'"
                    src={Mastery_2}
                    />
                </div>
            )
          case 3:
            return(
                <div style={{borderStyle: 'solid', borderColor: '#725a34 #725a34 transparent #725a34' ,borderWidth: '85px 70px 25px', marginTop: 200}} className='flex justify-center items-center absolute bg-white z-0' alt="mastery">
                    <img
                    alt='mastery 3'
                    style={{width: 100, height: 100}}
                    className="rounded-full absolute z-0'"
                    src={Mastery_3}
                    />
                </div>
            )
          case 4:
            return(
                <div style={{borderStyle: 'solid', borderColor: '#725a34 #725a34 transparent #725a34' ,borderWidth: '85px 70px 25px', marginTop: 200}} className='flex justify-center items-center absolute bg-white z-0' alt="mastery">
                    <img
                    alt='mastery 4'
                    style={{width: 100, height: 100}}
                    className="rounded-full absolute z-0'"
                    src={Mastery_4}
                    />
                </div>
            )
          case 5:
            return(
                <div style={{borderStyle: 'solid', borderColor: '#771a18 #771a18 transparent #771a18' ,borderWidth: '85px 70px 25px', marginTop: 200}} className='flex justify-center items-center absolute bg-white z-0' alt="mastery">
                    <img
                    alt='mastery 5'
                    style={{width: 100, height: 100}}
                    className="rounded-full absolute z-0'"
                    src={Mastery_5}
                    />
                </div>
            )
          case 6:
            return(
                <div style={{borderStyle: 'solid', borderColor: '#72186f #72186f transparent #72186f' ,borderWidth: '85px 70px 25px', marginTop: 200}} className='flex justify-center items-center absolute bg-white z-0' alt="mastery">
                    <img
                    alt='mastery 6'
                    style={{width: 100, height: 100}}
                    className="rounded-full absolute z-0'"
                    src={Mastery_6}
                    />
                </div>
            )
          case 7:
            return(
                <div style={{borderStyle: 'solid', borderColor: '#1960d1 #1960d1 transparent #1960d1' ,borderWidth: '85px 70px 25px', marginTop: 200}} className='flex justify-center items-center absolute bg-white z-0' alt="mastery">
                    <img
                    alt='mastery 7'
                    style={{width: 100, height: 100}}
                    className="rounded-full absolute z-0'"
                    src={Mastery_7}
                    />
                </div>
            )
          default: break;
        }
    }

    return (
        <React.Fragment>
            <div className="flex flex-col w-full align-center justify-center pb-24">
                <div className="flex flex-col items-center">
                    

                    <div className="flex flex-col justify-center items-center pt-20 w-full" style={{background:'#ff46460d'}}>

                        <Typography variant="h4" className="pt-2 pb-2 uppercase"  style={{fontWeight: 800, color:'#f44336'}}>Summoner</Typography>

                        <div style={{width: 255, height: 255, background: '#f44336', borderRadius: '100%'}} className='flex flex-col justify-center items-center'>

                            <img
                            alt=''
                            style={{width: 225, height: 225}}
                            className="rounded-full"
                            src={`http://ddragon.leagueoflegends.com/cdn/12.8.1/img/profileicon/${dataSummoner.profileIconId}.png`}
                            />

                            <div style={{width: 70, height: 30, border: 'solid 3px #f44336', borderRadius: 70, marginTop: 240}} className='flex justify-center items-center absolute bg-white'>
                                <Typography variant="h5"  style={{fontWeight: 800, color:'#f44336'}}>{dataSummoner.summonerLevel}</Typography>
                            </div>

                        </div>
                        <Typography variant="h5" className="pt-8"  style={{fontWeight: 800, color:'#f44336'}}>{dataSummoner.name}</Typography>
                        <Divider style={{width: '78%', borderColor: '#f44336'}} className='pt-10' />

                    </div>
                    
                    
                    <div className="flex flex-col items-center justify-center pt-10 pb-10 flex-wrap w-full">

                        <div className="flex items-center justify-center flex-wrap">
                            <Typography variant="h4" className="pt-2 pr-2 uppercase"  style={{fontWeight: 800, color:'#f44336'}}>maestrias</Typography>
                        </div>

                        <div className="flex justify-center items-center pt-20 pb-36 flex-wrap">

                            <div style={{paddingBottom: 30}} className="flex flex-col items-center justify-center">

                                <div  style={{paddingBottom: 100}} className="flex flex-col items-center justify-center px-10 pt-20 pb-10 flex-wrap">

                                    <div style={{width: 170, height: 170, background: 'linear-gradient(179deg, rgb(255 0 0), rgb(225 0 229))', borderRadius: '100%'}} className='flex flex-col justify-center items-center z-10'>

                                        <img
                                        alt=''
                                        style={{width: 155, height: 155}}
                                        className="rounded-full"
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Chogath.png`}
                                        />

                                    </div>

                                    {validarMastery(dataMastery[1].championLevel)}
                                </div>
                                <Typography variant="h5" className="pt-2 pr-2 uppercase" style={{fontWeight: 800, color:'#f44336'}}>{validarChampName(dataMastery[1].championId)}</Typography>
                                <Typography variant="h5" className="pt-2 pr-2" style={{fontWeight: 800, color:'#f44336'}}>{dataMastery[1].championPoints.toLocaleString()} pts</Typography>
                            </div>

                            <div style={{paddingBottom: 40}} className="flex flex-col items-center justify-center">

                                <div style={{paddingBottom: 100}} className="flex flex-col items-center justify-center px-10 flex-wrap">

                                    <div style={{width: 170, height: 170, background: 'linear-gradient(179deg, rgb(255 0 0), rgb(225 0 229))', borderRadius: '100%'}} className='flex flex-col justify-center items-center z-10'>

                                        <img
                                        alt=''
                                        style={{width: 155, height: 155}}
                                        className="rounded-full"
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${validarChamp(dataMastery[0].championId)}.png`}
                                        />

                                    </div>
                                    {validarMastery(dataMastery[0].championLevel)}
                                </div>
                                <Typography variant="h5" className="pt-2 pr-2 uppercase" style={{fontWeight: 800, color:'#f44336'}}>{validarChampName(dataMastery[0].championId)}</Typography>
                                <Typography variant="h5" className="pt-2 pr-2"  style={{fontWeight: 800, color:'#f44336'}}>{dataMastery[0].championPoints.toLocaleString()} pts</Typography>
                            </div>

                            <div style={{paddingBottom: 30}} className="flex flex-col items-center justify-center">

                                <div style={{paddingBottom: 100}} className="flex flex-col items-center justify-center px-10 pt-20 pb-10 flex-wrap">

                                    <div style={{width: 170, height: 170, background: 'linear-gradient(179deg, rgb(255 0 0), rgb(225 0 229))', borderRadius: '100%'}} className='flex flex-col justify-center items-center z-10'>

                                        <img
                                        alt=''
                                        style={{width: 155, height: 155}}
                                        className="rounded-full"
                                        src={`http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/Yasuo.png`}
                                        />

                                    </div>

                                    {validarMastery(dataMastery[2].championLevel)}
                                </div>
                                <Typography variant="h5" className="pt-2 pr-2 uppercase" style={{fontWeight: 800, color:'#f44336'}}>{validarChampName(dataMastery[2].championId)}</Typography>
                                <Typography variant="h5" className="pt-2 pr-2"  style={{fontWeight: 800, color:'#f44336'}}>{dataMastery[2].championPoints.toLocaleString()} pts</Typography>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center  w-full" style={{background:'#ff46460d'}}>
                        <Divider style={{width: '78%', borderColor: '#f44336'}} />

                        <div className="flex items-center justify-center py-16 flex-wrap">
                            <Typography variant="h4" className="pt-2 pr-2 uppercase"  style={{fontWeight: 800, color:'#f44336'}}>ranked</Typography>
                            <Typography variant="h4" className="pt-2 uppercase"  style={{fontWeight: 800, color:'#f44336'}}>queue</Typography>
                        </div>

                    </div>


                    <div className="flex flex-row items-end justify-center pt-10 pb-10 flex-wrap w-full" style={{background:'#ff46460d'}}>

                        <div style={{width: 500}} className="flex flex-col items-center justify-center">
                            {validarElo(`${dataRanked[0].tier == null ? '' : dataRanked[0].tier}`)}

                            <Typography variant="h5" className="uppercase" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[0].queueType === 'RANKED_SOLO_5x5' && 'SOLO/DUO' }{dataRanked[0].queueType === 'RANKED_TFT_PAIRS' && 'TFT' }{dataRanked[0].queueType === 'RANKED_FLEX_SR' && 'FLEX 5V5' }</Typography>
                            <Typography variant="h4" className="uppercase" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[0].tier == null ? 'UNRANKED' : dataRanked[0].tier} {dataRanked[0].rank}</Typography>
                            {dataRanked[0] !== '' ? <Typography variant="h5" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[0].wins} Vitórias | {dataRanked[0].leaguePoints} pdl</Typography> : ''}

                            <Divider style={{width: '60%', borderColor: '#f44336'}} className='pt-10' />
                        </div>
                        

                        <div style={{width: 500}} className="flex flex-col items-center justify-center">
                            {validarElo(`${dataRanked[1].tier == null ? '' : dataRanked[1].tier}`)}

                            <Typography variant="h5" className="uppercase" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[1].queueType === 'RANKED_SOLO_5x5' && 'SOLO/DUO' }{dataRanked[1].queueType === 'RANKED_TFT_PAIRS' && 'TFT' }{dataRanked[1].queueType === 'RANKED_FLEX_SR' && 'FLEX 5V5' }</Typography>
                            <Typography variant="h4" className="uppercase" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[1].tier == null ? 'UNRANKED' : dataRanked[1].tier} {dataRanked[1].tier === null ? '' : dataRanked[1].rank}</Typography>
                            {dataRanked[1] !== '' ? <Typography variant="h5" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[1].wins} Vitórias | {dataRanked[1].leaguePoints} pdl</Typography> : ''}

                            <Divider style={{width: '60%', borderColor: '#f44336'}} className='pt-10' />
                        </div>

                        <div style={{width: 500}} className="flex flex-col items-center justify-center">
                            {validarElo(`${dataRanked[2].tier == null ? '' : dataRanked[2].tier}`)}

                            <Typography variant="h5" className="uppercase" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[2].queueType === 'RANKED_SOLO_5x5' && 'SOLO/DUO' }{dataRanked[2].queueType === 'RANKED_TFT_PAIRS' && 'TFT' }{dataRanked[2].queueType === 'RANKED_FLEX_SR' && 'FLEX 5V5' }</Typography>
                            <Typography variant="h4" className="uppercase" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[2].tier == null ? 'UNRANKED' : dataRanked[2].tier} {dataRanked[2].rank}</Typography>
                            {dataRanked[2] !== '' ? <Typography variant="h5" style={{fontWeight: 800, color:'#f44336'}}>{dataRanked[2].wins} Vitórias | {dataRanked[2].leaguePoints} pdl</Typography> : ''}

                            <Divider style={{width: '60%', borderColor: '#f44336'}} className='pt-10' />
                        </div>


                    </div>
                    

                </div>
                    
                
            </div>
        </React.Fragment>
    )
}

export default ContentPage;