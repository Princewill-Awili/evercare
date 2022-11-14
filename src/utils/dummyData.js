export const sampleUser = {
     title:"Mr.",
     firstName:"Stephen",
     lastName:"Okechukwu",
     email:"stephen2022@gmail.com",
     phone:"+2348099012343",
     address:"1A, Walter Carrington Avenue, Victoria Island, Lagos.",
     huid:1003405,
     age:33,
     sex:"Male",
     avatar:"https://st3.depositphotos.com/2783505/32838/i/600/depositphotos_328381898-stock-photo-passport-photo-of-african-american.jpg",
     vitals:{
          height:180,
          weight:90,
          bp:"120/80",
          blood_group: "O+",
          genotype:"AA"
     },
     visits:[
          {
               id:1,
               date:"17/05/2022", 
               time:"12:05PM", 
               doctor:"Dr. Mirabel Nwosu", 
               specialization:"Cardiology", 
               visitType:"OutPatient", 
               summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae temporibus corporis nihil, iusto, veritatis doloribus eum ipsa, expedita sint quos praesentium quo aperiam. Fugit officia perferendis dolorum voluptas aliquid."
          },
          {
               id:2,
               date:"23/06/2022", 
               time:"03:00PM", 
               doctor:"Dr. Vivian Ukomadu", 
               specialization:"General Practice", 
               visitType:"Walk In", 
               summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae temporibus corporis nihil, iusto, veritatis doloribus eum ipsa, expedita sint quos praesentium quo aperiam. Fugit officia perferendis dolorum voluptas aliquid."
          },
          {
               id:3,
               date:"19/08/2022", 
               time:"11.05AM", 
               doctor:"Dr. Joy Ekwueme", 
               specialization:"Optometry", 
               visitType:"Walk In", 
               summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae temporibus corporis nihil, iusto, veritatis doloribus eum ipsa, expedita sint quos praesentium quo aperiam. Fugit officia perferendis dolorum voluptas aliquid."
          },
          {
               id:4,
               date:"23/09/2022", 
               time:"08.05PM", 
               doctor:"Dr. Enaholo Odia", 
               specialization:"Family Medicine", 
               visitType:"OutPatient", 
               summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae temporibus corporis nihil, iusto, veritatis doloribus eum ipsa, expedita sint quos praesentium quo aperiam. Fugit officia perferendis dolorum voluptas aliquid."
          },
          {
               id:5,
               date:"10/11/2022", 
               time:"09.00AM", 
               doctor:"Dr. Ayodeji Odufuwa", 
               specialization:"General Practice", 
               visitType:"OutPatient", 
               summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae temporibus corporis nihil, iusto, veritatis doloribus eum ipsa, expedita sint quos praesentium quo aperiam. Fugit officia perferendis dolorum voluptas aliquid."
          }
     ],
     diagnostics:{
          lab:[
               {
                    serial:1,
                    invoice:"DL001",
                    service:"FULL BLOOD COUNT",
                    date:"23/10/2022",
                    status:"Finalized",
                    action:"Download"
               },
               {
                    serial:2,
                    invoice:"DL002",
                    service:"HBA1C (HS16)",
                    date:"24/10/2022",
                    status:"Pending",
                    action:"None"
               },
               {
                    serial:3,
                    invoice:"DL003",
                    service:"LIPIDS TEST",
                    date:"25/10/2022",
                    status:"Finalized",
                    action:"Download"
               },
               {
                    serial:4,
                    invoice:"DL004",
                    service:"ESR",
                    date:"24/10/2022",
                    status:"Pending",
                    action:"None"
               },
               {
                    serial:5,
                    invoice:"DL005",
                    service:"URINE TEST",
                    date:"28/10/2022",
                    status:"Finalized",
                    action:"Download"
               },
          ],
          radio:[
               {
                    serial:1,
                    invoice:"DR001",
                    service:"48HRS HOLTER TEST",
                    date:"23/10/2022",
                    status:"Finalized",
                    action:"Download"
               },
               {
                    serial:2,
                    invoice:"DR002",
                    service:"ADULT ECHOCARDIOGRAM",
                    date:"24/10/2022",
                    status:"Pending",
                    action:"None"
               },
               {
                    serial:3,
                    invoice:"DR003",
                    service:"ABDOMINAL ULTRASOUND",
                    date:"25/10/2022",
                    status:"Finalized",
                    action:"Download"
               },

          ]
     },
     appointments:[],
     payments:[]
}