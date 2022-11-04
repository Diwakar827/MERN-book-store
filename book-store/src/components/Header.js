import React,{useState} from 'react';
import { AppBar, Tab,Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import {NavLink} from "react-router-dom";
const Header = () => {

    const[value,setValue]=useState();
    return (
        <>

            <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'>
                <Toolbar>


                    <Typography >
                        <LibraryBooksOutlinedIcon />
                    </Typography>
                    <Tabs
                     sx={{ml:'auto'}} 
                    textColor='inherit' 
                    indicatorColor='primary' 
                    value={value} 
                    onChange={(e,val)=>setValue(val) }> 
                    {/* sx is css for right and  value=0 bydefault takes 0th tab and render it which change dynamically*/}
                         <Tab LinkComponent={NavLink} to="/add" label="Add product"/>
                         <Tab  LinkComponent={NavLink} to="/books" label="Books"/>
                         <Tab   LinkComponent={NavLink} to="/about" label="About us"/>

                    </Tabs>

                </Toolbar>
            </AppBar>

        </>
    );
};

export default Header;