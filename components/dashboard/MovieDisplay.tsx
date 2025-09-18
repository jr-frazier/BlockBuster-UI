'use client'
import useGetMovies from "@/components/dashboard/hooks/useGetMovies";
import {Movie} from "@/components/dashboard/api/types/movies";
import Image from "next/image";
import {useSearchParams} from 'next/navigation'

type Props = {
    genre?: string
}

export default function MovieDisplay({genre}: Props) {
    const searchParams = useSearchParams()
    const {isFetching, data} = useGetMovies(useSearchParams().get("genre") || null)


    console.log(data)

    return <div className="flex flex-wrap gap-10">
        {isFetching ? <p>Loading...</p> :
            data?.items.map((movie: Movie) => <div key={movie.id} className="flex flex-col gap-2 w-28">
                <div className="h-11 flex flex-col justify-end">
                    <a href={"#"}><p
                        className="line-clamp-2 underline decoration-solid text-blue-600 visited:text-purple-600">{movie.title}</p>
                    </a>
                </div>
                <Image src={movie.image_url} width={120} height={100} alt={`${movie.title} image`}/>
            </div>)
        }
    </div>

}