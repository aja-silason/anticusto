import { Barcode, Money, MoneyWavy } from "@phosphor-icons/react";
import { Container, Card, SalesTable } from "../component";
import { useGetdata } from "../../../common/hook/get/useGetdata";

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


  const allSale = mockrowsDay.concat(mockrowsWeek).concat(mockrowsMonth);


export default function HomeAdm() {

    const {data: user} = useGetdata("user");
    const {data: accessRole} = useGetdata("access-role");

    return (
        <Container title="Dashboard">
            <div className="flex gap-[.5em] justify-between">

                <Card quantity={user?.length ?? 0} title="Usuários" icon={<Barcode className="w-[2em] h-[2em] text-[#264A7D]" />} />
                
                <Card quantity={accessRole?.length ?? 0} title="Módulos" icon={<MoneyWavy className="w-[2em] h-[2em] text-[#264A7D]" />} />
                
                <Card quantity={mockrowsMonth?.length ?? 0} title="Módulos activos" icon={<Money className="w-[2em] h-[2em] text-[#264A7D]" />} />
                
            </div>

            <div className="bg-[#fff] flex gap-[1em] w-[100%] p-[.5em] rounded-[.5em] md:h-[70%]">

                <SalesTable data={allSale} title="Vendas Registradas"/>

            </div>
        </Container>
    )
}