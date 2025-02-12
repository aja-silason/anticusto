import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";
import { mutate } from "swr";

export type stockProps = {
    id_product: string
    quantity: string
}



export const useCreateStock = (handleClose: VoidFunction) => {


    const [data, setData] = useState<stockProps>({id_product: "", quantity: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | any>) => {
        const {value, name} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent) => {

        const api_url = import.meta.env.VITE_API_URL;
        
        e?.preventDefault();
        
        try {

            const payload: stockProps = {
                id_product: data?.id_product,
                quantity: data?.id_product
            }

            const isValidate: Array<keyof stockProps> = ["id_product", "quantity"];
            for(const key of isValidate){
                if(payload[key] == undefined || payload[key] == null) {
                    toast.warning(`${key} precisa ser verificado`, {duration: 3000});
                    return;
                }
            }

            await axios.post(`${api_url}/stock`, payload);
            
            mutate((prevState: any) => [
                {...prevState}, payload
            ]);
            toast.success("Producto Adicionado com sucesso no stock", {duration: 3000});
            
            handleClose();
        } catch (error) {

            toast.error("Producto não Adicionado no stock", {duration: 3000});
            
        } finally{
            setData({id_product: "", quantity: ""});
            handleClose();
        }

    }

    return {
        data,
        handleChange,
        handleSubmit,
    }

}
