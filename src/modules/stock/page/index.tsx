import { Gear } from "@phosphor-icons/react";
import { Container, Card, ProductTable, SupplyTable } from "../component";

export const rows = [
    { firstName: "Jon", lastName: "Snow", age: 35 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 },
    { firstName: "Cersei", lastName: "Lannister", age: 42 }
  ];

export const supplyData = [
    {supply: "Honey Store", product: "Mel"},
    {supply: "Honey Store", product: "Mel"},
  ]

export default function HomeAcademy() {

    return (
        <Container title="Home">
            <div className="flex gap-[.5em] justify-between">
                <Card quantity={rows?.length ?? 0} title="Produtos em Estoque" icon={<Gear className="w-[2em] h-[2em] text-[#264A7D]" />} />
                <Card quantity={supplyData?.length ?? 0} title="Fornecedores" icon={<Gear className="w-[2em] h-[2em] text-[#264A7D]" />} />

            </div>

            <div className="bg-[#fff] flex gap-[1em] w-[100%] p-[.5em] rounded-[.5em] md:h-[70%]">
                <ProductTable data={rows} title="Produtos Registrados"/>
                <SupplyTable data={supplyData} title="Fornecedores Encontrados"/>
            </div>
        </Container>
    )
}