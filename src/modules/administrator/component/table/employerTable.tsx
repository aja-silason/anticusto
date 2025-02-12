import { CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react';
import { useState } from 'react';
import UserModal from '../modal/user-modal';
import { useLocation } from 'react-router-dom';

type tableProps = {
    data: {
      firstName: string,
      lastName: string,
      email: string,
      telephone: string,
      bi: string,
    }[],
    title: string, 
}

export const EmployerTable = ({data, title}: tableProps) => {

  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const renderTable = () => {
    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const paginatedRows = data?.slice(startIdx, endIdx);

    return paginatedRows?.map((data, index) => (
      <tr key={index} className="border-t border-b">
        <td className="px-4 py-2">{data?.firstName}</td>
        <td className="px-4 py-2">{data?.lastName}</td>
        <td className="px-4 py-2">{data?.bi}</td>
        <td className="px-4 py-2">{data?.telephone}</td>
        <td className="px-4 py-2">{data?.email}</td>
      </tr>
    ));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage * rowsPerPage < data?.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const isHere = (path: string) => location.pathname == path;

  return (
    <div className="container flex flex-col h-[100%] justify-start gap-[1em] border rounded-t-[10px] mx-auto p-4">

      <div className='flex justify-between items-center'>
        <h2 className="text-[#264A7D] font-[400] text-[16px]">{title}</h2>
        
        { isHere("/administrator/user") && <UserModal/> }

      </div>
        
        <div className='overflow-auto'>

        
        <table className="min-w-full table-auto border-collapse">
                <thead className="bg-brown-600] border rounded-[100px]">
                <tr className='text-left border text-[14px] font-[700] text-[#727272] bg-[#F9F9F9] rounded-t-[10px]'>
                    <th className="px-[.5em] py-2">Primeiro Nome</th>
                    <th className="px-[.5em] py-2">Sobrenome</th>
                    <th className="px-[.5em] py-2">Identificaçºao</th>
                    <th className="px-[.5em] py-2">Telefone</th>
                    <th className="px-[.5em] py-2">Email</th>
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
