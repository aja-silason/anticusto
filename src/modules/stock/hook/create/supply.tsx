import { ChangeEvent, FormEvent, useState } from "react"
import { supplyData } from "../../page/supply-management";
import { toast } from "sonner";

export type supplyProps = {
    supply: string,
    product: string
}



export const useCreateSupply = () => {

    const [list, setList] = useState<supplyProps[]>(supplyData);

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
            
            setList(prevItem => [...prevItem, data]);
            
            setData(({supply: "", product: ""}));

            toast.success("Fornecedor Adicionado com sucesso", {duration: 3000});

            console.log("Lista", list);

        } catch (error) {
            
            console.log(error);

        }

    }

    return {
        data,
        handleChange,
        handleSubmit,

        list
    }

}
