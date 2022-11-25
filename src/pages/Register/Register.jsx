import './register.css'
import Logo from "../../assets/evercareLogo2.png"
import { useState,useContext, useEffect } from 'react'
import {states} from '../../utils/context'
import { useNavigate } from 'react-router-dom'
import {termsOfService, generateUHID} from '../../utils/dummyData'
import Loader from '../../components/Loader/Loader'
import { nanoid } from 'nanoid'


import { storage, db } from '../../utils/firebase-config'
import {ref, uploadBytes, listAll, getDownloadURL} from 'firebase/storage'

const Register = () => {

     //All states from the form

     const [fName, setFName] = useState("");
     const [lName, setLName] = useState("");
     const [title, setTitle] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const[address, setAddress]= useState("");
     const[nokName, setNokName]= useState("");
     const[nokAddress, setNokAddress]= useState("");
     const [nokPhone, setNokPhone] = useState("");

     const [age, setAge] = useState(0);
     const [sex, setSex] = useState("");
     const [height, setHeight] = useState(0);
     const [weight, setWeight] = useState(0);
     const [bloodGroup, setBloodGroup] = useState("");
     const [genotype, setGenoType] = useState("");
     const [bp, setBp] = useState("");

     
     const [pic, setPic] = useState(null);
     const [picList, setPicList] = useState([]);
     const [regPassword, setRegPassword] = useState("")


     const {loading, setLoading} = useContext(states)
     const [activeRegTab, setActiveRegTab] = useState('general');   
     const navigate = useNavigate();





  const submitRegForm = () => {

     const newUser = {
          title:title,
          firstName: fName,
          lastName: lName,
          email: email,
          phone: phone,
          address: address,
          nextOfKin:nokName,
          nextOfKinAddress:nokAddress,
          nextOfKinPhone:nokPhone,
          sex: sex,
          age:age,
          avatar:"",
          huid:generateUHID(),
          password: regPassword,

          vitals:{
                    height:height, 
                    blood_group:bloodGroup, 
                    bp:bp, 
                    weight:weight, 
                    genotype:genotype,
               },
          visits:[],
          payments:[],
          appointments:[],
          diagnostics:[]
     }

     console.log(newUser);


     if(pic === null) return;

     //uploading images to firebase storage
     const imageRef = ref(storage,`avatars/${pic.name + nanoid()}`)// References to Image Folder
     uploadBytes(imageRef,pic).then(()=>alert("Avatar Uploaded Successfully"));

     

  }


  useEffect(()=>{
     //downloading images in a folder(avatars) back into project
     const imageListRef = ref(storage, 'avatars/');
     listAll(imageListRef).then(res =>{
          res.items.forEach(item =>{
               getDownloadURL(item).then((url)=> setPicList(prev => [...prev,url]))
          } )
     })

  },[])


  return (
    <div className='register'>
     {loading && (<Loader text="Organizing...Please wait."/>)}
     <div className="registerModal">

          <div className="rModalTop">
               <img src={Logo} alt='logo' className='rLogo'/>
               <span className="rModalTitle">Hospital Enrollment Form</span>
               <div className="miscItems">
                    <span className='miscItem' onClick={()=> setActiveRegTab('terms')}>Terms of Service</span>
                    <span className='miscItem' 
                         onClick={()=>{
                              setLoading(true);
                              setTimeout(()=>{
                                   setLoading(false);
                                   navigate('/');
                              },1000)
                         }}
                    >
                         Login
                    </span>
               </div>
          </div>

          <div className="rModalMain">
               {activeRegTab === 'terms' ? (<></>):(
                    <div className="rModalTabs">
                         <span 
                              className={activeRegTab === 'general'? "rModalTab activeRTab": "rModalTab"}
                              onClick={()=>setActiveRegTab('general')}
                         >
                              General
                         </span>
                         <span
                              className={activeRegTab === 'medical'? "rModalTab activeRTab": "rModalTab"}
                              onClick={()=>setActiveRegTab('medical')}
                         >
                              Medical
                         </span>
                         <span 
                              className={activeRegTab === 'account'? "rModalTab activeRTab": "rModalTab"}
                              onClick={()=>setActiveRegTab('account')}
                         >
                              Account Settings
                         </span>
                    </div>
               )}
               
               <div className="rForm">
                    <p className="formTitle">
                         {
                              (activeRegTab==="general" && "General Information.") || (activeRegTab==="medical" && "Medical Information.") || (activeRegTab==="account" && "Account Settings.") || (activeRegTab === 'terms' && "Terms of Service.")
                         }
                    </p>
                    {activeRegTab === 'general' && (
                         <>
                              <div className="inputHolder">
                                   <label>Title:<span className="required">*</span></label>
                                   <select name="title" id="title" onChange={(e)=>setTitle(e.target.value)}>
                                        <option value="--Select--">--Select--</option>
                                        <option value="Mr.">Mr.</option>
                                        <option value="Mrs.">Mrs.</option>
                                   </select>
                              </div>
                              <div className="inputHolder">
                                   <label>First Name:<span className="required">*</span></label>
                                   <input type="text" value={fName} onChange={(e)=> setFName(e.target.value)} />
                              </div>
                              <div className="inputHolder">
                                   <label>Last Name:<span className="required">*</span></label>
                                   <input type="text"  value={lName} onChange={(e)=> setLName(e.target.value)}/>
                              </div>
                              <div className="inputHolder">
                                   <label>Email:<span className="required">*</span></label>
                                   <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                              </div>
                              <div className="inputHolder">
                                   <label>Phone:<span className="required">*</span></label>
                                   <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} />
                              </div>
                              <div className="inputHolder">
                                   <label>Address: <span className="required">*</span></label>
                                   <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} />
                              </div>
                              <div className="inputHolder">
                                   <label>Next of Kin's Name: <span className="required">*</span></label>
                                   <input type="text" value={nokName} onChange={(e)=> setNokName(e.target.value)} />
                              </div>
                              <div className="inputHolder">
                                   <label>Next of Kin's Address:<span className="required">*</span></label>
                                   <input type="text" value={nokAddress} onChange={(e)=> setNokAddress(e.target.value)} />
                              </div>
                              <div className="inputHolder">
                                   <label>Next of Kin's Phone:<span className="required">*</span></label>
                                   <input type="text" value={nokPhone} onChange={(e)=> setNokPhone(e.target.value)} />
                              </div>
                         </>
                    )
                    }
                    {
                         activeRegTab === 'medical' && (
                              <>
                                   <div className="inputHolder">
                                        <label>Age:<span className="required">*</span></label>
                                        <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Sex:<span className="required">*</span></label>
                                        <input type="text" value={sex} onChange={(e)=> setSex(e.target.value)} />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Height:<span className="required">*</span></label>
                                        <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)}/>
                                   </div>
                                   <div className="inputHolder">
                                        <label>Weight:<span className="required">*</span></label>
                                        <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)}/>
                                   </div>
                                   <div className="inputHolder">
                                        <label>Blood Group:<span className="required">*</span></label>
                                        <input type="text" value={bloodGroup} onChange={(e)=> setBloodGroup(e.target.value)}/>
                                   </div>
                                   <div className="inputHolder">
                                        <label>Genotype:<span className="required">*</span></label>
                                        <input type="text" value={genotype} onChange={(e)=> setGenoType(e.target.value)}/>
                                   </div>
                                   <div className="inputHolder">
                                        <label>Blood Presure:<span className="required">*</span></label>
                                        <input type="text" value={bp} onChange={(e)=> setBp(e.target.value)} />
                                   </div>

                              </>
                         )
                    }
                    {
                         activeRegTab === 'account' && 
                         (
                              <>
                                   <div className="inputHolder">
                                        <label>Profile Picture:<span className="required">*</span></label>
                                        <input type="file" accept="image/png, image/jpeg"  onChange={e => setPic(e.target.files[0])} />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Create Password:<span className="required">*</span></label>
                                        <input type="text" value={regPassword} onChange={(e)=> setRegPassword(e.target.value)} />
                                   </div>
                                   <div className="inputHolder">
                                        <label>Confirm Password:<span className="required">*</span></label>
                                        <input type="text" />
                                   </div>
                              </>
                         )
                    }
                    {
                         activeRegTab === 'terms' && (
                              <div className="tos">
                                   {termsOfService}
                                   <span className="agree">
                                        <input type="checkbox" />
                                        <p className='agreeTxt'> I have read through the terms of service and hereby agree to it.</p>
                                   </span>

                                   <span className="return" 
                                        onClick={()=>{
                                             setLoading(true);
                                             setTimeout(() => {
                                                  setLoading(false)
                                                  setActiveRegTab('general')
                                             }, 1000);

                                        }}
                                   >
                                        Return to Register
                                   </span>
     
                              </div>
                         )
                    }
               </div>
               <p className="warning notice">PLEASE NOTE: Ensure you have filled all sections above and read through terms of service before clicking on the "Register" button.</p>
               <div className="rFormSubmit">
                    <span className="rFormBtn rSubmit" onClick={submitRegForm}>Register</span>
                    <span className="rFormBtn rReset">Reset</span>
               </div>

          </div>
     </div>
    </div>
  )
}

export default Register