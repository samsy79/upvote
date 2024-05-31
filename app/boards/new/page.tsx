import React from 'react'
import { BoardForm } from './BoardForm'

export default function NewBoardPage() {
    return (
        <div className='flex flex-col gap-10'>

            <h1 className='text-2xl'>Create a new board</h1>
            <BoardForm />
        </div>
    )
}
