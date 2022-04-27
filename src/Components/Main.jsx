import React,{useEffect, useState} from 'react'
import ImageUpload from './ImageUpload'
import Table from './Table';
import CircularProgress from '@mui/material/CircularProgress';
export default function Main() {
  const [uploads,setUploads]=useState([]);
  const [totalUploads,setTotalUploads]=useState(0);
  const createData=(name, date,cid,cidurl)=>{
    console.log("i am in create");
   
    setUploads(uploads=>{
      const newUploads=[...uploads];
      newUploads.push({name,date,cid,cidurl});
      console.log(newUploads);
      return newUploads;
    });
  
   
  }
  useEffect(()=>{
    console.log(uploads);
  },uploads);
  return (
    
      totalUploads>uploads.length?<div className="flex justify-center items-center h-screen">
      <CircularProgress/>
      </div>
      :
    
    <div className='flex flex-col items-center main'>
        <ImageUpload createData={createData} setTotalUploads={setTotalUploads}></ImageUpload>
        <Table uploads={uploads}></Table>
    </div>


  )
}
