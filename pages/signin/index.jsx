import LoginTemplate from "../../components/Templates/Login";
import { cookiesParser } from "../../Utils/CookiesParser";

export async function getServerSideProps(context) {
    const cookies = cookiesParser(context.req.headers.cookie);
    if(cookies.lg){
        return{
            redirect: {
                destination: '/',
                permanent: true,
            }
        }
    }

    return {
        props: {},
    };
  }


export default function Login() {
    return (
        <LoginTemplate/>
    )
}