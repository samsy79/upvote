import React, { PropsWithChildren } from 'react'

export default function LayoutBoard({
    params,children
}: PropsWithChildren<{
    params: { boardid: string };
}>) {
    return (
        <div>
            <h2>LAyoutBoards ({params.boardid})</h2>
        {children}
        </div>
    );
}
