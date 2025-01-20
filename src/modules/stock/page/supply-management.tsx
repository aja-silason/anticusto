import { Users } from "@phosphor-icons/react"
import { Container, Card, SupplyTable  } from "../component"

export const supplyData = [
    {supply: "Honey Store", product: "Mel"},
    {supply: "Alimenta Angola", product: "Manteiga"},
    {supply: "FresMart", product: "Pão"}
]

export default function SupplyManagement () {


    return (
        <Container title="Fornecedor">
            
            <Card quantity={supplyData?.length ?? 0} title="Fornecedores" icon={<Users className="w-[2em] h-[2em] text-[#264A7D]" />} />

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">
                <SupplyTable data={supplyData} title="Fornecedores Encontrados"/>
            </div>
        </Container>
    )
}