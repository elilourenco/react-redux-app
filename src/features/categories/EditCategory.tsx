
import { useParams }from "react-router-dom";
import { Category,useGetCategoryQuery, useUpdateCategoryMutation } from "./categorySlice";
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
    const [updateCategory, Status] = useUpdateCategoryMutation();

    const [categoryState, setCategoryState] = useState<Category>({
        id: Number(id),
        first_Name: "",
        last_Name: "",
        email: "",
        
    });

    const dispatch = useAppDispatch();
    const { enqueueSnackbar } = useSnackbar();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await updateCategory(categoryState)
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

    {/* useEffect(() => {
        if (category && Array.isArray(category.data) && category.data.length > 0) {
            const cat = category.data[0];
            setCategoryState({
                ...cat,
                created_at: "",
                updated_at: "",
                deleted_at: cat.deleted_at ? new Date(cat.deleted_at) : null
            });
        }
    }, [category]); */}


useEffect(() => {
    if (Status.isSuccess) {
        enqueueSnackbar("Category updated successfully!", { variant: "success" });
        setIsdisabled(true);
    }
    if (Status.isError) {
        enqueueSnackbar("Error updating category!", { variant: "error" });
    }
},[enqueueSnackbar, Status.error, Status.isSuccess]);

    return (
        <Box>
            <Paper>
                <CategoryForm
                    category={categoryState}
                    isdisabled={Status.isLoading }
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

