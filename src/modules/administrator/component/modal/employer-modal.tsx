import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from '@phosphor-icons/react';
import { Input } from '../input/input';
import { SubmitButton } from '../button/submitButton';
import { ModalButton } from '../button/ModalButton';
import { useCreateEmployer } from '../../hook';

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



export default function EmployerModal() {
  
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  const {data, handleChange, handleSubmit} = useCreateEmployer(handleClose);
  

  return (
    
    <div>

      <ModalButton onClick={handleOpen} text="Registrar Funcionário"/>
      
      <Modal
      
        open={open}
        
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>

          <div className='flex flex-col gap-[1em]'>

            <div className='flex justify-between'>

              <h3>Registrar Fucnionário</h3>
              
              <button onClick={handleClose}>
                  
                  <X className={`w-[20px] h-[20px] "text-[#fff]"} `}/>

              </button>

            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-[.5em] justify-center items-center'>

                <Input label='Primeiro Nome' value={data?.firstName} change={handleChange} name='firstName'/>
                
                <Input label='Sobrenome' value={data?.lastName} change={handleChange} name='lastName'/>
                
                <Input label='Email' type='email' value={data?.email} change={handleChange} name='email'/>
                
                <Input label='Telefone' value={data?.telephone} type='number' change={handleChange} name='telephone'/>
                
                <Input label='Identificação/BI' value={data?.bi} change={handleChange} name='bi'/>

                
                <SubmitButton text='Registrar Usuário'/>

            </form>
          
          </div>

        </Box>

      </Modal>

    </div>

  );

}
