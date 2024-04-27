import { Grid, List, ListItem, Typography} from "@mui/material";
import data from '../cv_details.json'

export function Skills(

) {
    return (
        <Grid container justifyContent={"center"} spacing={10}>
            <Grid item md={4}>
                <Typography variant={'h6'} textAlign={'center'}>Programming Languages</Typography>
                <List>
                    {
                        data.known_languages.map(
                            (language, i) => {
                                return (
                                    <Grid container justifyContent={"center"}>
                                        <Grid item>
                                            <img width={50} src={data.known_languages_images[i]} alt={""}/>
                                        </Grid>
                                        <Grid item>
                                            <ListItem>{language}</ListItem>
                                        </Grid>
                                    </Grid>
                                );
                            }
                        )
                    }
                </List>
            </Grid>
            <Grid item md={4}>
                <Typography variant={'h6'} textAlign={'center'}>Databases</Typography>
                <List>
                    {
                        data.known_databases.map(
                            (language, i) => {
                                return (
                                    <Grid container justifyContent={"center"}>
                                        <Grid item>
                                            <img width={50} src={data.known_databases_images[i]} alt={""}/>
                                        </Grid>
                                        <Grid item>
                                            <ListItem>{language}</ListItem>
                                        </Grid>
                                    </Grid>
                                );
                            }
                        )
                    }
                </List>
            </Grid>
            <Grid item md={4}>
                <Typography variant={'h6'} textAlign={'center'}>Cloud Technologies</Typography>
                <List>
                    {
                        data.known_cloud.map(
                            (language, i) => {
                                return (
                                    <Grid container justifyContent={"center"}>
                                        <Grid item>
                                            <img width={50} src={data.known_cloud_images[i]} alt={""}/>
                                        </Grid>
                                        <Grid item>
                                            <ListItem>{language}</ListItem>
                                        </Grid>
                                    </Grid>
                                );
                            }
                        )
                    }
                </List>
            </Grid>
        </Grid>
    )
}