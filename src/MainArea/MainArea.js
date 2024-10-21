import React from "react";
import './MainArea.css';
import {FaMedrt,FaFontAwesomeFlag, FaFacebookMessenger, FaAngleDown, FaUserFriends, FaSearch, FaGrin, FaRegThumbsUp, FaCommentAlt, FaRegShareSquare} from 'react-icons/fa'
import {MdVideoCall, MdMoreHoriz} from 'react-icons/md'
import {AiFillFileImage} from 'react-icons/ai'
function MainArea(){
    return (
        <div className="Main">

            <div className="Rside">
            <div className="Profile">
                <img src="/images/cool.jpg"alt="dp"style={{height:"60px",padding:"1rem"}}/>
                Windhya Srivastava
            </div>
            <div className="Pro">
            <FaUserFriends color="blue" fontSize="2rem"/>
            <div>Friends</div>
            </div>
            <div className="Pro">
                <FaFontAwesomeFlag color="green" fontSize="2rem"/>
                <div>Pages</div>
            </div>
            <div className="Pro">
                <FaMedrt color="green" fontSize="2rem"/>
                <div>COVID-19 Information Center</div>
            </div>
            <div className="Pro">
                <FaFacebookMessenger color="blue" fontSize="2rem"/>
                <div>Messenger Kids</div>
            </div>

            <div className="Pro">
                <FaAngleDown color="black" fontSize="2rem"/>
                <div>See More</div>
            </div>
            <br></br>
            <div className="Profiles">
                <img src="/images/1.jpeg"alt="logo"style={{height:"35px", padding:"1rem"}}/>
                React Developer
            </div>
            <div className="Profiles">
                <img src="/images/java.png"alt="logo"style={{height:"35px", padding:"1rem"}}/>
                Java backend developer
            </div>
            <div className="Profiles">
                <img src="/images/3.jpeg"alt="logo"style={{height:"35px", padding:"1rem"}}/>
                JavaScript
            </div>
            <div className="Profiles">
                <img src="/images/1.jpeg"alt="logo"style={{height:"35px", padding:"1rem"}}/>
                React Developer
            </div>
            <div className="Pross">
                <FaAngleDown color="black" fontSize="2rem"/>
                <div>See More</div>
            </div>
            </div>

            <div className="MainArea">
                <div className="addStory">
                    <div className="Story">
                        <img src="/images/cool.jpg" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        Windhya Srivastava
                    </div>
                    <div className="Story">
                        <img src="/images/IMG_9267.PNG" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        keechak
                    </div>
                    <div className="Story">
                        <img src="/images/IMG_8552.PNG" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        kaalia
                    </div>
                    <div className="Story">
                        <img src="/images/IMG_3279.PNG" alt="IMG" style={{height:"60px", width:"50px",borderRadius:"60%"}}/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        raja indravarma
                    </div>
                   
                    </div>
                    <div className="message">
                        <div className="text">
                            <div className="Post">
                                <img src="/images/cool.jpg" alt="PIC"/>
                                <input type="Mind" placeholder="What's on your mind, Windhya?"/>
                            </div>
                            <div className="Call">
                                <div className="ico">
                                    <div className="icone">
                                        <MdVideoCall fontSize="2rem" color="red"/>
                                        <div>LiveVideo</div>
                                    </div>
                                    <div className="icone">
                                        <AiFillFileImage fontSize="2rem" color="green"/>
                                        <div>Photo/Video</div>
                                    </div>
                                    <div className="icone">
                                        <FaGrin fontSize="2rem" color="orange"/>
                                        <div>Felling/activity</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="Posted">
                        <div className="poster">
                            <div className="Simplilearn">
                                <img src="/images/cool.jpg" alt="Img" style={{height:"50px", width:"50px", borderRadius:"50%"}}/>
                                Mr. CooL 
                                <div className="update"> Updated his cover image.</div>
                            </div>
                            <div className="edit"><MdMoreHoriz fontSize="1.5rem"/></div>
                        </div>
                        <div className="caption">
                            Ayoooo!!! I am Mr.Cool
                        </div>
                        <br></br>
                        <div className="FacebookImg">
                            <img src="/images/cool.jpg" alt="dp" style={{height:"auto",width:"100%"}}/>
                        </div>
                        <div className="Comment">
                            <div className="Like">
                                <FaRegThumbsUp color="grey"/>Like
                            </div>
                            <div className="Like">
                                <FaCommentAlt color="grey"/>Comment
                            </div>
                            <div className="Like">
                                <FaRegShareSquare color="grey"/>Share
                            </div>
                        
                        </div>
                    </div>
                </div>

            </div>

            <div className ="Lside">
             <div className="Contact">  
                 <div className="Contacts">
                     Contacts
                 </div>
             
             <div className="chaticon">
                 <div className="icons">
                     <MdVideoCall fontSize="1.8rem"/>
                 </div>
                 <div className="icons">
                        <FaSearch fontSize="1.6rem"/>
                     </div>
                     <div className="icons">
                        <MdMoreHoriz fontSize="1.6rem"/>
                     </div>
                </div>
                </div>
            <div className="concise">
                <div className="Profilee">
                    <img src="images/1.jpeg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    Windhya Srivastava
                </div>
                <div className="Profilee">
                    <img src="images/2.jpeg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    keechak
                </div>
                <div className="Profilee">
                    <img src="images/3.jpeg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    kaalia
                </div>
                <div className="Profilee">
                    <img src="images/4.jpeg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    bheem
                </div>
                <div className="Profilee">
                    <img src="images/pic1.jpeg" alt="logo" style={{height:"35px", padding:"1rem"}}/>
                    raju
                </div>
            </div>
            </div>
        </div>
    )
}
export default MainArea