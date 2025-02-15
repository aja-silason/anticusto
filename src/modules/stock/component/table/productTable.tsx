import { CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMoneyConvert } from '../../../../common/hook/useMoneyConvert';
import ProductModal from '../modal/product-modal';

type tableProps = {
    data: {
      nome: string,
      preco: number,
      descricao: string,
    }[],
    title: string, 
}

export const ProductTable = ({data, title}: tableProps) => {

  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const renderTable = () => {
    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const paginatedRows = data?.slice(startIdx, endIdx);

    return paginatedRows?.map((data, index) => (

      <tr key={index} className="border-t border-b">
        <td className="px-4 py-2">{data?.nome}</td>
        <td className="px-4 py-2">{useMoneyConvert(+data?.preco)}</td>
        <td className="px-4 py-2">{data?.descricao}</td>
      </tr>
    ));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage * rowsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const location = useLocation();

  const isInMainScreen = (path: string) => location?.pathname === path; 

  return (
    <div className="container flex flex-col h-[100%] justify-start gap-[1em] border rounded-t-[10px] mx-auto p-4">

        <div className="flex justify-between">
          <h2 className="text-[#264A7D] font-[400] text-[16px]">{title}</h2>
          {
            isInMainScreen("/stock/productmanagement") && <ProductModal/>
          }
        </div>
      
        
        <div className='overflow-auto'>

        
        <table className="min-w-full table-auto border-collapse">
                <thead className="bg-brown-600] border rounded-[100px]">
                <tr className='text-left border text-[14px] font-[700] text-[#727272] bg-[#F9F9F9] rounded-t-[10px]'>
                    <th className="px-[.5em] py-2">Nome do Produto</th>
                    <th className="px-[.5em] py-2">Preço</th>
                    <th className="px-[.5em] py-2">Descrição</th>
                </tr>

                </thead>
                
            <tbody className='overflow-auto'>
                {renderTable()}
            </tbody>
        </table>

      </div>

      <div className="pagination border-t pt-[.5em] mt-4 flex justify-end  ">
        <button 
          onClick={handlePrevPage} 
          className={`p-[.4em] mx-2 rounded ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`} 
          disabled={currentPage === 1}
        >
          <CaretDoubleLeft className={`w-[20px] h-[20px] ${currentPage === 1 ? 'text-[#000] cursor-not-allowed' : "text-[#fff]"} `}/>
        </button>
        <button 
          onClick={handleNextPage} 
          className={`p-[.4em] mx-2 rounded ${currentPage * rowsPerPage >= data?.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`} 
          disabled={currentPage * rowsPerPage >= data?.length}
        >
          <CaretDoubleRight className={`w-[20px] h-[20px] ${currentPage * rowsPerPage >= data?.length ? 'text-[#000] cursor-not-allowed' : "text-[#fff]"} `}/>
        </button>
      </div>
    </div>
  );
};
