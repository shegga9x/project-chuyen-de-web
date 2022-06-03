// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize } from 'cookie';


export default async function handler(req, res) {
  res.setHeader('Set-Cookie', serialize('token', 'ngu nhu con cho ma sua nhu cc', { path: '/' }))
  res.status(200).json({ name: 'John Doe' })
}
