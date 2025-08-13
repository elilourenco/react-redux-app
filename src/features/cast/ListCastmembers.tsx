import { useState } from "react";
import { useGetcastMembersQuery } from "./CastMembersSlice";
import { GridFilterModel } from "@mui/x-data-grid";



export const  ListCastmembers = () => {

const [page, setPage] = useState(1);
const [search, setSearch] = useState("");
const [perPage, setPerPage] = useState(10);
const [rowsPerPage] = useState([10, 25, 50, 100]);
const options = {page, perPage, search};


const {data, isFetching, error} = useGetcastMembersQuery(options);
function handlePageChange(page:number) {

  setPage(page+1);
}


function handleOnPageSizeChange(perPage:number) {
  setPerPage(perPage);
}


  function handleFilterChange(filterModel:GridFilterModel) {
    if(filterModel.quickFilterValues?.length ) {
      const search = filterModel.quickFilterValues.join("");
      options.search = search;
      setSearch(search);
    }

    return setSearch("");    
    
  }

  return (
     <div>
      <h1>List of Cast Members</h1>
    </div>
    
  );
}