import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";
import { mutate } from "swr";

export type supplyProps = {
    nome: string,
    telefone: string,
    nif: string
}



export const useCreateSupply = (handleClose: VoidFunction) => {
    
    const api_url = import.meta.env.VITE_API_URL;
    
    const [data, setData] = useState<supplyProps>({nome: "", telefone: "", nif: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | any>) => {
        const {value, name} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent) => {
        
        e?.preventDefault();
        
        try {
                        
            const payload: supplyProps = {
                nome: data?.nome,
                telefone: data?.telefone,
                nif: data?.nif
            }

            const isValidate: Array<keyof supplyProps> = ["nome", "telefone", "nif"];
            for(const key of isValidate){
                if(payload[key] == undefined || payload[key] == null || payload[key].trim() == ""){
                    toast.warning(`${key} precisa ser verificado`, {duration: 3000});
                    return;
                }
            }

            await axios.post(`${api_url}/supply`, payload);
            
            mutate((prevState: any) => [
                {...prevState}, payload
            ])

            toast.success("Fornecedor Adicionado com sucesso", {duration: 3000});


        } catch (error: any) {

            toast.error(`${error.response.data.data}`, {duration: 3000});

        } finally {
            setData({nome: "", telefone: "",nif: ""})
            handleClose();
        }

    }

    return {
        data,
        handleChange,
        handleSubmit,
    }

}
