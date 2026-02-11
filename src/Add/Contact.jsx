// import { Box, Typography } from "@mui/material";

// function Contact() {
//     return (

//         <Box>
//                 <Typography sx={{ textAlign: 'center', paddingTop: '50px', fontSize: '22px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                     The power of design help us to solve complex problems <br /> and cultivate business solutions.
//                 </Typography>
//                 <Box sx={{ paddingTop: '40px', ml: 66 }}>
//                     <Typography sx={{ border: '1px solid', fontSize: '14px', width: '150px', padding: '16px', textAlign: 'center', borderRadius: '6px', bgcolor: 'black', color: 'white', fontFamily: 'inherit', fontWeight: '500' }}>
//                         CONTACT US
//                     </Typography>
//                 </Box>
//             </Box>


//     )
// }

// export default Contact;

// ====================================================



import { Box, Typography } from "@mui/material";

function Contact() {
    return (

        <Box
            sx={{
                paddingX: { xs: 2, sm: 4 },
                paddingBottom: '60px',
                animation: 'fadeUp 1s ease'
            }}
        >
            <Typography
                sx={{
                    textAlign: 'center',
                    paddingTop: '50px',
                    fontSize: { xs: '18px', sm: '20px', md: '22px' },
                    color: '#757575',
                    fontFamily: 'inherit',
                    fontWeight: '500',
                    lineHeight: '32px'
                }}
            >
                The power of design help us to solve complex problems <br />
                and cultivate business solutions.
            </Typography>

            <Box
                sx={{
                    paddingTop: '40px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Typography
                    sx={{
                        border: '1px solid black',
                        fontSize: '14px',
                        width: '150px',
                        padding: '16px',
                        textAlign: 'center',
                        borderRadius: '6px',
                        bgcolor: 'black',
                        color: 'white',
                        fontFamily: 'inherit',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: '0.4s',
                        '&:hover': {
                            bgcolor: 'white',
                            color: 'black',
                            transform: 'translateY(-4px)'
                        }
                    }}
                >
                    CONTACT US
                </Typography>
            </Box>

            {/* animation */}
            <style>
                {`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                `}
            </style>
        </Box>

    )
}

export default Contact;
