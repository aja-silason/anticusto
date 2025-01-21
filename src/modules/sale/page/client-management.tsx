import { Users } from "@phosphor-icons/react"
import { Container, Card, ClientTable  } from "../component"

export const supplyData = [
    {client: "Honey Store", bi: "Mel", phone: ""},
    {client: "Honey Store", bi: "Mel", phone: ""},
    {client: "Honey Store", bi: "Mel", phone: ""},
    {client: "Honey Store", bi: "Mel", phone: ""},
    {client: "Honey Store", bi: "Mel", phone: ""},
    {client: "Honey Store", bi: "Mel", phone: ""},
]

export default function ClientManagement () {

    return (
        <Container title="Cliente">
            
            <Card quantity={supplyData?.length ?? 0} title="Fornecedores" icon={<Users className="w-[2em] h-[2em] text-[#264A7D]" />} />

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">
                <ClientTable data={supplyData} title="Fornecedores Encontrados"/>
            </div>
        </Container>
    )
}