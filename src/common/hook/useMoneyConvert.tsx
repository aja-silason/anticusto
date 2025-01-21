export const useMoneyConvert = (value: number) => {
    if(isNaN(value) || value < 0){
        return `${value} precisa ser um número válido`;
    }

    return value?.toLocaleString("pt-AO", {
        style: "currency",
        currency: "AOA",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}