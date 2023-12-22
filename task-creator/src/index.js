/*-----------------------------------------------
 Don't edit this file, it is used only for preview.
-----------------------------------------------*/
import React from "react";
import {Provider} from "react-redux";
import ReactDOM from "react-dom"
import store from './store';
import TaskCreator from "./TaskCreator";
import TasksList from "./TasksList";


ReactDOM.render(
    <Provider store={store}>
        <TaskCreator/>
        <TasksList/>
    </Provider>,
    document.getElementById("root")
);

