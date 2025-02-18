import { Users } from "@phosphor-icons/react"
import { Container, Card, ClientTable  } from "../component"
import { useGetdata } from "../../../common/hook/get/useGetdata"

export default function ClientManagement () {

    const {data: client} = useGetdata("client");

    const cliente = client && client?.filter((data: any) => data.name.includes("S/N") ? null : data);

    return (
        <Container title="Cliente">
            
            <Card quantity={cliente?.length ?? 0} title="Clientes" icon={<Users className="w-[2em] h-[2em] text-[#264A7D]" />} />

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">
                <ClientTable data={cliente} title="Fornecedores Encontrados"/>
            </div>
        </Container>
    )
}