// import { Box, Typography } from "@mui/material";

// function Service() {
//     return (

//         // text section .............

//         <Box sx={{ display: 'flex', padding: '50px', paddingTop: '100px' }}>
//             <Box>
//                 <Typography sx={{ color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                     OUR SERVICES
//                 </Typography>
//                 <Typography sx={{ paddingTop: '20px', fontSize: '46px', fontWeight: '500', fontFamily: 'inherit' }}>
//                     We provide the best <br /> development solutions.
//                 </Typography>
//                 <Typography sx={{ paddingTop: '20px', fontFamily: 'inherit', fontSize: '22px', fontWeight: '500', color: '#757575' }}>
//                     The power of design help us to solve complex <br /> problems and cultivate business solutions.
//                 </Typography>

//                 <Typography sx={{ paddingTop: '40px', fontSize: '36px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Brand Strategy
//                 </Typography>
//                 <Typography sx={{ lineHeight: '30px', color: '#757575', fontSize: '36px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Art Direction
//                 </Typography>
//                 <Typography sx={{ lineHeight: '60px', color: '#757575', fontSize: '36px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Creative Design
//                 </Typography>
//                 <Typography sx={{ lineHeight: '30px', color: '#757575', fontSize: '36px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Development
//                 </Typography>
//                 <Typography sx={{ lineHeight: '60px', color: '#757575', fontSize: '36px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Photography
//                 </Typography>
//                 <Typography sx={{ lineHeight: '30px', color: '#757575', fontSize: '36px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Marketing
//                 </Typography>
//             </Box>

//             {/* img section .................. */}

//             <Box>
//                 <Typography sx={{ marginLeft: '40px' }}>
//                     <img style={{ width: '600px' }} src="https://resonance-react-app.netlify.app/assets/images/services/service-4.jpg" alt="" />
//                 </Typography>
//             </Box>


//         </Box>

//     )
// }

// export default Service;


// =============================================================



import { Box, Typography } from "@mui/material";

function Service() {
    return (

        // text section .............

        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                padding: { xs: '20px', sm: '40px', md: '50px' },
                paddingTop: { xs: '60px', md: '100px' },
                alignItems: 'center',
                gap: { xs: '40px', md: '0' }
            }}
        >
            <Box
                sx={{
                    animation: 'fadeUp 1s ease'
                }}
            >
                <Typography sx={{ color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                    OUR SERVICES
                </Typography>

                <Typography
                    sx={{
                        paddingTop: '20px',
                        fontSize: { xs: '30px', sm: '38px', md: '46px' },
                        fontWeight: '500',
                        fontFamily: 'inherit'
                    }}
                >
                    We provide the best <br /> development solutions.
                </Typography>

                <Typography
                    sx={{
                        paddingTop: '20px',
                        fontFamily: 'inherit',
                        fontSize: { xs: '18px', md: '22px' },
                        fontWeight: '500',
                        color: '#757575'
                    }}
                >
                    The power of design help us to solve complex <br />
                    problems and cultivate business solutions.
                </Typography>

                {[
                    "Brand Strategy",
                    "Art Direction",
                    "Creative Design",
                    "Development",
                    "Photography",
                    "Marketing"
                ].map((item, index) => (
                    <Typography
                        key={index}
                        sx={{
                            lineHeight: { xs: '45px', md: index % 2 === 0 ? '60px' : '30px' },
                            fontSize: { xs: '26px', md: '36px' },
                            fontFamily: 'inherit',
                            fontWeight: '500',
                            color: index === 0 ? 'black' : '#757575',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            '&:hover': {
                                color: 'black',
                                transform: 'translateX(10px)'
                            }
                        }}
                    >
                        {item}
                    </Typography>
                ))}
            </Box>

            {/* img section .................. */}

            <Box
                sx={{
                    marginLeft: { xs: '0', md: '40px' },
                    animation: 'fadeIn 1.2s ease'
                }}
            >
                <Typography>
                    <img
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            borderRadius: '8px',
                            transition: 'transform 0.5s ease'
                        }}
                        src="https://resonance-react-app.netlify.app/assets/images/services/service-4.jpg"
                        alt=""
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                </Typography>
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
                            transform: scale(0.9);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1);
                        }
                    }
                `}
            </style>

        </Box>
    );
}

export default Service;
