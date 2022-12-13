import { FormFieldSearch } from "../styles/FieldSearch";

import React, { useState } from "react"

import { TextField, Button } from "@mui/material";

import { MagnifyingGlass } from "phosphor-react";

import { useNavigate } from "react-router-dom";



export default function FieldSearch() {

    const [search, setSearch] = useState<string>('');

    const navigate = useNavigate();

    const handleSearchItem = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!search){
            return
        }
        
        navigate(`/search/${search}`);
    }

    return (
        <FormFieldSearch onSubmit={handleSearchItem}>
            <TextField
                id="search-items"
                label="Pesquisa"
                color="primary"
                variant="outlined"
                autoComplete="off"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
            >
                <MagnifyingGlass size={20} weight="bold"/>
            </Button>
        </FormFieldSearch>
    )
}