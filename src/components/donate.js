import React, { Component } from 'react';
import gpayImg from '../assets/gpay.png';

class DonationPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div style={{backgroundColor:"#E44652",minHeight:"calc( 100% )"}}>
                <div style={{ width:"100%",height:"80%",borderTopRightRadius:" 100% 100%",backgroundColor:"#FAF8F0 ",boxShadow:"inset -10px 10px 10px gray",marginTop:"30px"}}>
                </div>
                <div style={{width:"100%",height:"20%",backgroundColor:"#FAF8F0 "}}>
                </div>
                <div style={{position:"absolute",display:"flex",flexDirection:"row",top:"100px",justifyContent:"space-between",width:"100%",alignItems:"center"}}>
                    <div style={{display:"flex",flexDirection:"column",margin:"50px",width:"70%"}}>
                        <div style={{fontFamily: "'Bebas Neue', cursive",fontSize:"80px",color:"#282726"}}>
                            WE RISE BY<br/> LIFTING OTHERS
                        </div>
                        <div style={{display:"flex",flexDirection:"row",alignItems:"flex-end"}}>
                            <span style={{color:"#E44652",fontWeight:"bold",paddingRight:"10px",paddingBottom:"1px",fontSize:"20px"}}>
                                DONATE
                            </span>
                            <span style={{fontWeight:"500",fontSize:"25px"}}>
                                US
                            </span>
                        </div>
                        <div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
                            <div style={{ width:"3px",backgroundColor:"#E44652",marginLeft:"8px"}}/>
                            <div style={{display:"flex",flexDirection:"row",width:"100%",padding:"10px",paddingRight:"50px",paddingLeft:"50px"}}>
                                <div style={{marginRight:"50px",borderRadius:"20px",border:"2px solid #043353 ",width:"25%",backgroundImage:`url("https://i.pinimg.com/originals/f8/8d/6c/f88d6c2b351e2f9cffd5e0bf6e0843a3.jpg")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                                </div>
                                <div style={{marginRight:"50px",borderRadius:"20px",border:"2px solid #043353 ",width:"25%",backgroundImage:`url("https://i.pinimg.com/originals/f0/59/45/f05945b3f8021150c0a3403a1cd2a004.jpg")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                                </div>
                                <div style={{marginRight:"50px",borderRadius:"20px",border:"2px solid #043353 ",width:"25%",backgroundImage:`url("https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?size=338&ext=jpg")`,backgroundSize:"cover",backgroundPosition:"center",aspectRatio:"1/1"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"30%",height:"100%"}}>
                        <img src={gpayImg} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DonationPage;