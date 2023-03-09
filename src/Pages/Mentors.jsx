import React, { useRef, useState } from 'react'
import styles from '../Assets/CSS/Mentors.module.css'
import mentor1 from '../Assets/Images/Ellipse 25.png'
import mentor2 from '../Assets/Images/Ellipse 25.png'
import mentor3 from '../Assets/Images/Ellipse 27 (3).png'
import mentor4 from '../Assets/Images/Ellipse 79798.png'
import mentor5 from '../Assets/Images/Ellipse 275435.png'
import mentor6 from '../Assets/Images/Ellipse 27 (2).png'

import {BsArrowUp} from 'react-icons/bs'
import {BsArrowDown} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'


function Mentors() {
    const [centerPhoto, setPhoto] = useState({
        isActive1: true,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        isActive6: false,
    })

    const profileRef1 = useRef(null);
    const profileRef2 = useRef(null);
    const profileRef3 = useRef(null);
    const profileRef4 = useRef(null);
    const profileRef5 = useRef(null);
    const profileRef6 = useRef(null);

    const centerProfile1 = useRef(null);
    const centerProfile2 = useRef(null);
    const centerProfile3 = useRef(null);
    const centerProfile4 = useRef(null);
    const centerProfile5 = useRef(null);
    const centerProfile6 = useRef(null);


    const mentorDetails1 = useRef(null);
    const mentorDetails2 = useRef(null);
    const mentorDetails3 = useRef(null);
    const mentorDetails4 = useRef(null);
    const mentorDetails5 = useRef(null);
    const mentorDetails6 = useRef(null);

    const mentorName1 = useRef(null);
    const mentorName2 = useRef(null);
    const mentorName3 = useRef(null);
    const mentorName4 = useRef(null);
    const mentorName5 = useRef(null);
    const mentorName6 = useRef(null);

    const anticlockwise = () => {
        console.log("up");
        if(centerPhoto.isActive1){
            console.log("1st")

            setPhoto({
                isActive1: false,
                isActive2: true,
                isActive3: false,
                isActive4: false,
                isActive5: false,
                isActive6: false
            })

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'


            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '1'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'



            // Details
            mentorDetails1.current.style.transition = 'all 0.6s linear'
            mentorDetails1.current.style.opacity = '0'

            mentorDetails2.current.style.transition = 'all 0.6s linear'
            mentorDetails2.current.style.opacity = '1'

            mentorDetails3.current.style.transition = 'all 0.6s linear'
            mentorDetails3.current.style.opacity = '0'

            mentorDetails4.current.style.transition = 'all 0.6s linear'
            mentorDetails4.current.style.opacity = '0'

            mentorDetails5.current.style.transition = 'all 0.6s linear'
            mentorDetails5.current.style.opacity = '0'

            mentorDetails6.current.style.transition = 'all 0.6s linear'
            mentorDetails6.current.style.opacity = '0'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '1'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'

             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'

        }
        else if(centerPhoto.isActive2){
            setPhoto({
                isActive1: false,
                isActive2: false,
                isActive3: true,
                isActive4: false,
                isActive5: false,
                isActive6: false
            })

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'


            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '1'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'


             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '1'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '1'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'

        }
        else if(centerPhoto.isActive3){
            setPhoto({
                isActive1: false,
                isActive2: false,
                isActive3: false,
                isActive4: true,
                isActive5: false,
                isActive6: false
            })

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'


            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '1'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'


             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '1'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '1'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'

        }
        else if(centerPhoto.isActive4){
            setPhoto({
                isActive1: false,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                isActive5: true,
                isActive6: false
            })

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'


            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '1'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'


             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '1'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'



             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '1'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'

        }
        else if(centerPhoto.isActive5){
            setPhoto({
                isActive1: false,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                isActive5: false,
                isActive6: true
            })

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'


            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '1'



             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '1'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '1'

        }
        else if(centerPhoto.isActive6){
            setPhoto({
                isActive1: true,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                isActive5: false,
                isActive6: false
            })

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'



            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '1'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'



             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '1'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '1'
        }
    }


    const clockwise = () => {
        console.log("up");
        if(centerPhoto.isActive1){
            console.log("1st")

            setPhoto({
                isActive1: false,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                isActive5: false,
                isActive6: true
            })

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'


            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '1'



             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '1'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '1'
        }
        else if(centerPhoto.isActive2){
            setPhoto({
                isActive1: true,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                isActive5: false,
                isActive6: false
            })

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'


            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '1'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'



             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '1'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'



             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '1'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'

        }
        else if(centerPhoto.isActive3){
            setPhoto({
                isActive1: false,
                isActive2: true,
                isActive3: false,
                isActive4: false,
                isActive5: false,
                isActive6: false
            })

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'



            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '1'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'



             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '1'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '1'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'

        }
        else if(centerPhoto.isActive4){
            setPhoto({
                isActive1: false,
                isActive2: false,
                isActive3: true,
                isActive4: false,
                isActive5: false,
                isActive6: false
            })

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'


            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '1'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'



             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '1'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '1'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'

        }
        else if(centerPhoto.isActive5){
            setPhoto({
                isActive1: false,
                isActive2: false,
                isActive3: false,
                isActive4: true,
                isActive5: false,
                isActive6: false
            })

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'



            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '1'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '0'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'


             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '1'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '0'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '1'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '0'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'
            
        }
        else if(centerPhoto.isActive6){
            setPhoto({
                isActive1: false,
                isActive2: false,
                isActive3: false,
                isActive4: false,
                isActive5: true,
                isActive6: false
            })

            profileRef1.current.style.transition = 'all 0.6s linear'
            profileRef1.current.style.transform = 'scale(0.4) translate(-40rem, -50rem)'

            profileRef2.current.style.transition = 'all 0.6s linear'
            profileRef2.current.style.transform = 'scale(0.4) translate(0rem, -63rem)'

            profileRef3.current.style.transition = 'all 0.6s linear'
            profileRef3.current.style.transform = 'scale(0.4) translate(40rem, -50rem)'

            profileRef4.current.style.transition = 'all 0.6s linear'
            profileRef4.current.style.transform = 'scale(0.4) translate(58rem, -14rem)'

            profileRef5.current.style.transition = 'all 0.6s linear'
            profileRef5.current.style.transform = 'scale(0.4) translate(-53rem, 26rem)'

            profileRef6.current.style.transition = 'all 0.6s linear'
            profileRef6.current.style.transform = 'scale(0.4) translate(-58rem, -14rem)'



            centerProfile1.current.style.transition = 'all 0.6s linear'
            centerProfile1.current.style.opacity = '0'

            centerProfile2.current.style.transition = 'all 0.6s linear'
            centerProfile2.current.style.opacity = '0'

            centerProfile3.current.style.transition = 'all 0.6s linear'
            centerProfile3.current.style.opacity = '0'

            centerProfile4.current.style.transition = 'all 0.6s linear'
            centerProfile4.current.style.opacity = '0'

            centerProfile5.current.style.transition = 'all 0.6s linear'
            centerProfile5.current.style.opacity = '1'

            centerProfile6.current.style.transition = 'all 0.6s linear'
            centerProfile6.current.style.opacity = '0'


             // Details
             mentorDetails1.current.style.transition = 'all 0.6s linear'
             mentorDetails1.current.style.opacity = '0'
 
             mentorDetails2.current.style.transition = 'all 0.6s linear'
             mentorDetails2.current.style.opacity = '0'
 
             mentorDetails3.current.style.transition = 'all 0.6s linear'
             mentorDetails3.current.style.opacity = '0'
 
             mentorDetails4.current.style.transition = 'all 0.6s linear'
             mentorDetails4.current.style.opacity = '0'
 
             mentorDetails5.current.style.transition = 'all 0.6s linear'
             mentorDetails5.current.style.opacity = '1'
             
             mentorDetails6.current.style.transition = 'all 0.6s linear'
             mentorDetails6.current.style.opacity = '0'


             // Name
             mentorName1.current.style.transition = 'all 0.6s linear'
             mentorName1.current.style.opacity = '0'

             mentorName2.current.style.transition = 'all 0.6s linear'
             mentorName2.current.style.opacity = '0'

             mentorName3.current.style.transition = 'all 0.6s linear'
             mentorName3.current.style.opacity = '0'

             mentorName4.current.style.transition = 'all 0.6s linear'
             mentorName4.current.style.opacity = '0'

             mentorName5.current.style.transition = 'all 0.6s linear'
             mentorName5.current.style.opacity = '1'
             
             mentorName6.current.style.transition = 'all 0.6s linear'
             mentorName6.current.style.opacity = '0'
        }
    }

    return (
        <>
            <section className='flex items-center justify-center w-screen min-h-screen'>
                <div className={`${styles.hideScrollbar} flex items-center justify-center w-full  overflow-x-hidden h-auto `} style={{ border: '2px solid black' }}>

                    <div className='relative flex items-start justify-center min-h-screen px-6 w-full'>
                        <span className='relative top-72 mt-32 overflow-x-hidden min-h-fit w-full flex items-center justify-start sm:top-96 sm:mt-28 xl:top-24 xl:mt-0' style={{minHeight: 'inherit'}}>
                            {/* 1 */}
                            <span ref={mentorDetails1} className='absolute flex opacity-100 items-start gap-y-5 justify-center flex-col'>
                                <h1 className='text-4xl font-bold text-green-500'>4.9</h1>
                                <span className='flex text-2xl text-green-500 items-center justify-between gap-x-2.5'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <BsStarHalf/>
                                </span>

                                <h1 className='text-2xl font-semibold'>Pankur Gupta 1</h1>
                                <h2 className='text-2xl font-thin'>sbe @Amazon</h2>
                                <span className='max-w-none text-justify xl:max-w-md'>
                                I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.
                                </span>
                                <button className='py-2 px-3 text-white font-semibold bg-green-500 shadow-lg shadow-green-500'>Book a session</button>
                            </span>

                            {/* 2 */}
                            <span ref={mentorDetails2} className='flex absolute opacity-0 items-start gap-y-5 justify-center flex-col'>
                                <h1 className='text-4xl font-bold text-green-500'>5.0</h1>
                                <span className='flex text-2xl text-green-500 items-center justify-between gap-x-2.5'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </span>

                                <h1 className='text-2xl font-semibold'>Keshav Bathla</h1>
                                <h2 className='text-2xl font-thin'>SDE-1 @Goww</h2>
                                <span className='max-w-none text-justify xl:max-w-md'>
                                A curious learner, on a way to become a kickass developer who writes Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer | Coding Instructor
                                </span>
                                <button className='py-2 px-3 text-white font-semibold bg-green-500 shadow-lg shadow-green-500'>Book a session</button>
                            </span>

                            {/* 3 */}
                            <span ref={mentorDetails3} className='flex absolute opacity-0 items-start gap-y-5 justify-center flex-col'>
                                <h1 className='text-4xl font-bold text-green-500'>4.9</h1>
                                <span className='flex text-2xl text-green-500 items-center justify-between gap-x-2.5'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <BsStarHalf/>
                                </span>

                                <h1 className='text-2xl font-semibold'>Pankur Gupta 2</h1>
                                <h2 className='text-2xl font-thin'>sbe @Amazon</h2>
                                <span className='max-w-none text-justify xl:max-w-md'>
                                I am Prankur Gupta, I am working as a Software Development Engineer at Amazon. I can guide you throughout your preparation phase. Trust me when I tell you this I know the exact recipe to crack the coding interview rounds of top companies for the SDE role.
                                </span>
                                <button className='py-2 px-3 text-white font-semibold bg-green-500 shadow-lg shadow-green-500'>Book a session</button>
                            </span>


                            {/* 4 */}
                            <span ref={mentorDetails4} className='flex absolute opacity-0 items-start gap-y-5 justify-center flex-col'>
                                <h1 className='text-4xl font-bold text-green-500'>5.0</h1>
                                <span className='flex text-2xl text-green-500 items-center justify-between gap-x-2.5'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </span>

                                <h1 className='text-2xl font-semibold'>Ankita</h1>
                                <h2 className='text-2xl font-thin'>ML Engineer @Firework</h2>
                                <span className='max-w-none text-justify xl:max-w-md'>
                                Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. 
                                </span>
                                <button className='py-2 px-3 text-white font-semibold bg-green-500 shadow-lg shadow-green-500'>Book a session</button>
                            </span>


                            {/* 5 */}
                            <span ref={mentorDetails5} className='flex absolute opacity-0 items-start gap-y-5 justify-center flex-col'>
                                <h1 className='text-4xl font-bold text-green-500'>4.9</h1>
                                <span className='flex text-2xl text-green-500 items-center justify-between gap-x-2.5'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </span>

                                <h1 className='text-2xl font-semibold'>Saumya Singh</h1>
                                <h2 className='text-2xl font-thin'>Software Engineer @Red Hat</h2>
                                <span className='max-w-none text-justify xl:max-w-md'>
                                Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar | International Open Source Award finalist by Red Hat | Winner SIH, 21U21 Award | Google Connect Winner'19 | Mentor GCI
                                </span>
                                <button className='py-2 px-3 text-white font-semibold bg-green-500 shadow-lg shadow-green-500'>Book a session</button>
                            </span>


                            {/* 6 */}
                            <span ref={mentorDetails6} className='flex absolute opacity-0 items-start gap-y-5 justify-center flex-col'>
                                <h1 className='text-4xl font-bold text-green-500'>5.0</h1>
                                <span className='flex text-2xl text-green-500 items-center justify-between gap-x-2.5'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                </span>

                                <h1 className='text-2xl font-semibold'>Saurav Pal</h1>
                                <h2 className='text-2xl font-thin'>SDE-2 @Amazon</h2>
                                <span className='max-w-none text-justify xl:max-w-md'>
                                I am a Senior Software Developer American Express. Have been passionately solving Leetcode, HackerRank, Codechef, Codeforces problems, and enthusiastically solving problems with the analysis of space.
                                </span>
                                <button className='py-2 px-3 text-white font-semibold bg-green-500 shadow-lg shadow-green-500'>Book a session</button>
                            </span>

                        </span>

                        <span className={`${styles.circular_box} absolute w-full bg-green-500`} >
                            <div className={`${styles.mentors_profile_photos} hidden items-center justify-center absolute top-0 right-0 sm:flex`}>
                                <img ref={profileRef1} className={`${styles.mentors_img_6} h-72 w-72 absolute 2`} src={mentor1} alt="error loading" />
                                <img ref={profileRef2} className={`${styles.mentors_img_5} h-72 w-72 absolute 2`} src={mentor6} alt="error loading" />
                                <img ref={profileRef3} className={`${styles.mentors_img_1} h-72 w-72 absolute 2`} src={mentor2} alt="error loading" />
                                <img ref={profileRef4} className={`${styles.mentors_img_2} h-72 w-72 absolute 2`} src={mentor3} alt="error loading" />
                                <img ref={profileRef5} className={`${styles.mentors_img_3} h-72 w-72 absolute 2`} src={mentor4} alt="error loading" />
                                <img ref={profileRef6} className={`${styles.mentors_img_4} h-72 w-72 absolute 2`} src={mentor5} alt="error loading" />
                            </div>
                        </span>

                        {/* <span className={`${styles.circular_box} absolute h-full w-full hidden bg-green-600`} >

                        </span> */}

                        <div className={`${styles.active_profile_photo} ${styles.center_photo} flex flex-col items-center justify-center absolute top-0 right-0`}>
                            <img ref={centerProfile1} className={`${centerPhoto.isActive1 ? 'active' : ''} h-72 w-72 absolute opacity-1`} src={mentor1} alt="error loading" />
                            <img ref={centerProfile6} className={`${centerPhoto.isActive2 ? 'active' : ''} h-72 w-72 absolute opacity-0`} src={mentor5} alt="error loading" />
                            <img ref={centerProfile5} className={`${centerPhoto.isActive3 ? 'active' : ''} h-72 w-72 absolute opacity-0`} src={mentor4} alt="error loading" />
                            <img ref={centerProfile4} className={`${centerPhoto.isActive4 ? 'active' : ''} h-72 w-72 absolute opacity-0`} src={mentor3} alt="error loading" />
                            <img ref={centerProfile3} className={`${centerPhoto.isActive5 ? 'active' : ''} h-72 w-72 absolute opacity-0`} src={mentor2} alt="error loading" />
                            <img ref={centerProfile2} className={`${centerPhoto.isActive6 ? 'active' : ''} h-72 w-72 absolute opacity-0`} src={mentor6} alt="error loading" />

                            <span className='w-full py-4 px-5 relative top-16 flex items-center justify-between'>
                                <span className='p-4 bg-green-500 cursor-pointer text-white' style={{borderRadius: '50%'}} onClick={()=> anticlockwise()}><BsArrowDown /></span>
                                <span className='p-4 bg-green-500 cursor-pointer text-white' style={{borderRadius: '50%'}} onClick={()=>clockwise()}><BsArrowDown /></span>
                            </span>

                            <span className='w-full py-4 px-5 relative top-48 flex items-center justify-center'>
                                <span ref={mentorName1} className='px-4 opacity-100 absolute py-2 bg-green-300 rounded-md font-semibold tracking-normal text-lg'>
                                    Pankur Gupta I
                                </span>

                                <span ref={mentorName2} className='px-4 opacity-0 absolute py-2 bg-green-300 rounded-md font-semibold tracking-normal text-lg'>
                                    Keshav Bathla
                                </span>
                                
                                <span ref={mentorName3} className='px-4 opacity-0 absolute py-2 bg-green-300 rounded-md font-semibold tracking-normal text-lg'>
                                    Pankur Gupta 2
                                </span>
                                
                                <span ref={mentorName4} className='px-4 opacity-0 absolute py-2 bg-green-300 rounded-md font-semibold tracking-normal text-lg'>
                                    Ankita
                                </span>

                                <span ref={mentorName5} className='px-4 opacity-0 absolute py-2 bg-green-300 rounded-md font-semibold tracking-normal text-lg'>
                                    Saumya Singh
                                </span>

                                <span ref={mentorName6} className='px-4 opacity-0 absolute py-2 bg-green-300 rounded-md font-semibold tracking-normal text-lg'>
                                    Saurav Pal
                                </span>
                            </span>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Mentors