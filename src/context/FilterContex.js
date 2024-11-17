import { createContext } from "react"

const initialFilterParams={
    items:[]
    

}
const FilterContext=createContext(initialFilterParams);
export default FilterContext;