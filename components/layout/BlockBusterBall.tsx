import Image from 'next/image'

export const BlockBusterBall = () => <div
    className="absolute mt-2 top-0 left-1 size-48 border-5 border-sky-900 rounded-full bg-sky-200 shadow-xl/50">
    <div
        className=" absolute top-2.5 left-2.5 size-40 border-4 border-blac-900 rounded-full bg-radial-[at_25%_25%] from-white to-blue-700 to-75%">
        <Image
            src="/blockbuster_logo.svg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
    </div>
</div>
