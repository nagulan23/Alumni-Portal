import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import c1 from '../../assets/waterfall.jpg';
import ProfilePage from '../profile';
import { withRouter } from "react-router-dom";
class InBlogPage extends Component {


    state = {
        page:1,
    }
    pageChange(pgno){
    if(pgno===0){
        this.setState({page:1});
        this.props.history.push("/profile");
    }
    }
    render() {
        return (
            <div >
                <div style={{ height: '30px' }}></div>
                <div style={{ paddingLeft: '35px', fontSize: '50px', fontWeight: 'bold' }}>
                    THIS IS THE MOST AWAITED TECHNOLOGY THAT CHANGED THE WORLD
                </div>
                <div style={{ height: '20px' }}></div>
                <div style={{ display: 'flex', paddingLeft: '35px' }}>
                    <img src={c1} alt="" style={{ height: "200px", width: "300px", borderRadius: '20px', border: 'ridge black' }} />
                    <div>
                        <div style={{ paddingTop: '20px', height: '80px', width: '500px', paddingLeft: '50px', fontStyle: 'italic' }}> For over 100 years Indian have been trying to do this and it has become sucessfully in the end</div>
                        <div style={{
                            paddingLeft: '100px'
                        }} >
                            <div style={{ Paddingright: '20px', paddingLeft: '20px', fontSize: '20px', height: '25px', color: 'white', width: '210px', border: '2px ridge black', background: '#415A80', borderRadius: '10px' }}>
                                MACHINE LEARNING
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ paddingTop: '40px', paddingLeft: '100px' }}>
                                August 8 2021
                            </div>
                            <div style={{ paddingTop: '40px', paddingLeft: '60px' }}>
                                5:18 pm
                            </div>

                        </div>


                    </div>
                    <div style={{ borderRight: "4px groove black", right: '60%', height: '200px', paddingLeft: '50px' ,paddingBottom:"20px"}}>
                    </div>


                </div>
                <div>
                    <div style={{ display: 'flex' }}>

                        <div style={{ paddingLeft: '50px', width: '850px' }}>
                            <p>Krishna was born on a dark night when there was negativity everywhere but even 5,000 years on, his message for us serves as a guiding light to an inspired life. It is believed that the Mahabharata was composed by Rishi Ved Vyas to bring out Krishna’s greatness for its central piece is the Bhagavad Gita, the divine song.

                            The Gita is a universal text that reminds all humans that we are born with the potential to be extraordinary. Of the 18 chapters, the second, Sankhya Yoga, is considered the summary of the Gita and its core theme is: Come to the centre.
</p>
<p>
                            The 10th shloka (verse) of Chapter 2 is attributed to Sanjaya describing to Dhritarashtra how Lord Krishna smilingly steered the chariot of Arjuna, who represents the human race, between the armies of the Pandavas and the Kauravas in the battlefield of Kurukshetra.
                            It is here that Lord Krishna delivers the sermon of the Gita to Arjuna, who is now bereft of arrogance and surrenders in devotion, so that he is able to take an objective view of the battle. </p>
                            <p>
                             Reality eludes us if we are attached to one side. Attachment leads to anger, fear and insecurity that distracts the mind from achieving its potential. For truth to dawn, we need to detach and come to the centre.

                            We all have a different army or enemy to fight. Everyone’s battle or struggle is different. But if the mind is stithapragya or centred within, one experiences contentment and can act dispassionately and independently.
</p>
                            Answering Arjuna’s question on how one recognises such a person, Lord Krishna describes the qualities of a leader in the last 18 shlokas of Chapter 2. 
                        </div>

                        <div style={{ borderRight: "4px groove black", height: '350px', paddingRight: '39px' }}>
                        </div>
                        <div onClick={this.pageChange.bind(this,0)}>
                            <div style={{ paddingTop: '200px', paddingLeft: '120px' }} >
                                <div style={{ paddingLeft: '50px', borderRadius: "50px", padding: "3px", marginLeft: "10px" }}>
                                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                </div>
                            </div>
                            <div>

                                <div style={{ paddingLeft: '115px', fontSize: '16px', paddingTop: '10px', fontWeight: "500", color: "red" }}>
                                    NAGULAN S
                                </div>
                                <div style={{ paddingLeft: '107px', fontSize: '13px', paddingTop: '10px', fontWeight: "500", color: "red" }}>
                                    Software Developer
                                </div>
                                <div style={{ paddingLeft: '135px', fontSize: '13px', paddingTop: '10px', fontWeight: "500", color: "red" }}>
                                    Intuit
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ height: '30px' }}>
                </div>

            </div>
        );
    }
}


export default withRouter(InBlogPage);