import {Box, Typography} from "@mui/material";
import data from "../cv_details.json"


export function Profile() {
    return (
        <Box>
            <Typography variant={'h6'} sx={{padding: 2}} textAlign={"center"}>
                Personal Statement
            </Typography>
            <Typography sx={{padding: 2}} textAlign={"center"}>
                {data.profile.personal_statement}
            </Typography>

        </Box>
    )

}