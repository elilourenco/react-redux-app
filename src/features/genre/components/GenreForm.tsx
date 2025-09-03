import React from "react";
import { Category } from "../../../types/Category";

type GenreFormProps = {
    genre: any;
    categories?: Category[];
    isLoading: boolean;
    isDisabled: boolean;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}   


export function GenreForm({
    genre,
    categories,
    isLoading,
    isDisabled,
    handleSubmit,
    handleChange
}){
    return(
        <div>GenreForm</div>
    )
}