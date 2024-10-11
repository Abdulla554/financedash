import { useAppSelector } from "@/publicStore/store/store";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SidBar from "../home/Sidbar/SidBar";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PrintIcon from '@mui/icons-material/Print';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Intuition from "../home/main/Intuition/Intuition";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import ArrowRight from "@mui/icons-material/ArrowRight";
import './style.css'
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Link } from "react-router-dom";
function Students() {
    const them = useAppSelector((state) => state.theme.colors);
  return (
    <div className=" flex">
          <SidBar/>
          <div  className="px-8 mt-[37px]" style={{ color:them.fontColor, width:1250  }}>
          
<div className=" flex justify-between ">
          <h3>Students</h3>
          <div className=' flex gap-6 justify-center'>

          {/* <form>
<input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
</form> */}


<h6 style={{ background:them.gray, color:them.blackColor}} className='  rounded-full w-10 h-10 pt-2   text-center  '><NotificationsActiveIcon/> </h6>
<h6 style={{ background:them.gray,color:them.blackColor}} className=' rounded-full w-10 h-10 pt-2  text-center  '><SettingsIcon/></h6>
 <h6 style={{  color:them.gray}}>Nabila A.<br/>Admin 
 </h6>
<h4 style={{ background:them.purpleColor}} className=' rounded-full w-10 h-10  text-center  '/>
 

 

          </div>
</div>

{/* -------------------------------------- */}
<div className=" flex mt-3   justify-between ">
       
<form>
<input  className=" h-8 rounded-full p-3" id="serch" placeholder="serch........"/>
</form>




          <div className=' flex gap-6 justify-center'>

<button  className=' rounded-full ml-8 w-[160px] flex justify-between pt-2 h-10' style={{color:them.fontColor, background:them.button }}>
<ControlPointIcon/>
<small>New Student</small>
</button>

 
          </div>





</div>



 
 {/* --------------------------------- */}


 <div>



      <div
        style={{ color: them.fontColor, background: them.Navsheet }}
        className="  pt-2  mt-4 h-[70px] w-full flex  gap-4 items-center"
      >
   
<div  >
    <input  className="w-5 h-5  mx-4  " type="checkbox"/>
</div>

<h6 className=" pr-44" >Name</h6>
<h6 className=" pr-24">ID</h6>
<h6 className=" pr-[88px] ">Date</h6>
<h6 className=" pr-7 ">Parent Name</h6>
<h6 className=" pr-16 ">City</h6>
<h6 className=" pr-16">Contact</h6>
<h6 className=" pr-7">Grade</h6>
<h6 >Action</h6>


      </div>



      <div
        style={{ color: them.fontColor, background: them.Darkblue }}
        className="   h-[500px] w-full"
      >
        <Link to='/studentDetails'>
        {[1,2,3,4,5,4].map((e, i) => {
          return (
            <div className=" flex items-center">
                <input  className="w-[18px] h-[18px] ml-7 mt-[10px]  " type="checkbox"/>
              <div className=" w-1/4   flex  items-center pt-3">
                <p
                  style={{ background: them.purpleColor }}
                  className=" ml-4  rounded-full w-[38px] h-[38px] mt-[10px]  text-center  "
                />
                
                <p className=" ml-3 mt-[10px]   text-white  font-bold text-base">Samantha William</p>


             
              </div>

              <div className=" w-3/4 items-center flex justify-between pt-3 ">
             <p style={{ color: them.button }} className=" mt-[10px]  font-bold text-base ">
                #123456789
                </p>

                <p style={{ color: them.fontColor }} className=" mt-[10px] text-base ">
               March 25, 2021
                </p>
                <p style={{ color: them.fontColor }} className=" mt-[10px] text-base ">
                Mana William 
                </p>
                <p style={{ color: them.fontColor }} className=" mt-[10px]  text-base ">
                Jakarta
                </p>

             <div className=" ">
              <button  style={{ background: them.Darkblue, color:them.button }}>
                <CallIcon  />
                </button>
                <button  style={{ background: them.Darkblue, color:them.button }}>
              <MailOutlineIcon  />
              </button>
             </div>

               <div className=" bg-orange-500 w-[60px] h-8 text-white rounded-full  pl-3 py-1">
               VII A
               </div>
              
                  <button
                    style={{ background: them.Darkblue, color: them.fontColor }}
                  >
                    <MoreHorizIcon />{" "}
                  </button>
                
              </div>

            </div>
          );
        })}
        </Link>
      </div>




      <div
        style={{ color: them.fontColor, background: them.Navsheet }}
        className="    h-24 w-full"
      >
        <div className=" container px-6  flex justify-between pt-4   ">
          <p className="pt-2">Showing 1-5 from 100 data</p>

          <div className=" flex gap-3 ">
            <button
              style={{ color: them.fontColor, background: them.Navsheet }}
              className="  rounded-full w-10 h-10  pt-1 pl-1 "
            >
              <ArrowLeft fontSize="large" />
            </button>
            <button
              style={{ color: them.blackColor, background: them.button }}
              className="  rounded-full w-10 h-10 pt-[6px] pl-4 "
            >
              1
            </button>
            <button
              style={{ color: them.fontColor, background: them.Navsheet }}
              className="iconmass   rounded-full w-10 h-10 pt-[6px] pl-[14px] "
            >
              2
            </button>
            <button
              style={{ color: them.fontColor, background: them.Navsheet }}
              className="iconmass   rounded-full w-10 h-10 pt-[6px] pl-[14px] "
            >
              3
            </button>
            <button
              style={{ color: them.fontColor, background: them.Navsheet }}
              className="  rounded-full w-10 h-10  pt-1 pl-0 "
            >
              <ArrowRight fontSize="large" />
            </button>
          </div>
        </div>
      </div>






    </div>








</div>  
 </div>
  )
}

export default Students