import React, {useEffect, useState} from 'react';
import { CastMember } from '../../types/CastMembers';
import { InitialState, useCreateCastMemberMutation } from './CastMembersSlice';
import {useSnackbar} from 'notistack'
import { Box, Typography, Paper } from '@mui/material';
import { CastMemberForm } from './components/CastMemberForm';



export const CreateCastMembers =() => {

    const  [castMemberState, setCastMemberState] = useState<CastMember>(InitialState);

    const  [createCastMember, status] = useCreateCastMemberMutation();
    const { enqueueSnackbar } = useSnackbar();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setCastMemberState({ ...castMemberState, [name]: value });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        await createCastMember(castMemberState)
     
            
    }

     function handleToggle(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = e.target;
        setCastMemberState({ ...castMemberState, [name]: checked });
    }

    useEffect(() => {
        if (status.isSuccess) {
            enqueueSnackbar("Cast Member Created Successfully", { variant: "success" });
            setCastMemberState(InitialState);
        }
        if (status.isError) {
            enqueueSnackbar("Error Creating Cast Member", { variant: "error" });
        }


        
        },[status, enqueueSnackbar]);
    


     return(
        <Box>
            <Paper>
                <Box p={2}>
                    <Box mb={2}>
                    <Typography variant='h4'> Create CastMember</Typography>
                    </Box>
                </Box>
                <CastMemberForm
                    castMember={castMemberState}
                    isdisabled={status.isLoading}
                    isLoading={status.isLoading}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleToggle={handleToggle}

                />
            </Paper>
        </Box>
    )

}  