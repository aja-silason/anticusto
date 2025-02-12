import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { X } from '@phosphor-icons/react';
import { Input } from '../input/input';
import { SubmitButton } from '../button/submitButton';
import { ModalButton } from '../button/ModalButton';
import { useCreateUser } from '../../hook';
import { useGetdata } from '../../../../common/hook/get/useGetdata';

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



export default function UserModal() {
  
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  const {data, handleChange, handleSubmit} = useCreateUser(handleClose);
  
  const {data: accessRole} = useGetdata("access-role")
  const {data: employer} = useGetdata("employer")
  
  return (
    
    <div>

      <ModalButton onClick={handleOpen} text="Registrar Usuário"/>
      
      <Modal
      
        open={open}
        
        onClose={handleClose}
        
        aria-labelledby="modal-modal-title"
        
        aria-describedby="modal-modal-description"
      
      >
        <Box sx={style}>

          <div className='flex flex-col gap-[1em]'>

            <div className='flex justify-between'>

              <h3>Registrar Usuário</h3>
              
              <button onClick={handleClose}>
                  
                  <X className={`w-[20px] h-[20px] "text-[#fff]"} `}/>

              </button>

            </div>

            <form onSubmit={handleSubmit} className='flex flex-col gap-[.5em] justify-center items-center'>

                <Input label='Username' value={data?.username} change={handleChange} name='username'/>
                
                <Input label='Senha' value={data?.password} change={handleChange} name='password'/>
                
                <div className="flex flex-col gap-[.5em] w-[100%]">
                  <label htmlFor={employer} className="text-[11pt]">Funcionário</label>
                    <select name="id_employer" id="id_employer" value={data?.id_employer} onChange={handleChange} className="border cursor-pointer border-[#ccc] rounded-[5px] p-[.5em] w-[100%]">
                      <option></option>
                      {
                        employer && employer?.map((item: any) => {
                          return (
                            <option id='product' value={item?.id} onChange={handleChange}>{item?.firstName} {item?.lastName}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className="flex flex-col gap-[.5em] w-[100%]">
                  <label htmlFor={accessRole} className="text-[11pt]">Nível de acesso</label>
                    <select name="id_access_role" id="id_access_role" value={data?.id_access_role} onChange={handleChange} className="border cursor-pointer border-[#ccc] rounded-[5px] p-[.5em] w-[100%]">
                      <option></option>
                      {
                        accessRole && accessRole?.map((item: any) => {
                          return (
                            <option id='access_role' value={item?.id} onChange={handleChange}>{item?.access_role}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                
                <SubmitButton text='Registrar Usuário'/>

            </form>
          
          </div>

        </Box>

      </Modal>

    </div>

  );

}
