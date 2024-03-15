import prismaClient from "../prisma";

interface DeleteCustomerService{
    id: string,
}

class DeleteCustomerService{
    async execute({ id }){


        if(!id){
            throw new Error("Solicitação Invalida.");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!findCustomer){
            throw new Error("Cliente não existe!");
        }

        await prismaClient.customer.delete({
            where: {
                id: findCustomer.id
            }
        })

        return { message: "Deletado com Sucesso!"}


    }
}

export { DeleteCustomerService }