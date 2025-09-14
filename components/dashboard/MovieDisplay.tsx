'use client'
import useGetMovies from "@/components/dashboard/hooks/useGetMovies";
import {Movie} from "@/components/dashboard/api/types/movies";
import Image from "next/image";

export default function MovieDisplay() {
    const {isFetching, data} = useGetMovies()

    console.log(data)

    return <div className="flex flex-wrap gap-10">
        {isFetching ? <p>Loading...</p> :
            data?.items.map((movie: Movie) => <div key={movie.id} className="flex flex-col gap-2">
                <p className="break-normal">{movie.title}</p>
                <Image src={movie.image_url} width={100} height={100} alt={`${movie.title} image`}/>
            </div>)
        }
    </div>

}