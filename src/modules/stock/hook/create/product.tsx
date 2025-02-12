import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";
import { mutate } from "swr";

export type productProps = {
    name: string
    price: number,
    description: string
}



export const useCreateProduct = (handleClose: VoidFunction) => {

    const api_url = import.meta.env.VITE_API_URL;


    const [data, setData] = useState<productProps>({name: "", price: 0 ,description: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | any>) => {
        const {value, name} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent) => {
        
        e?.preventDefault();
        
        try {

            const payload: productProps = {
                name: data?.name,
                price: data?.price,
                description: data?.description
            }

            const isValidate: Array<keyof productProps> = ["name", "price", "description"];
            for(const key of isValidate){
                if(payload[key] == undefined || payload[key] == null) {
                    toast.warning(`${key} precisa ser verificado`, {duration: 3000});
                    return;
                }
            }

            await axios.post(`${api_url}/product`, payload);

            mutate((prevState: any) => [
                {...prevState}, payload
            ]);
            
            toast.success("Producto Adicionado com sucesso no stock", {duration: 3000});
            
            handleClose();


        } catch (error: any) {
            toast.success(`${error?.message?.data?.message}`, {duration: 3000});
        } finally{
            setData({name: "", price: 0, description: ""});
            handleClose();
        }

    }

    return {
        data,
        handleChange,
        handleSubmit,
    }

}
