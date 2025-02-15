import { Barcode } from "@phosphor-icons/react";
import { Card, Container, StockTable } from "../component";
import { useGetdata } from "../../../common/hook/get/useGetdata";

export default function StockManagement(){

    const {data: estoque} = useGetdata("stock");

    return (
        <Container title="Gerenciamento de Menu">
            
            <Card quantity={estoque?.length ?? 0} title="Productos em Estoque" icon={<Barcode className="w-[2em] h-[2em] text-[#264A7D]" />} />

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">
                <StockTable data={estoque} title="Lista de Productos em Estoque"/>
            </div>
        </Container>
    )
}