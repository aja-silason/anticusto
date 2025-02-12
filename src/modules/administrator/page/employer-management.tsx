import { Users } from "@phosphor-icons/react"
import { Container, Card, EmployerTable  } from "../component"
import { useGetdata } from "../../../common/hook/get/useGetdata"

export default function EmployerManagement () {
    
    const {data} = useGetdata("employer");
    
    return (
        <Container title="Usuário">
            
            <Card quantity={data?.length ?? 0} title="Usuários" icon={<Users className="w-[2em] h-[2em] text-[#264A7D]" />} />

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">
                <EmployerTable data={data} title="Funcionários"/>
            </div>
        </Container>
    )
}