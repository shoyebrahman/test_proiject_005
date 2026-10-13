import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    tasks: ITask[];
    filter: "all" | "High" | "Medium" | "Low";
}


const initialState : InitialState = {
    tasks: [
         {
        id: "asdfsdfasf",
        title: "Learn Redux",
        description: "Learn Redux",
        dueDate: "2025",
        isCompleted: false,
        priority: "High",
    }
    ],
    filter: "all"
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {}
    
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter;
}

export default taskSlice.reducer