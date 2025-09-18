'use client'
import {useQuery} from "@tanstack/react-query";
import {getMovies} from "@/components/dashboard/api/getMovies";


export default function useGetMovies(genre: string | null = null) {

    const {data, isFetching} = useQuery({
        queryKey: ["movies"],
        queryFn: () => getMovies(genre),
    })

    return {data, isFetching}
}