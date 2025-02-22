import { Money } from "@phosphor-icons/react";
import { Container, Card, SalesTable } from "../component";
import { useGetdata } from "../../../common/hook/get/useGetdata";
  
  export default function HomeSale() {
      
      const {data: sale} = useGetdata("sale");
      
      const sales: any = sale && sale;

      const totalMockMonth = sales?.reduce((accumulator: number, currentValue: {total_a_pagar: number}) => accumulator + currentValue?.total_a_pagar, 0);

    return (
        <Container title="Posto de venda">
            <div className="flex gap-[.5em] justify-between">

                {/* <Card quantity={mockrowsDay?.length ?? 0} value={totalMockDay} title="Venda diária" icon={<Barcode className="w-[2em] h-[2em] text-[#264A7D]" />} /> */}
                
                {/* <Card quantity={mockrowsWeek?.length ?? 0} value={totalMockWeek} title="Venda Semanal" icon={<MoneyWavy className="w-[2em] h-[2em] text-[#264A7D]" />} /> */}
                
                <Card quantity={sales?.length ?? 0} value={totalMockMonth} title="Venda Total" icon={<Money className="w-[2em] h-[2em] text-[#264A7D]" />} />
                
            </div>

            <div className="bg-[#fff] flex gap-[1em] w-[100%] p-[.5em] rounded-[.5em] md:h-[70%]">

                <SalesTable data={sales} title="Vendas Registradas"/>

            </div>
        </Container>
    )
}

// cliente, telefone, producto, quantidade