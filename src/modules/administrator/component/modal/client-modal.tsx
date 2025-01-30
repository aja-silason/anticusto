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

  const {data, handleChange, handleSubmit} = useCreateClient();

  return (
    
    <div>

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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

                <Input label='Cliente' value={data?.client} change={handleChange} name='client'/>
                
                <Input label='Identificação' value={data?.bi} change={handleChange} name='bi'/>

                <Input label='Telefone' type='number' value={data?.phone} change={handleChange} name='phone'/>
                
                <Input label='Correio Electrónico' type='email' value={data?.email} change={handleChange} name='email'/>
                
                <Input label='Endereço | Morada' value={data?.address} change={handleChange} name='address'/>
                
                <div className="flex flex-col gap-[.5em] w-[100%]">
                  <label htmlFor={product} className="text-[11pt]">Estado civíl</label>
                    <select name="civilState" id="civilState" value={data?.civilState} onChange={handleChange} className="border cursor-pointer border-[#ccc] rounded-[5px] p-[.5em] w-[100%]">
                      <option></option>
                      {
                        civilState && civilState?.map((item: any) => {
                          return (
                            <option id='product' value={item?.state} onChange={handleChange}>{item?.state}</option>
                          )
                        })
                      }
                    </select>
                </div>
                
                <SubmitButton text='Registrar Cliente'/>

            </form>
          
          </div>

        </Box>

      </Modal>

    </div>

  );

}
