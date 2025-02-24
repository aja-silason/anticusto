import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from '@phosphor-icons/react';
import { Input } from '../input/input';
import { ModalButton } from '../button/ModalButton';
import { useCreateStock } from '../../hook';
import { useGetdata } from '../../../../common/hook/get/useGetdata';
import { SubmitButton } from '../../../../common';

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

export default function StockModal() {
  
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  const {data, handleChange, handleSubmit, isLoading} = useCreateStock(handleClose);

  const {data: product} = useGetdata("product");

  return (
    
    <div>

      <ModalButton onClick={handleOpen} text="Alocar Producto"/>
      
      <Modal
      
        open={open}
        
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>

          <div className='flex flex-col gap-[1em]'>

            <div className='flex justify-between'>

              <h3>Alocar Producto no Estoque</h3>
              
              <button onClick={handleClose}>
                  
                  <X className={`w-[20px] h-[20px] "text-[#fff]"} `}/>

              </button>

            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-[.5em] justify-center items-center'>

                <Input label='Quantidade' type='number' value={data?.quantity} change={handleChange} name='quantity'/>
              
                <div className="flex flex-col gap-[.5em] w-[100%]">
                  <label htmlFor={product} className="text-[11pt]">Producto</label>
                    <select name="id_product" id="id_product" value={data?.id_product} onChange={handleChange} className="border cursor-pointer border-[#ccc] rounded-[5px] p-[.5em] w-[100%]">
                      <option></option>
                      {
                        product && product?.map((item: any) => {
                          return (
                            <option id='id_product' value={item?.id} onChange={handleChange}>{item?.nome}</option>
                          )
                        })
                      }
                    </select>
                </div>

                <SubmitButton text='Registrar' isLoading={isLoading}/>

            </form>
          
          </div>

        </Box>

      </Modal>

    </div>

  );

}
