'use client'
import {useQuery} from "@tanstack/react-query";
import {getMovies} from "@/components/dashboard/api/getMovies";


export default function useGetMovies() {

    const {data, isFetching} = useQuery({
        queryKey: ["movies"],
        queryFn: getMovies,
    })

    return {data, isFetching}
}