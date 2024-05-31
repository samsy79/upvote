 
 import { prisma } from "~/src/db/prisma";
import { BoardCard } from "~/src/components/board/BoardCard";
import { Key } from "react";

export default  async function Home() {

  const boards = await prisma.board.findMany();


  return <div>
    <ul>{boards.map((board:any) => (<BoardCard key={boards.id} board={board}/>))}
      
      
   
    </ul></div>

  }