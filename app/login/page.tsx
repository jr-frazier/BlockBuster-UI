import SignupForm from "@/components/auth/signup-form";
import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-5">Login</h1>
            <LoginForm/>
        </div>
    )
}