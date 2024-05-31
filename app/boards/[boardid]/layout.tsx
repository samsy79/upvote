import { notFound } from 'next/navigation';
import { prisma } from '~/src/db/prisma';
import React, { PropsWithChildren } from 'react'

export default  async function LayoutBoard({
    params,children
}: PropsWithChildren<{
    params: { boardid: string };
}>) {
    const boardId = Number(params.boardid);
    if (isNaN(boardId)) {
        // throw new Error('Invalid board');
        return notFound();
    }

    const board = await prisma.board.findUniqueOrThrow({
        where: {
            id: boardId,
        },
    });
    return (
        <div  className='flex flex-col gap-6'>
            <h1 className='text-4xl font-bold'>{board.title}</h1>
        {children}
        </div>
    );
}
