import React, {useEffect, useState} from 'react';
import { CastMember, CastMemberParams } from '../../types/CastMembers';
import { InitialState, useGetcastMembersQuery,useUpdateCastMemberMutation } from './CastMembersSlice';
import {useSnackbar} from 'notistack';
import { useParams } from 'react-router-dom';
import { Box} from '@mui/material';
import { Paper } from 'material-ui';
import { CastMemberForm } from './components/CastMemberForm';




export const EditCastMember =() => {

    const id = useParams().id ?? "";
    const {data: castMember, isFetching} = useGetcastMembersQuery(id as unknown as CastMemberParams);
    const [castMemberState, setCastMemberState] = useState<CastMember>(InitialState);
    const  [updateCastMember, status] = useUpdateCastMemberMutation();
    const {enqueueSnackbar } = useSnackbar();

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setCastMemberState({ ...castMemberState, [name]: value });
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        await updateCastMember(castMemberState)
    }

    function handleToggle(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, checked } = e.target;
        setCastMemberState({ ...castMemberState, [name]: checked });
    }


    useEffect(() => {
        if (castMember && Array.isArray(castMember.data) && castMember.data.length > 0) {
            setCastMemberState(castMember.data[0]);
        } else if (castMember && !Array.isArray(castMember.data)) {
            setCastMemberState(castMember.data);
        }
    },[castMember]);

    useEffect(() => {
        if (status.isSuccess) {
            enqueueSnackbar("Cast Member Updated Successfully", { variant: "success" });
            setCastMemberState(InitialState);
        }
        if (status.isError) {
            enqueueSnackbar("Error Updating Cast Member", { variant: "error" });
        }


        
    },[status, enqueueSnackbar]);
    


     return(
        <Box>
            <Paper>
                <CastMemberForm
                    castMember={castMemberState}
                    isdisabled={status.isLoading}
                    isLoading={ isFetching || status.isLoading}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleToggle={handleToggle}
                />
                    
                    

                
            </Paper>
        </Box>
     )

}  