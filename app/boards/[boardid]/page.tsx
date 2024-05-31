import { notFound } from 'next/navigation';
import { title } from 'process';
import React from 'react'
import { Proposition } from '~/src/components/proposition/PropositionLine';
import { prisma } from '~/src/db/prisma'
import { PropositionForm } from './PropositionForm';
export default async function BoardPage({
    params,
    searchParams,
}: {
    params: { boardid: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const boardid = Number(params.boardid);


    const propositions = await prisma.proposition.findMany({
        where: {
            boardId: boardid,
        },
        orderBy: {
            vote:{
                _count:'desc',
            }
        },
        select: {
            title: true,
            id: true,
            _count: {
                select: {
                    vote: true,
                },
            },

        },
    });

    return (
        <div className='flex flex-col gap-8'>
            <PropositionForm boardid={boardid}/>
            <ul className='flex flex-col gap-4'>
                {propositions.map((proposition:any) => (
                    <Proposition key={proposition.id} voteCount={proposition._count.vote}  {...proposition}/>
                ))}
            </ul>
        </div>
    )
}
