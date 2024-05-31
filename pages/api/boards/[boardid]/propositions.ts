import { NextApiRequest, NextApiResponse } from "next";
import { Board, Proposition } from "~/src/types";
import * as z from "zod";
import { prisma } from "~/src/db/prisma";
import { json } from "stream/consumers";
type Data = {
    proposition: Proposition;
};
const BodyScheme = z.object({
    title: z.string().min(1).max(255),
});
const QueryScheme = z.object({
    boardid: z.string().transform((id) =>Number(id)),
});

/* export const config = {
    api:{
        bodyParser:true
    },
}; */

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    if (req.method !== "POST") {
        res.status(405).end();
        return;
    }

    const query = QueryScheme.parse(req.query);
    const body = BodyScheme.parse((req.body));
    const proposition= await prisma.proposition.create({
        data: {
            title: body.title,
            boardId : query.boardid,
            ip: String(Math.random()),  
        }

    });
    res.status(201).json({ proposition });    

}