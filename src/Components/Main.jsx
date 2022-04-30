import React, { useEffect, useState } from "react";
import ImageUpload from "./ImageUpload";
import Table from "./Table";
import CircularProgress from "@mui/material/CircularProgress";
export default function Main() {
  const [uploads, setUploads] = useState(
    localStorage.getItem("uploads")
      ? JSON.parse(localStorage.getItem("uploads"))
      : []
  );
  const [totalUploads, setTotalUploads] = useState(
    localStorage.getItem("uploads")
      ? JSON.parse(localStorage.getItem("uploads")).length
      : 0
  );
  
  const [cidArr,setCidArr]=useState([]);
  const [dateArr,setDateArr]=useState([]);
  const [cidUrlArr,setCidUrlArr]=useState([]);
  const [name,setName]=useState([]);
  const createData = (name, date, cid, cidurl) => {
    console.log("i am in create");
    updateArray(setCidArr,cid);
    updateArray(setDateArr,date);
    updateArray(setCidUrlArr,cidurl);
    updateArray(setName,name);
    setUploads((uploads) => {
      const newUploads = [...uploads];
      newUploads.push({ name, date, cid, cidurl });
      const object = { email: "", uploads: newUploads };
      localStorage.setItem("uploads", JSON.stringify(newUploads));

      console.log( );
      return newUploads;
    });
  };
useEffect(()=>{
  console.log(cidArr);
  console.log(dateArr);
  console.log(cidUrlArr);
})
  const updateArray=(setFunc,newValue)=>{
    setFunc(prev=>{
      const newArray=[...prev];
      newArray.push(newValue);
      return newArray
    });
  }

  useEffect(() => {
    console.log(uploads);
    console.log(totalUploads + ">>>>>>>>>>>>>>>>>>>>>updated");
    localStorage.setItem("uploads", JSON.stringify(uploads));
  }, [totalUploads, uploads]);
  return totalUploads > uploads.length ? (
    <div className="flex flex-col justify-center items-center h-screen">
      <CircularProgress />
      <p>Uploading File</p>
    </div>
  ) : (
    <div className="flex flex-col items-center main">
      <ImageUpload
        createData={createData}
        setTotalUploads={setTotalUploads}
        multipleFiles={false}
      ></ImageUpload>
      <ImageUpload
        createData={createData}
        setTotalUploads={setTotalUploads}
        multipleFiles={true}
      ></ImageUpload>
      <Table uploads={uploads} setUploads={setUploads}></Table>
    </div>
  );
}
