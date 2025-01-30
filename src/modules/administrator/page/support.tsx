import { Container, SubmitButton, Textarea } from "../component";
import { useRequestSupport } from "../hook";

export default function SupportAdministrator() {

    const {data, handleSubmit, handleChange} = useRequestSupport();

    return (
        <Container title="Suporte">

            <div className="bg-[#fff] md:w-[100%] md:h-[100%] rounded-[.5em] p-[.5em]">

                <div className="flex flex-col w-[50%] items-start p-[.5em]">
                    
                    <h3>Solicitação de suporte</h3>

                    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-[.5em] md:h-[40vh]">
                    
                        <Textarea label="" change={handleChange} name="message" value={data?.message} />
                    
                        <SubmitButton text="Solicitar suporte"/>
                    
                    </form>

                </div>

            </div>
        </Container>
    )
}