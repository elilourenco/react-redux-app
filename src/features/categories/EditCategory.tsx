
import { useParams }from "react-router-dom";
import { Category,  updateCategory, useGetCategoryQuery } from "./categorySlice";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { useSnackbar } from "notistack";
import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { CategoryForm } from "./components/CategoryForm";



export const CategoryEdit = () => {
    const id = useParams().id || "";
    const { data: category, isFetching } = useGetCategoryQuery({ id });
    const [isdisabled, setIsdisabled] = useState(false);

    const [categoryState, setCategoryState] = useState<Category>({
        id: "",
        name: "",
        description: "",
        is_active: false,
        deleted_at: null,
        created_at: new Date(),
        updated_at: new Date(),
    });

    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        dispatch(updateCategory(categoryState));
        enqueueSnackbar("Success Updating the Category!", { variant: "success" });
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setCategoryState({ ...categoryState, [name]: value });
    };

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCategoryState({ ...categoryState, [name]: checked });
    };

    useEffect(() => {
        if (category && Array.isArray(category.data) && category.data.length > 0) {
            const cat = category.data[0];
            setCategoryState({
                ...cat,
                created_at: new Date(cat.created_at),
                updated_at: new Date(),
                deleted_at: cat.deleted_at ? new Date(cat.deleted_at) : null
            });
        }
    }, [category]);

    return (
        <Box>
            <Paper>
                <CategoryForm
                    category={categoryState}
                    isdisabled={isdisabled}
                    isLoading={isFetching}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleToggle={handleToggle}
                />
            </Paper>
        </Box>
    );
};

export default CategoryEdit;

