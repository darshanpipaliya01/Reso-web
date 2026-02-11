// import { Box, Typography } from "@mui/material";

// function Port() {
//     return (

//         <Box sx={{ padding: '50px', paddingTop: '50px', display: 'flex' }}>
//             <Box>
//                 <Typography sx={{ fontFamily: 'inherit', fontSize: '16px', color: '#757575', fontWeight: '500' }}>
//                     OUR PORTFOLIO
//                 </Typography>
//                 <Typography sx={{ paddingTop: '20px', fontFamily: 'inherit', fontWeight: '500', fontSize: '46px' }}>
//                     Creativity meets <br /> technology here.
//                 </Typography>
//             </Box>


//             <Box sx={{ display: 'flex' }}>
//                 <Typography sx={{ paddingTop: '70px', marginLeft: '300px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
//                     All works
//                 </Typography>
//                 <Typography sx={{ paddingTop: '70px', color: '#757575', marginLeft: '50px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
//                     Branding
//                 </Typography>
//                 <Typography sx={{ paddingTop: '70px', color: '#757575', marginLeft: '50px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
//                     Design
//                 </Typography>
//                 <Typography sx={{ paddingTop: '70px', color: '#757575', marginLeft: '50px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
//                     Development
//                 </Typography>
//             </Box>
//         </Box>

//     )
// }


// export default Port;


// ======================================================



import { Box, Typography } from "@mui/material";

function Port() {
    return (

        <Box
            sx={{
                padding: { xs: '20px', sm: '40px', md: '50px' },
                paddingTop: '50px',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: '30px', md: '0' }
            }}
        >
            <Box
                sx={{
                    animation: 'fadeUp 1s ease'
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'inherit',
                        fontSize: '16px',
                        color: '#757575',
                        fontWeight: '500'
                    }}
                >
                    OUR PORTFOLIO
                </Typography>

                <Typography
                    sx={{
                        paddingTop: '20px',
                        fontFamily: 'inherit',
                        fontWeight: '500',
                        fontSize: { xs: '30px', sm: '38px', md: '46px' }
                    }}
                >
                    Creativity meets <br /> technology here.
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    marginLeft: { xs: '0', md: '300px' },
                    animation: 'fadeIn 1.2s ease'
                }}
            >
                {["All works", "Branding", "Design", "Development"].map((item, index) => (
                    <Typography
                        key={index}
                        sx={{
                            paddingTop: { xs: '20px', md: '70px' },
                            marginLeft: { xs: '0', md: index === 0 ? '0' : '50px' },
                            marginRight: { xs: '20px', md: '0' },
                            fontFamily: 'inherit',
                            fontWeight: '500',
                            fontSize: '18px',
                            color: index === 0 ? 'black' : '#757575',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                color: 'black',
                                transform: 'translateY(-5px)'
                            }
                        }}
                    >
                        {item}
                    </Typography>
                ))}
            </Box>

            {/* animations */}
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

                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateX(40px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                `}
            </style>

        </Box>
    );
}

export default Port;
