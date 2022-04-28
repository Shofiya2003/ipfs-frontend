import  {React,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'




export default function BasicTable(props) {
    
    
    useEffect(()=>{
        localStorage.setItem('uploads',JSON.stringify(props.uploads))
    },[])
  return (
    <TableContainer component={Paper} id="table">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">CID&nbsp;</TableCell>
            <TableCell align="left">URL&nbsp;</TableCell>
            <TableCell align="left">Info&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.uploads.map((upload,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="left">{upload.date}</TableCell>
              <TableCell align="left">{upload.name}</TableCell>
              <TableCell align="left">{upload.cid}</TableCell>
              <TableCell align="left"><a href={upload.cidurl} target="_blank"><Button variant="contained">URL</Button></a></TableCell>
              <TableCell align="left"><Button variant="contained">Info</Button></TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}