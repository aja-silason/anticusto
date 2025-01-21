import { Barcode, Money, MoneyWavy } from "@phosphor-icons/react";
import { Container, Card, SalesTable } from "../component";

const mockrowsDay = [
    { clientName: "Anania Augusto", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
    { clientName: "Jaime Augusto", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
    { clientName: "Jaime Linice", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
  ];

const mockrowsWeek = [
    { clientName: "Anania Augusto", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
    { clientName: "Jaime Augusto", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
    { clientName: "Jaime Linice", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
    { clientName: "Jaime Linice", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
    { clientName: "Jaime Linice", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
  ];

const mockrowsMonth = [
    { clientName: "Anania Augusto", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
    { clientName: "Jaime Augusto", phoneClient: "944996909", product: "Sofá L - King Size", quantity: 12 },
  ];


  const allLSale = mockrowsDay.concat(mockrowsWeek).concat(mockrowsMonth);

  const totalMockDay = mockrowsDay.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

  const totalMockWeek = mockrowsWeek.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

  const totalMockMonth = mockrowsMonth.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);



export default function HomeSale() {

    return (
        <Container title="Posto de venda">
            <div className="flex gap-[.5em] justify-between">

                <Card quantity={mockrowsDay?.length ?? 0} value={totalMockDay} title="Venda diária" icon={<Barcode className="w-[2em] h-[2em] text-[#264A7D]" />} />
                
                <Card quantity={mockrowsWeek?.length ?? 0} value={totalMockWeek} title="Venda Semanal" icon={<MoneyWavy className="w-[2em] h-[2em] text-[#264A7D]" />} />
                
                <Card quantity={mockrowsMonth?.length ?? 0} value={totalMockMonth} title="Venda mensal" icon={<Money className="w-[2em] h-[2em] text-[#264A7D]" />} />
                
            </div>

            <div className="bg-[#fff] flex gap-[1em] w-[100%] p-[.5em] rounded-[.5em] md:h-[70%]">

                <SalesTable data={allLSale} title="Vendas Registradas"/>
                
            </div>
        </Container>
    )
}