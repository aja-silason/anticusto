import { Gear } from "@phosphor-icons/react";
import { Container, Card, ProductTable, SupplyTable } from "../component";
import { useGetdata } from "../../../common/hook/get/useGetdata";

export default function HomeStock() {

    const {data: estoque} = useGetdata("stock");
    const {data: fornecedor} = useGetdata("supply");

    return (
        <Container title="Home">
            <div className="flex gap-[.5em] justify-between">
                <Card quantity={estoque?.length ?? 0} title="Produtos em Estoque" icon={<Gear className="w-[2em] h-[2em] text-[#264A7D]" />} />
                <Card quantity={fornecedor?.length ?? 0} title="Fornecedores" icon={<Gear className="w-[2em] h-[2em] text-[#264A7D]" />} />

            </div>

            <div className="bg-[#fff] flex gap-[1em] w-[100%] p-[.5em] rounded-[.5em] md:h-[70%]">
                <ProductTable data={estoque} title="Produtos Registrados"/>
                <SupplyTable data={fornecedor} title="Fornecedores Encontrados"/>
            </div>
        </Container>
    )
}