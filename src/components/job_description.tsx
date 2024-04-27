import {Accordion, AccordionDetails, AccordionSummary, Grid, List, ListItem, Typography} from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export function JobDescription(
    {
        company_name, start_date, end_date, job_title, job_description, languages, technologies
    }:
        {
            company_name: string, start_date: string, end_date: string, job_title: string, job_description: string,
            languages: string[], technologies: string[]
        }
) {
    return (
        <>
            <Grid container justifyContent={"center"} sx={{margin: "2rem"}}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant={'h6'} textAlign={"center"}>
                        {company_name}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography textAlign={"center"}>
                        {start_date} - {end_date}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography textAlign={"center"}>
                        {job_title}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <Accordion elevation={0}>
                        <AccordionSummary
                            expandIcon={<ArrowDownwardIcon />}
                        >
                            <Grid item>
                                <Typography  sx={{padding: 2}} textAlign={"center"}>
                                    Description (expand for more details)
                                </Typography>
                                <Typography  sx={{padding: 2}} textAlign={"center"}>
                                    {job_description}
                                </Typography>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container justifyContent={"center"} spacing={6}>
                                <Grid item>
                                    <Typography variant={'h6'} textAlign={'center'}>
                                        Languages Used
                                    </Typography>
                                    <List>
                                        {
                                            languages.map(
                                                (item) => <ListItem>{item}</ListItem>
                                            )
                                        }
                                    </List>
                                </Grid>
                                <Grid item>
                                    <Typography variant={'h6'} textAlign={'center'}>
                                        Technologies Used
                                    </Typography>
                                    <List>
                                        {
                                            technologies.map(
                                                (item) => <ListItem>{item}</ListItem>
                                            )
                                        }
                                    </List>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>


        </>
    );

}