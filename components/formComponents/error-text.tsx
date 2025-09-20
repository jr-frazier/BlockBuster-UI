export default function ErrorText({message}: { message: string }) {
    return (
        <p className="text-red-500">{message}</p>
    );
}