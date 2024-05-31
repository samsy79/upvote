import { NextApiRequest, NextApiResponse } from "next";
import { Board } from "~/src/types";
import * as z from "zod";
import { prisma } from "~/src/db/prisma";
import { json } from "stream/consumers";
type Data = {
    board: Board;
};
const BodyScheme = z.object({
    title: z.string().min(1).max(255),
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

    const body = BodyScheme.parse((req.body));
    const board = await prisma.board.create({
        data: {
            title: body.title,
        }

    });
    res.status(201).json({ board });    

}