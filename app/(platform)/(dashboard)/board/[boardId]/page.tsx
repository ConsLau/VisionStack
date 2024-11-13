import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db"
import { redirect } from "next/navigation";


interface BoardIdPageProps {
    params: {
        boardId: string;
    }
}

const BoardIdPage = async ({
    params,
}: BoardIdPageProps) => {
    const { orgId } = auth()

    if(!orgId){
        redirect("/select-org")
    }

    const lists = await db.list.findMany({
        where: {
            boardId: params.boardId,
            board: {
                orgId
            },
        },
        include: {
            
        }
    })
    return (
        <div>
            Board ID!
        </div>
    )
}

export default BoardIdPage;