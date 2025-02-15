import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from '@phosphor-icons/react';
import { Input } from '../input/input';
import { SubmitButton } from '../button/submitButton';
import { ModalButton } from '../button/ModalButton';
import { useCreateClient } from '../../hook';

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

const product: any = [
  {product: "Pão"},
  {product: "Arroz"},
  {product: "Vinagre"}
]

const civilState: any = [
  {state: "Casado"},
  {state: "Solteiro"},
  {state: "Viúvo"},
]


export default function ClientModal() {
  
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  const {data, handleChange, handleSubmit} = useCreateClient(handleClose);

  return (
    
    <div>

      <ModalButton onClick={handleOpen} text="Registrar Cliente"/>
      
      <Modal
      
        open={open}
        
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>

          <div className='flex flex-col gap-[1em]'>

            <div className='flex justify-between'>

              <h3>Registrar Cliente</h3>
              
              <button onClick={handleClose}>
                  
                  <X className={`w-[20px] h-[20px] "text-[#fff]"} `}/>

              </button>

            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-[.5em] justify-center items-center'>

                <Input label='Cliente' value={data?.name} change={handleChange} name='name'/>
                
                <Input label='Identificação' value={data?.bi} change={handleChange} name='bi'/>

                <Input label='Telefone' type='number' value={data?.telephone} change={handleChange} name='telephone'/>
                
                <SubmitButton text='Registrar Cliente'/>

            </form>
          
          </div>

        </Box>

      </Modal>

    </div>

  );

}
