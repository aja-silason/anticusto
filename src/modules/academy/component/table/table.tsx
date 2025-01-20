import { useState } from 'react';

type tableProps = {
    data: {
        firstName: string,
        lastName: string,
        age: number | null,

    }[],
    title: string, 
}

export const Table = ({data, title}: tableProps) => {
  // Dados de exemplo
  

  const rowsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Função para renderizar a tabela com base na página atual
  const renderTable = () => {
    // Calcular as linhas a serem exibidas
    const startIdx = (currentPage - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    const paginatedRows = data.slice(startIdx, endIdx);

    return paginatedRows.map((data, index) => (
      <tr key={index} className="border-t border-b">
        <td className="px-4 py-2">{data.firstName}</td>
        <td className="px-4 py-2">{data.lastName}</td>
        <td className="px-4 py-2">{data.age || 'N/A'}</td>
      </tr>
    ));
  };

  // Função para mudar para a página anterior
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Função para mudar para a próxima página
  const handleNextPage = () => {
    if (currentPage * rowsPerPage < data.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container flex flex-col h-[100%] justify-between border rounded-t-[10px] mx-auto p-4">
      
        <h2 className="text-[#264A7D] font-[400] text-[16px]">{title}</h2>
        
        <div className='overflow-auto'>

        
        <table className="min-w-full table-auto border-collapse">
                <thead className="bg-brown-600] border rounded-[100px]">
                <tr className='text-left border text-[14px] font-[700] text-[#727272] bg-[#F9F9F9] rounded-t-[10px]'>
                    <th className="px-[.5em] py-2">Nome</th>
                    <th className="px-[.5em] py-2">Sobrenome</th>
                    <th className="px-[.5em] py-2">Idade</th>
                </tr>

                </thead>
                
            <tbody className='overflow-auto'>
                {renderTable()}
            </tbody>
        </table>

      </div>

      <div className="pagination border-t pt-[.5em] mt-4 flex justify-center  ">
        <button 
          onClick={handlePrevPage} 
          className={`px-4 py-2 mx-2 rounded ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`} 
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button 
          onClick={handleNextPage} 
          className={`px-4 py-2 mx-2 rounded ${currentPage * rowsPerPage >= data.length ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'}`} 
          disabled={currentPage * rowsPerPage >= data.length}
        >
          Próxima
        </button>
      </div>
    </div>
  );
};
