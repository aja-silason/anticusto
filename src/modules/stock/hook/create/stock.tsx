import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";

export type stockProps = {
    product: string
    price: number,
    dateOfExpire: string
}



export const useCreateStock = () => {


    const [data, setData] = useState<stockProps>({product: "", price: 0 ,dateOfExpire: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement | any>) => {
        const {value, name} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSubmit = async (e: FormEvent) => {
        
        e?.preventDefault();
        
        try {

            const payload: stockProps = {
                product: data?.product,
                price: data?.price,
                dateOfExpire: data?.dateOfExpire
            }

            console.log("Lista", payload);

            toast.success("Producto Adicionado com sucesso no stock", {duration: 3000});


        } catch (error) {
            
            console.log(error);

        }

    }

    return {
        data,
        handleChange,
        handleSubmit,
    }

}
