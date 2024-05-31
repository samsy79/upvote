"use client"
import React, { FormEvent } from 'react'
import { Input } from '~/src/components/form/Input'
import { Button } from '~/src/components/form/Bouton'
import { useRouter } from 'next/navigation'
type PropositionFormProps ={
    boardid: number;

}

export const PropositionForm = ({
    boardid
}: PropositionFormProps )=> {
    const router = useRouter();
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const title = String(formData.get('title'))

        fetch(`/api/boards/${boardid}/propositions`, {
            method: 'POST',
            body: JSON.stringify({ title }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
            .then((data) => {
                console.log({ data });
                router.refresh();

            });

    };
    return (
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
            <Input name='title' label='Title' />
            <Button type='submit'>Create Proposition</Button>
        </form>
    )
}
