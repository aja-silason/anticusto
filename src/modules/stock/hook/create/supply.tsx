import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";

export type supplyProps = {
    supply: string,
    product: string
}



export const useCreateSupply = () => {

    const [data, setData] = useState<supplyProps>({supply: "", product: ""});

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
                supply: data?.supply,
                product: data?.product
            }

            console.log("Lista", payload);

            toast.success("Fornecedor Adicionado com sucesso", {duration: 3000});


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
