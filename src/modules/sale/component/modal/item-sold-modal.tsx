import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Eye, X } from '@phosphor-icons/react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: 1,
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
  p: 2,
};

type aa = {
  data: any,
  index: number
}


export default function ItemSoldModal({data, index}: aa) {
  
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);


  return (
    
    <div>

      <Eye className={`w-[50%] h-[20px] "text-[#fff]"} cursor-pointer text-[#264A7D]`} onClick={handleOpen}/>
      
      <Modal
      
        open={open}
        
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>

          <div className='flex flex-col gap-[1em]'>

            <div className='flex justify-between'>

              <h3>Venda Nº {index}</h3>
              
              <button onClick={handleClose}>
                  
                  <X className={`w-[20px] h-[20px] "text-[#fff]"} `}/>

              </button>

            </div>

            <div>
              <div>
                Cliente: {data?.clientName}<br/>
                Cliente: {data?.phoneClient}<br/>
                Cliente: {data?.product}<br/>
                Cliente: {data?.quantity}
              </div>

            </div>
          
          </div>

        </Box>

      </Modal>

    </div>

  );

}
