import * as React from "react";
import axios from "axios";
import "./styles.css";

const {useState} = React;

const fetchData = () => {
    return axios.get('https://zj86ft7ood.execute-api.us-west-2.amazonaws.com/prod/randomcharacter')
    .then(res => {

        console.log(res);
        return res;
})
    .catch(err => {
        console.error(err);
    });
}