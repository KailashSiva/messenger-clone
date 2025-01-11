import Image from "next/image";
import AuthForm from "./components/AuthForm";
/* The line imports the Image component from the next/image package, which is optimized for handling images in Next.js applications. It provides features like lazy loading and automatic resizing for better performance.
 */
export default function Home() {
    return (
        <div
            className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100">

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt="logo"
                    height="48"
                    width="48"
                    className="mx-auto w-auto"
                    src="/images/logo.png"
                ></Image>
            </div>

            <h2
                className="
                mt-6
                text-center
                text-3xl
                font-bold
                tracking-tight
                text-gray-900
                ">
                Sign in to your account
            </h2>
            <AuthForm />
        </div>

    );
}
