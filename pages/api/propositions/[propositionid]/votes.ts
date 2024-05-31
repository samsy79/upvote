import { NextApiRequest, NextApiResponse } from "next";
import { Vote } from "~/src/types";
import * as z from "zod";
import { prisma } from "~/src/db/prisma";
import { json } from "stream/consumers";
type Data = {
    vote:Vote
};
const QueryScheme = z.object({
    propositionid: z.string().transform((id) =>Number(id)),
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
    const vote= await prisma.vote.create({
        data: {
           
            propositionId : query.propositionid,
            ip: String(Math.random()),  
        }

    });
    res.status(201).json({ vote});    

}