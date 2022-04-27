import React,{useEffect, useState,useRef} from 'react'
import { Input, TextField,Button } from '@mui/material';


import { NFTStorage } from 'https://cdn.jsdelivr.net/npm/nft.storage/dist/bundle.esm.min.js'
export default function ImageUpload(props) {
    const [title,setTitle]=useState();
    const [file,setFile]=useState();
    const fileButton = useRef();
    useEffect(()=>{
        console.log(file);
    },[file])
    const token =
    new URLSearchParams(window.location.search).get('key') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDgzYjczNDg1MTQxZjE3MDM0OEEwZUE5NDJFNDRDNTMwNTU5RTA0NTEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1MDk0NzkyNDMzMiwibmFtZSI6InRlc3QifQ.jUIB_PBxUGBMNK9QsAgtK0n8g8er30smtmP_brpc5zU" // your API key from https://nft.storage/manage
    
    const upload=async ()=>{
        const storage = new NFTStorage({ token })
        
        try{
            props.setTotalUploads(totalUploads=>totalUploads+1);
            const metadata = await storage.store({
                name:title,
                description:
                  'Using the nft.storage metadata API to create ERC-1155 compatible metadata.',
                image: file,
              })
              console.log(metadata);
              const {ipnft}=metadata;
              const {name}=metadata.data;
              const {href}=metadata.embed().image
              console.log(name+" "+href+" "+ipnft);
              props.createData(name,"27/04/22",ipnft,href);
              console.log({ 'IPFS URL for the metadata': metadata.url })
              console.log({ 'metadata.json contents': metadata.data })
              console.log({ 'metadata.json contents with IPFS gateway URLs': metadata.embed() })
              setTitle(0);
        }catch(err){
          console.log(err);
        }
    }
  return (
    <div className='mb-5 flex items-center'>
        
        <TextField id="outlined-basic" label="File Name" variant="outlined" value={title} onChange={(e)=>{
            setTitle(e.target.value);
        }} type="text" name="title" sx={{marginRight:"12px"}}/>
        <Button variant="contained" sx={{marginRight:"12px"}} onClick={()=>{
          fileButton.current.click();
        }}>Select Image</Button>
       <input onChange={(e)=>{
         setFile(e.target.files[0]);
        }} type="file" name="file" id="file" class="inputfile" ref={fileButton} style={{"display":"none"}}/>
       <Button variant="contained" onClick={upload}>Upload</Button>
    </div>
  )
}
