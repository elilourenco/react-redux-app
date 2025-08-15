import { useEffect, useState } from "react";
import { useDeleteCastMemberMutation, useGetcastMembersQuery } from "./CastMembersSlice";
import { GridFilterModel } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { CastMembersTable } from "./components/CastMembersTable";


const initialOptions = {
  page: 1,
  perPage: 10,
  search: "",
  rowsPerPage: [10, 25, 50, 100],
}

export const  ListCastMembers = () => {

const { enqueueSnackbar } = useSnackbar();
const [options, setOptions] = useState(initialOptions);
const {data, isFetching, error} = useGetcastMembersQuery(options);
const [deleteCastMember, deleteCastMemberStatus] = useDeleteCastMemberMutation();


async function handleDeleteCastMember(id: string) {
  const castMember = data?.data.find((member: any) => member.id === id);
  if (castMember) {
    await deleteCastMember(castMember);
  }
}
function handleOnPageChange(page:number) {
  setOptions({ ...options, page: page + 1 });
}

function handleOnPageSizeChange(perPage:number) {
  options.perPage = perPage;
  setOptions({ ...options, perPage})
}


  function handleFilterChange(filterModel:GridFilterModel) {
    if(filterModel.quickFilterValues?.length ) {
      const search = filterModel.quickFilterValues.join("");
      options.search = search;
      setOptions({ ...options, search });
    }

    return setOptions({ ...options, search: "" });   
    
  }

  useEffect(() => {

    if( deleteCastMemberStatus.isSuccess) {
      enqueueSnackbar(`Cast Member Deleted`, { variant: "success" });
     
    }
    if(deleteCastMemberStatus.isError) {
      enqueueSnackbar(`Error deleting Cast Member`, { variant: "error" });
    }

  },[deleteCastMemberStatus, enqueueSnackbar]);

  if(error){
    return (
      <Box  maxWidth="lg" sx={{mt:4, mb:4 }}>
        <Box display={"flex"} justifyContent="flex-end" >
          <Button 
          variant="contained"
          color="secondary"
          component={Link}
          to="/cast-members/create"
          style={{marginBottom: "1rem"}}
          >
            New Cast Member

          </Button>
          </Box>

          <CastMembersTable
            data={data}
            perPage={options.perPage}
            isFetching={isFetching}
            rowsPerPage={options.rowsPerPage}
            handleOnPageChange={handleOnPageChange}
            handleFilterChange={handleFilterChange}
            handleOnPageSizeChange={handleOnPageSizeChange}
            handleDelete={handleDeleteCastMember}
          />

      
      </Box>
    )
  }

  return (
     <div>
      <h1>List of Cast Members</h1>
    </div>
    
  );
}