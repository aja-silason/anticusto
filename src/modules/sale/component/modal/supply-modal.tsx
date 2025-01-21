// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import { X } from '@phosphor-icons/react';
// import { Input } from '../input/input';
// // import { useCreateSupply } from '../../hook/create/supply';
// import { SubmitButton } from '../button/submitButton';
// import { ModalButton } from '../button/ModalButton';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   borderRadius: 1,
//   transform: 'translate(-50%, -50%)',
//   width: 600,
//   bgcolor: 'background.paper',
//   border: '1px solid #ccc',
//   boxShadow: 24,
//   p: 2,
// };

// export default function SupplyModal() {
  
//   const [open, setOpen] = React.useState(false);
  
//   const handleOpen = () => setOpen(true);
  
//   const handleClose = () => setOpen(false);

//   const {data, handleChange, handleSubmit} = useCreateSupply();

//   return (
    
//     <div>

//       {/* <Button onClick={handleOpen}>Open modal</Button> */}
//       <ModalButton onClick={handleOpen} text="Registrar Fornecedor"/>
      
//       <Modal
      
//         open={open}
        
//         onClose={handleClose}
        
//         aria-labelledby="modal-modal-title"
        
//         aria-describedby="modal-modal-description"
      
//       >
//         <Box sx={style}>

//           <div className='flex flex-col gap-[1em]'>

//             <div className='flex justify-between'>

//               <h3>Registrar Fornecedor</h3>
              
//               <button onClick={handleClose}>
                  
//                   <X className={`w-[20px] h-[20px] "text-[#fff]"} `}/>

//               </button>

//             </div>

//             <form onSubmit={handleSubmit} className='flex flex-col gap-[.5em] justify-center items-center'>

//                 <Input label='Fornecedor' value={data?.supply} change={handleChange} name='supply'/>
              
//                 <Input label='Producto' value={data?.product} change={handleChange} name='product'/>
              
//                 <SubmitButton text='Registrar'/>

//             </form>
          
//           </div>

//         </Box>

//       </Modal>

//     </div>

//   );

// }
