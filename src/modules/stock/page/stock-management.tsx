import { Barcode } from "@phosphor-icons/react";
import { rows } from ".";
import { Card, Container, ProductTable } from "../component";

export default function StockManagement(){
    return (
        <Container title="Gerenciamento de Menu">
            
            <Card quantity={rows?.length ?? 0} title="Productos em Estoque" icon={<Barcode className="w-[2em] h-[2em] text-[#264A7D]" />} />

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">
                <ProductTable data={rows} title="Lista de Productos"/>
            </div>
        </Container>
    )
}