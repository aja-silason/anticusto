import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";
import { mutate } from "swr";

type clientProps = {
    name: string,
    bi: string,
    telephone: string,
}

export const useCreateClient = (handleClose: VoidFunction) => {
    
    const [data, setData] = useState<clientProps>({name: "", bi: "", telephone: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any>) => {
        const {name, value} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent) => {

        e?.preventDefault();

        const api_url = import.meta.env.VITE_API_URL;

        try {
            
            const payload: clientProps = {
                name: data?.name,
                bi: data?.bi,
                telephone: data?.telephone
            }

            const isValidade: Array<keyof clientProps> = ["name", "bi", "telephone"];
            for(const key of isValidade) {
                if(payload[key] === undefined || payload[key] === null || payload[key].trim() === ""){
                    toast.warning(`${key == "name" ? "Nome do Cliente" : key == "bi" ? "Bilhete de Identidade" : "Telefone" } precisa ser verificado`);
                    return;
                }
            }

            await axios.post(`${api_url}/client`, payload);
            
            await mutate((prevState: any) => [
                {...prevState}, payload
            ]);
            
            toast.success("venda realizada com sucesso", {duration: 3000});
            handleClose();
            setData({name: "", bi: "", telephone: ""});


        } catch (error) {
            toast.error("Impossivle cadastrar o usário", {duration: 3000});
        } finally {
        }

    }


    return {
        handleChange,
        handleSubmit,
        data
    }
}