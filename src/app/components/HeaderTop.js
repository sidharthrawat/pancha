"use client"
import Image from 'next/image'
import HeaderImg from '../images/header.png'
import CenterImg from '../images/center.png'
import CardImg from '../images/4CardDetail.png'
import GroupImgYouTube from '../images/GroupImgYouTube.png'
import GroupImg from '../images/GroupImg.png'
import GroupMassageImg from '../images/GroupMassageImg.png'
import GroupOurProgram from '../images/GroupOurProgram.png'
import HealingStory from '../images/HealingStory.png'
import BookAppointment from '../images/BookAppointment.png'
import Review from '../images/Review.png'
import Frame9 from '../images/Frame9.png'
export const HeaderTop = () => {
  return (
    <div class="container">
     <div class="header-1 my-2">
      <Image src={HeaderImg}
      width={3000}
      height={1500}
      alt=' headerImg' ></Image>
     </div>
     <div class="center">
     <Image src={CenterImg}
      width={3000}
      height={1500}
      alt=' centerImg' ></Image>
     </div>
     <div class="4Card-Detail my-6">
     <Image src={CardImg}
      width={3000}
      height={1500}
      alt=' cardImg' ></Image>
     </div>
   
     <div class="GroupImgYouTube my-6">
     <Image src={GroupImgYouTube}
      width={3000}
      height={1500}
      alt=' GroupImgYouTube' ></Image>
     </div>

     <div class="GroupImgYouTube my-4">
     <Image src={GroupImg}
      width={3000}
      height={1500}
      alt=' GroupImg' ></Image>
     </div>

     <div class="GroupMassageImg my-2">
     <Image src={GroupMassageImg}
      width={3000}
      height={1500}
      alt=' GroupMassageImg' ></Image>
     </div>


     <div class="GroupOurProgram my-1">
     <Image src={GroupOurProgram}
      width={3000}
      height={1500}
      alt=' GroupOurProgram' ></Image>
     </div>

     <div class="HealingStory my-2">
     <Image src={HealingStory}
      width={3000}
      height={1500}
      alt='HealingStory' ></Image>
     </div>

     <div class="BookAppointment my-2">
     <Image src={BookAppointment}
      width={3000}
      height={1500}
      alt='BookAppointment' ></Image>
     </div>

     <div class="Review my-2">
     <Image src={Review }
      width={3000}
      height={1500}
      alt='Review ' ></Image>
     </div>

     
     <div class="Frame9 my-2">
     <Image src={Frame9  }
      width={3000}
      height={1500}
      alt='Frame9 ' ></Image>
     </div>
    </div>
  )
}
