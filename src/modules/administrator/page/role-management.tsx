import { Users } from "@phosphor-icons/react"
import { Container, Card, RoleTable  } from "../component"
import { useGetdata } from "../../../common/hook/get/useGetdata"

export const supplyData = [
    {client: "Adão Nunda", bi: "0009876546LL09", phone: "944996909"},
    {client: "Paulo André", bi: "N33&65", phone: "944996909"},
    {client: "Filipe Qlerius", bi: "N33&65", phone: "944996909"},
    {client: "Pimental Lisboa", bi: "N33&65", phone: "944996909"},
    {client: "Joana Gomes", bi: "N33&65", phone: "944996909"},
    {client: "Atilio Osório", bi: "N33&65", phone: "944996909"},
]

export default function RoleManagement () {

    const {data} = useGetdata("access-role");

    return (
        <Container title="Nível de acesso">
            
            <Card quantity={data?.length ?? 0} title="Nível de acesso" icon={<Users className="w-[2em] h-[2em] text-[#264A7D]" />} />

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">
                <RoleTable data={data} title="Nivel de acesso"/>
            </div>
        </Container>
    )
}