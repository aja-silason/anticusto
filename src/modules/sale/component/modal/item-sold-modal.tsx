import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Eye, X } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useMoneyConvert } from '../../../../common/hook/useMoneyConvert';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: 1,
  transform: 'translate(-50%, -50%)',
  // width: 600,
  bgcolor: 'background.paper',
  border: '1px solid #ccc',
  boxShadow: 24,
  p: 2,
};

type aa = {
  data: any,
  index: number,
}


export default function ItemSoldModal({data, index}: aa) {
  
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  
  const handleOpen = () => setOpen(true);
  
  const handleClose = () => setOpen(false);

  const dataToParams = data && JSON.stringify(data);

  const handlePrint = () => {
    navigate(`/sale/sale-print-sale-ticket/${dataToParams}`);
  }

  console.log("MODAL SOLD", data)

  const date = data?.created_at;
  const parseDate = date?.split("T")[0];
  const parseTime = date?.split("T")[1];
  const time = parseTime?.split("Z")[0];

  console.log("Parse", parseTime?.split("Z")[0])

  const productPrice = data?.producto?.preco;


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

              {/* <h3>Venda Nº FA-SL{index+1}ANTCST</h3> */}
              <button onClick={handlePrint}>
                Imprimir Factura
              </button>

              <button onClick={handleClose}>
                  <X className={`w-[20px] h-[20px] "text-[#fff]"} `}/>
              </button>

            </div>

            <div className='flex flex-col justify-center items-center'>
              <span><h3>Venda Nº FA-SL{index+1}ANTCST</h3></span>
              
              <div className='flex flex-col items-center my-[.5em]'>
                <p>ANTICUSTO ERP</p>
                <p>ESTRADA DE LUANDA SUL - VIANA, S/N</p>
                <p>JACINTO TCHIPA - BEQUESSA</p>
                <p>LUANDA - ANGOLA</p>
                <p>Contribuite: 5000087654</p>
                <p>=====================================================================================</p>
              </div>

              <div className='flex flex-col w-[100%]'>
                <span className='flex justify-between'>
                  <p>{parseDate}</p>
                  <p>{time}</p>
                  <p>CXA:0008</p>
                </span>
                <span className='flex flex-col items-center justify-center my-[.5em]'>
                  <p>FACTURA/RECIBO</p>
                  <p>FR 2025100400/3226</p>
                  <p>Original</p>
                </span>
              </div>
              
              <div className='flex flex-col w-[100%]'>
                <span className='flex flex-col justify-between'>
                  <p>Produtos no carrinho</p>
                  <p>-------------------------------------------------------------------------------------------------------------------------------------------------</p>
                </span>

                {/* <!-- Producto --> */}

                <span className='flex justify-between'>
                  <p className='w-[15em]'>Cód: {data?.id}</p>
                  <p className='w-[15em]'>(UN)</p>
                  <p className='w-[15em]'>{data?.producto?.nome}</p>
                </span>

                <span className='flex justify-between'>
                  <p className='w-[15em]'>001</p>
                  <p className='w-[15em]'>{data?.quantidade} QTD</p>
                  <p className='w-[15em]'>{useMoneyConvert(productPrice)}</p>
                </span>

                {/* <!-- Producto --> */}
    
                <p>-------------------------------------------------------------------------------------------------------------------------------------------------</p>


                <span>
                  <span className='flex flex-col items-end justify-end'>
                    <p>------------------</p>
                    <p>TOTAL: {useMoneyConvert(data?.total_a_pagar)}</p>
                  </span>
                </span>

              </div>

              <div className='flex flex-col w-[100%]'>
                <span className='flex justify-center gap-[3em] items-center'>
                  <p>Loja 987 </p>
                  <p>-</p>
                  <p> PDV:8</p>
                  <p>-</p>
                  <p>Operador: 92465 - {data?.vendedor?.nome_de_usuario}</p>
                </span>
              </div>

              <div className='items-center flex flex-col justify-center'>
                <h1>VOLTE SEMPRE</h1>
                <p>MOEDA KWANZA</p>
                <p>++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++</p>
              </div>
              <div className='items-center flex flex-col justify-center'>
                <p>f/Processada por computador</p>
                <p>Software Licenciado pela AGT, certificação nº: 74/AGT/2019</p>
              </div>
              <div>
                <p>====================================================================================</p>
              </div>

            </div>
          
          </div>

        </Box>

      </Modal>

    </div>

  );

}
