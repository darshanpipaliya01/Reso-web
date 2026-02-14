import { Box, Typography } from "@mui/material";

function Header() {
    return (

        // header 1 ==========================

        <Box sx={{ padding: '40px', paddingTop: '30px', display: 'flex' }}>
            <Box>
                <Typography>
                    <img style={{ width: '50%' }} src="https://resonance-react-app.netlify.app/assets/images/logo-dark.svg" alt="" />
                </Typography>
            </Box>

        {/* header 2 ===========================  */}

            <Box sx={{ display: 'flex', marginLeft: '80px', paddingTop: '10px' }}>
                <Typography sx={{ fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
                    Home<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
                </Typography>
                <Typography sx={{ marginLeft: '40px', fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
                    Pages<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
                </Typography>
                <Typography sx={{ marginLeft: '40px', fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
                    Elements<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
                </Typography>
                <Typography sx={{ marginLeft: '40px', fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
                    Portfolio<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
                </Typography>
                <Typography sx={{ marginLeft: '40px', fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
                    Blog<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
                </Typography>
            </Box>

        {/* header 3 ===================  */}

            <Box sx={{ display: 'flex', marginLeft: '100px', paddingTop: '10px' }}>
                <Typography sx={{ fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
                    En<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
                </Typography>
                <Typography sx={{ fontFamily: 'inherit', fontWeight: '600', fontSize: '16px', marginLeft: '30px' }}>
                    Let's Work together
                </Typography>
            </Box>


        </Box>

    )
}

export default Header;


// =============================================
