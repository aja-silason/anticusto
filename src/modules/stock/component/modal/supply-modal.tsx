import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ClosedCaptioning, X } from '@phosphor-icons/react';
import { Input } from '../input/input';
import { useCreateSupply } from '../../hook/create/supply';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SupplyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {data, handleChange, handleSubmit} = useCreateSupply();

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <button onClick={handleClose}>
                <X className={`w-[20px] h-[20px]  "text-[#fff]"} `}/>
            </button>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal

            <form onSubmit={handleSubmit}>
                <Input value={data?.supply} change={handleChange} name='supply'/>
                <Input value={data?.product} change={handleChange} name='product'/>

                <button>Enviar</button>
            </form>

          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
