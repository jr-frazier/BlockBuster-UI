'use client'

import {signup} from '@/app/actions/auth'
import {useActionState} from 'react'
import ErrorText from "@/components/formComponents/error-text";
import TextInput from "@/components/formComponents/text-input";
import FormSubmitButton from "@/components/formComponents/form-button";

export default function LoginForm() {
    const [state, action, pending] = useActionState(signup, undefined)

    return (
        <form action={action} className="flex flex-col gap-4">
            <div>
                <TextInput id="email" name="email" placeholder="Email"/>
            </div>
            {state?.errors?.email && <ErrorText message={state.errors.email[0]}/>}

            <div>
                <TextInput id="password" name="password" type="password"/>
            </div>
            {state?.errors?.password && (
                <div>
                    <p>Password must:</p>
                    <ul className="list-disc list-inside text-red-500">
                        {state.errors.password.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}
            <div>
                <FormSubmitButton label="Login" disable={pending}/>
            </div>
        </form>
    )
}