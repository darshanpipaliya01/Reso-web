// import { Box, Typography } from "@mui/material";

// function Portimg() {
//     return (

//         <Box sx={{ display: 'flex' }}>


//             {/* 1.................. */}

//             <Box sx={{ padding: '30px', paddingTop: '150px' }}>
//                 <Typography>
//                     <img style={{ width: '350px', height: '450px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-1.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontSize: '20px', fontWeight: '500' }}>
//                     Medium Scene
//                 </Typography>
//                 <Typography sx={{ paddingTop: '2px', color: '#757575', fontWeight: '500', fontFamily: 'inherit', fontSize: '18px' }}>
//                     Lightbox
//                 </Typography>

//                 <Typography sx={{ paddingTop: '80px' }}>
//                     <img style={{ width: '350px', height: '450px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-2.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontSize: '20px', fontWeight: '500' }}>
//                     Super Awards
//                 </Typography>
//                 <Typography sx={{ paddingTop: '2px', color: '#757575', fontWeight: '500', fontFamily: 'inherit', fontSize: '18px' }}>
//                     External Page
//                 </Typography>
//             </Box>

//             {/* 2.................................... */}

//             <Box sx={{ padding: '50px', paddingTop: '50px' }}>
//                 <Typography>
//                     <img style={{ width: '350px', height: '450px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-4.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontSize: '20px', fontWeight: '500' }}>
//                     Rise of Design
//                 </Typography>
//                 <Typography sx={{ paddingTop: '2px', color: '#757575', fontWeight: '500', fontFamily: 'inherit', fontSize: '18px' }}>
//                     External Page
//                 </Typography>

//                 <Typography sx={{ paddingTop: '80px' }}>
//                     <img style={{ width: '350px', height: '450px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-5.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontSize: '20px', fontWeight: '500' }}>
//                  Amplitude
//                 </Typography>
//                 <Typography sx={{ paddingTop: '2px', color: '#757575', fontWeight: '500', fontFamily: 'inherit', fontSize: '18px' }}>
//                   External Page
//                 </Typography>
//             </Box>


//             {/* 3............................................ */}


//             <Box sx={{ padding: '20px', paddingTop: '150px' }}>
//                 <Typography>
//                     <img style={{ width: '350px', height: '450px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-3.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontSize: '20px', fontWeight: '500' }}>
//                     Visual Stranger
//                 </Typography>
//                 <Typography sx={{ paddingTop: '2px', color: '#757575', fontWeight: '500', fontFamily: 'inherit', fontSize: '18px' }}>
//                   External Page
//                 </Typography>

//                 <Typography sx={{ paddingTop: '80px' }}>
//                     <img style={{ width: '350px', height: '450px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-6.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontSize: '20px', fontWeight: '500' }}>
//                     Design System
//                 </Typography>
//                 <Typography sx={{ paddingTop: '2px', color: '#757575', fontWeight: '500', fontFamily: 'inherit', fontSize: '18px' }}>
//                     Lightbox
//                 </Typography>
//             </Box>


//         </Box>

//     )
// }


// export default Portimg;


// ================================================



import { Box, Typography } from "@mui/material";

function Portimg() {
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'center',
                gap: { xs: '40px', md: '0' }
            }}
        >

            {/* 1.................. */}
            <Box
                sx={{
                    padding: { xs: '20px', md: '30px' },
                    paddingTop: { xs: '40px', md: '150px' },
                    animation: 'fadeUp 1s ease'
                }}
            >
                <Box sx={{ overflow: 'hidden' }}>
                    <img
                        style={{ width: '100%', maxWidth: '350px', height: '450px', transition: '0.4s' }}
                        src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-1.jpg"
                        alt=""
                    />
                </Box>
                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    Medium Scene
                </Typography>
                <Typography sx={{ color: '#757575', fontSize: '18px' }}>
                    Lightbox
                </Typography>

                <Box sx={{ paddingTop: '80px', overflow: 'hidden' }}>
                    <img
                        style={{ width: '100%', maxWidth: '350px', height: '450px', transition: '0.4s' }}
                        src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-2.jpg"
                        alt=""
                    />
                </Box>
                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    Super Awards
                </Typography>
                <Typography sx={{ color: '#757575', fontSize: '18px' }}>
                    External Page
                </Typography>
            </Box>

            {/* 2.................. */}
            <Box
                sx={{
                    padding: { xs: '20px', md: '50px' },
                    paddingTop: { xs: '40px', md: '50px' },
                    animation: 'fadeUp 1.2s ease'
                }}
            >
                <Box sx={{ overflow: 'hidden' }}>
                    <img
                        style={{ width: '100%', maxWidth: '350px', height: '450px', transition: '0.4s' }}
                        src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-4.jpg"
                        alt=""
                    />
                </Box>
                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    Rise of Design
                </Typography>
                <Typography sx={{ color: '#757575', fontSize: '18px' }}>
                    External Page
                </Typography>

                <Box sx={{ paddingTop: '80px', overflow: 'hidden' }}>
                    <img
                        style={{ width: '100%', maxWidth: '350px', height: '450px', transition: '0.4s' }}
                        src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-5.jpg"
                        alt=""
                    />
                </Box>
                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    Amplitude
                </Typography>
                <Typography sx={{ color: '#757575', fontSize: '18px' }}>
                    External Page
                </Typography>
            </Box>

            {/* 3.................. */}
            <Box
                sx={{
                    padding: { xs: '20px', md: '20px' },
                    paddingTop: { xs: '40px', md: '150px' },
                    animation: 'fadeUp 1.4s ease'
                }}
            >
                <Box sx={{ overflow: 'hidden' }}>
                    <img
                        style={{ width: '100%', maxWidth: '350px', height: '450px', transition: '0.4s' }}
                        src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-3.jpg"
                        alt=""
                    />
                </Box>
                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    Visual Stranger
                </Typography>
                <Typography sx={{ color: '#757575', fontSize: '18px' }}>
                    External Page
                </Typography>

                <Box sx={{ paddingTop: '80px', overflow: 'hidden' }}>
                    <img
                        style={{ width: '100%', maxWidth: '350px', height: '450px', transition: '0.4s' }}
                        src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-6.jpg"
                        alt=""
                    />
                </Box>
                <Typography sx={{ paddingTop: '10px', fontSize: '20px', fontWeight: '500' }}>
                    Design System
                </Typography>
                <Typography sx={{ color: '#757575', fontSize: '18px' }}>
                    Lightbox
                </Typography>
            </Box>

            {/* animations */}
            <style>
                {`
                img:hover {
                    transform: scale(1.08);
                }

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
    );
}

export default Portimg;
