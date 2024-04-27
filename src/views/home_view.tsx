import React from 'react';
import { Box, Container, Grid, Paper, Tab, Typography } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {Profile} from "../components/profile";
import data from "../cv_details.json"
import {JobDescription} from "../components/job_description";
import {ContactDetails} from "../components/contact_details";
import {Skills} from "../components/skills";


export function HomeView() {

    const [value, setValue] = React.useState("1");


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Grid item xs={12} mt={12} lg={12} xl={12}>
                <Container maxWidth="xl">
                    <Paper elevation={0} square sx={{padding: "2rem"}}>
                        <Box sx={{width: '100%', "padding-bottom": "4rem"}}>
                            <Typography variant={"h2"} align={"center"}>
                                John Dowling
                            </Typography>
                            <Typography variant={"h6"} align={"center"}>
                                Curriculum Vitae
                            </Typography>
                            <ContactDetails {...data.contact_details}/>
                        </Box>

                        <Box sx={{width: '100%', typography: 'body1'}}>
                            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                                <TabList onChange={handleChange} centered>
                                    <Tab label="Personal Details" value="1"/>
                                    <Tab label="Skills" value="2"/>
                                    <Tab label="Work History" value="3"/>
                                </TabList>
                            </Box>
                            <TabPanel value="1" sx={{paddingTop: "8rem"}}>
                                <Profile/>
                            </TabPanel>
                            <TabPanel value="2" sx={{paddingTop: "8rem"}}>
                                <Skills/>
                            </TabPanel>
                            <TabPanel value="3" sx={{paddingTop: "8rem"}}>
                                <Grid container spacing={6}>

                                    {
                                        data.work_history.map(
                                            job_history => {
                                                return (
                                                    <JobDescription {...job_history} />
                                                );
                                            }
                                        )
                                    }
                                </Grid>
                            </TabPanel>
                        </Box>

                    </Paper>
                </Container>
            </Grid>
        </TabContext>
    );

}

