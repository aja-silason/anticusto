import { Users } from "@phosphor-icons/react"
import { Container, Card, SupplyTable  } from "../component"
import { useGetdata } from "../../../common/hook/get/useGetdata"

export default function SupplyManagement () {

    const {data: fornecedor} = useGetdata("supply");

    return (
        <Container title="Fornecedor">
            
            <Card quantity={fornecedor?.length ?? 0} title="Fornecedores" icon={<Users className="w-[2em] h-[2em] text-[#264A7D]" />} />

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">
                <SupplyTable data={fornecedor} title="Fornecedores Encontrados"/>
            </div>
        </Container>
    )
}