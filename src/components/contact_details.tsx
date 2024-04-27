import {Box, Grid, Link, Typography} from "@mui/material";


export function ContactDetails(
    {email_address, telephone_number, github}: {email_address: string, telephone_number: string, github: string}
) {
    return (

    <Grid container>
        <Grid item md={12}>
            <Typography textAlign={"center"}>Email Address: <Link href={"mailto:" + email_address}>{email_address}</Link></Typography>
        </Grid>
        <Grid item md={12}>
            <Typography textAlign={"center"}>Telephone Number: {telephone_number}</Typography>
        </Grid>
        <Grid item md={12}>
            <Typography textAlign={"center"}>Github: <Link href={github}>{github}</Link></Typography>
        </Grid>
    </Grid>

    )

}