// import { Box, Typography } from "@mui/material";

// function Work() {
//     return (

//         <Box sx={{ paddingTop: '100px', padding: '60px', display: 'flex' }}>
//             <Box>
//                 <Typography >
//                     <img style={{ width: '600px' }} src="https://resonance-react-app.netlify.app/assets/images/promo-4.jpg" alt="" />
//                 </Typography>
//             </Box>

//             <Box sx={{ ml: 10 }}>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', fontSize: '48px' }}>
//                     How we work?
//                 </Typography>
//                 <Typography sx={{ fontWeight: '900', paddingTop: '20px' }}>
//                     _________________________________________________________________
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     01. Discussion
//                 </Typography>
//                 <Typography sx={{ fontWeight: '900', paddingTop: '4px' }}>
//                     _________________________________________________________________
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     02. Design
//                 </Typography>
//                 <Typography sx={{ fontWeight: '900', paddingTop: '4px' }}>
//                     _________________________________________________________________
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     03. Development
//                 </Typography>
//                 <Typography sx={{ fontWeight: '900', paddingTop: '4px' }}>
//                     _________________________________________________________________
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     04. Production
//                 </Typography>
//                 <Typography sx={{ fontWeight: '900', paddingTop: '4px' }}>
//                     _________________________________________________________________
//                 </Typography>

//                 <Box sx={{ paddingTop: '30px' }}>
//                     <Typography sx={{ border: '1px solid', borderRadius: '10px', padding: '16px', fontSize: '14px', fontFamily: 'inherit', textAlign: 'center', width: '160px', bgcolor: 'black', color: 'white' }}>
//                         START A PROJECT
//                     </Typography>
//                 </Box>

//             </Box>

//         </Box>

//     )
// }


// export default Work;


// ========================================================



import { Box, Typography } from "@mui/material";

function Work() {
    return (

        <Box
            sx={{
                paddingTop: { xs: '60px', md: '100px' },
                padding: { xs: '20px', sm: '40px', md: '60px' },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '40px', md: '0' },
                animation: 'fadeUp 1s ease'
            }}
        >
            {/* image section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <img
                    style={{
                        width: '100%',
                        maxWidth: '600px',
                        transition: '0.4s'
                    }}
                    src="https://resonance-react-app.netlify.app/assets/images/promo-4.jpg"
                    alt=""
                />
            </Box>

            {/* text section */}
            <Box
                sx={{
                    ml: { xs: 0, md: 10 }
                }}
            >
                <Typography
                    sx={{
                        fontWeight: '500',
                        fontSize: { xs: '32px', sm: '40px', md: '48px' }
                    }}
                >
                    How we work?
                </Typography>

                <Typography sx={{ fontWeight: '900', paddingTop: '20px' }}>
                    _________________________________________________________________
                </Typography>

                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    01. Discussion
                </Typography>
                <Typography sx={{ fontWeight: '900', paddingTop: '4px' }}>
                    _________________________________________________________________
                </Typography>

                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    02. Design
                </Typography>
                <Typography sx={{ fontWeight: '900', paddingTop: '4px' }}>
                    _________________________________________________________________
                </Typography>

                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    03. Development
                </Typography>
                <Typography sx={{ fontWeight: '900', paddingTop: '4px' }}>
                    _________________________________________________________________
                </Typography>

                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    04. Production
                </Typography>
                <Typography sx={{ fontWeight: '900', paddingTop: '4px' }}>
                    _________________________________________________________________
                </Typography>

                <Box sx={{ paddingTop: '30px' }}>
                    <Typography
                        sx={{
                            border: '1px solid black',
                            borderRadius: '10px',
                            padding: '16px',
                            fontSize: '14px',
                            textAlign: 'center',
                            width: '160px',
                            bgcolor: 'black',
                            color: 'white',
                            cursor: 'pointer',
                            transition: '0.4s',
                            '&:hover': {
                                bgcolor: 'white',
                                color: 'black',
                                transform: 'translateY(-4px)'
                            }
                        }}
                    >
                        START A PROJECT
                    </Typography>
                </Box>
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

                img:hover {
                    transform: scale(1.05);
                }
                `}
            </style>

        </Box>

    )
}

export default Work;
