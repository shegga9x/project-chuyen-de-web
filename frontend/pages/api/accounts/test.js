// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSession } from "next-auth/client";


export default async function handler(req, res) {
    const session = await getSession({ req });
    console.log("Session", session);
    res.status(200).json({ session: session })
}
