import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from '@phosphor-icons/react';
import { Input } from '../input/input';
import { SubmitButton } from '../button/submitButton';
import { ModalButton } from '../button/ModalButton';
import { useCreateSale } from '../../hook';
import { useGetdata } from '../../../../common/hook/get/useGetdata';
import { Selects } from '../../../../common';

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

export default function SaleModal() {
  
  const [open, setOpen] = useState(false);

  const [datas, setDatas] = useState([])
  const [clientes, setClintes] = useState([])
  
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  const {data, handleChange, handleSubmit, handleSelectClientChange, handleSelectProductChange} = useCreateSale();

  const {data: product} = useGetdata("product");
  const {data: client} = useGetdata("client");

  useEffect(() => {

      const mappedDatas = product?.map((product: any) => ({
          value: product?.id,
          label: product?.nome
      }));

      const mappedClients = client?.map((client: any) => ({
        value: client?.id,
        label: client?.name
      }))

      setDatas(mappedDatas);
      setClintes(mappedClients);

  }, [client, product]);

  return (
    
    <div>

      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <ModalButton onClick={handleOpen} text="Registrar Venda"/>
      
      <Modal
      
        open={open}
        
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>

          <div className='flex flex-col gap-[1em]'>

            <div className='flex justify-between'>

              <h3>Registrar Venda</h3>
              
              <button onClick={handleClose}>
                  
                  <X className={`w-[20px] h-[20px] "text-[#fff]"} `}/>

              </button>

            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-[.5em] justify-center items-center'>

                <Selects option={clientes} label='Cliente' name="client" value={data?.client} onChange={handleSelectClientChange}/>

                
                <Input label='Telefone' value={data?.phone} change={handleChange} name='phone'/>

                <Selects option={datas} label='Produto' name="product" value={data?.product} onChange={handleSelectProductChange}/>
                
                <Input label='Quantidade' type='number' value={data?.quantity} change={handleChange} name='quantity'/>
                            
                <SubmitButton text='Registrar venda'/>

            </form>
          
          </div>

        </Box>

      </Modal>

    </div>

  );

}
