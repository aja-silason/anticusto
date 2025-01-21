import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

type requesSupportType = {
    email: string;
    telephone: string;
    message: string;
}

export const useRequestSupport = () => {

    const [data, setData] = useState<requesSupportType>({email: "", telephone: "", message: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any>) => {
        const {name, value} = e?.target;
        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent) => {
        
        e?.preventDefault();

        try {
            
            const payload: requesSupportType = {
            
                email: "ananiasjaimeaugusto@gmail.com",
            
                telephone: "944996909",
            
                message: data.message
            
            }

            console.log("Solicitação de suporte: ", payload);
            setData({email: "", telephone: "", message: ""});

            toast.success("Solicitação de suporte enviada", {duration: 3000});

        } catch (error) {

            toast.error("Impossível enviar a solicitação de suporte", {duration: 3000});
            
            console.log("Erro ao solicitar suporte");

        }
    }

    return {data, handleSubmit, handleChange}

}