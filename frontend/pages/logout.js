import axios from "axios";
import Cookies from "cookies";
import { getSession, signOut } from "next-auth/client";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => { signOut({ callbackUrl: "/" }) })
  return (<> </>);
}
export async function getServerSideProps(context) {
  try {
    const session = await getSession(context)
    const cookiesSetter = new Cookies(context.req, context.res)
    await axios.post(process.env.BE_AUTH + "revoke-token", {}, {
      headers: { Cookie: "refreshToken=" + cookiesSetter.get('refreshToken') + ";", Authorization: 'Bearer ' + session.user.jwt }
    });
    cookiesSetter.set('refreshToken', { maxAge: 0 });
  } catch (error) {
    // return { redirect: { permanent: false, destination: "/", }, }  
  }
  return { props: { data: 1 }, };
}
