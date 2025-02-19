import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from "sonner";

type saleProps = {
    client: string,
    phone: string,
    product: string,
    quantity: number
}

export const useCreateSale = () => {
    
    const [data, setData] = useState<saleProps>({client: "", phone: "", product: "", quantity: 0});

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any>) => {
        const {name, value} = e?.target;

        setData((prevState) => ({
            ...prevState, [name]: value
        }));
    }

    const handleSelectProductChange = (selectedOption: any) => {
        setData((prevState) => ({
            ...prevState, product: selectedOption?.value || ""
        }));
    }

    const handleSelectClientChange = (selectedOption: any) => {
        setData((prevState) => ({
            ...prevState, client: selectedOption?.value || ""
        }));
    }

    const handleSubmit = async (e: FormEvent) => {

        e?.preventDefault();

        try {
            
            const payload: saleProps = {
                client: data?.client,
                phone: data?.phone,
                product: data?.product,
                quantity: data?.quantity
            }

            console.log("payload", payload);
            
            toast.success("venda realizada com sucesso", {duration: 3000});

        } catch (error) {
            toast.error("Impossivle processar a compra", {duration: 3000});
        }

    }


    return {
        handleChange,
        handleSubmit,
        handleSelectProductChange,
        handleSelectClientChange,
        data
    }
}