// import { Box, Typography } from "@mui/material";

// function News1() {
//     return (

//         <Box sx={{ display: 'flex', padding: '20px', paddingTop: '60px' }}>
            // <Box>
            //     <Typography>
            //         <img style={{ width: '400px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-1.jpg" alt="" />
            //     </Typography>
            //     <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
            //         Spotlight — Equinox Collection <br /> by Shane Griffin
            //     </Typography>
            //     <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
            //         Looking for inspiration to kick it off, I <br /> stumbled across the work of Shane <br /> Griffin, an artist and director based in <br /> New York...
            //     </Typography>
            //     <Box sx={{ display: 'flex' }}>
            //         <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
            //             <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
            //         </Typography>
            //         <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
            //             Admam Smith
            //         </Typography>
            //         <Typography sx={{ padding: '10px', ml: 10, paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
            //             August 3
            //         </Typography>
            //     </Box>
            // </Box>

//             <Box sx={{ marginLeft: '20px' }}>
//                 <Typography>
//                     <img style={{ width: '400px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-2.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Random Explorations with <br /> Cinema 4D and Redshift
//                 </Typography>
//                 <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Nidia Dias is a 3D designer based in the <br />   Portugal with an incredible portfolio. <br /> From the professional work done with...
//                 </Typography>
//                 <Box sx={{ display: 'flex' }}>
//                     <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
//                         <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-2.jpg" alt="" />
//                     </Typography>
//                     <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
//                         Emma Kandel
//                     </Typography>
//                     <Typography sx={{ padding: '10px', ml: 10, paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
//                         August 2
//                     </Typography>
//                 </Box>
//             </Box>

//             <Box sx={{ marginLeft: '20px' }}>
//                 <Typography>
//                     <img style={{ width: '400px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-3.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Visually Identity and Branding <br /> for Mexican Restaurant
//                 </Typography>
//                 <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                     Anta Petrenco shared a beautiful visual <br /> identity, branding and packaging design <br /> project on their Behance profile...
//                 </Typography>
//                 <Box sx={{ display: 'flex' }}>
//                     <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
//                         <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-3.jpg" alt="" />
//                     </Typography>
//                     <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
//                         Thomas Johnson
//                     </Typography>
//                     <Typography sx={{ padding: '10px', ml: 10, paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
//                         August 1
//                     </Typography>
//                 </Box>
//             </Box>
//         </Box>

//     );
// }

// export default News1;


// ==========================================


import { Box, Typography } from "@mui/material";

function News1() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 2 },
                px: { xs: 2, md: 3 },
                pt: '60px'
            }}
        >
            {/* CARD 1 */}
            <Box>
                <Typography>
                    <img
                        style={{ width: '100%', maxWidth: '400px' }}
                        src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-1.jpg"
                        alt=""
                    />
                </Typography>

                <Typography sx={{ p: 1, fontSize: '22px', fontFamily: 'inherit', fontWeight: 500 }}>
                    Spotlight — Equinox Collection <br /> by Shane Griffin
                </Typography>

                <Typography sx={{ p: 1, fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: 500 }}>
                    Looking for inspiration to kick it off, I <br />
                    stumbled across the work of Shane <br />
                    Griffin, an artist and director based in <br />
                    New York...
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ p: 1 }}>
                        <img
                            style={{ borderRadius: '100px', width: '40px' }}
                            src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg"
                            alt=""
                        />
                    </Typography>

                    <Typography sx={{ pt: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: 500, color: '#757575' }}>
                        Admam Smith
                    </Typography>

                    <Typography sx={{ pt: '18px', ml: { xs: 2, md: 10 }, fontFamily: 'inherit', color: '#757575', fontWeight: 500 }}>
                        August 3
                    </Typography>
                </Box>
            </Box>

            {/* CARD 2 */}
            <Box>
                <Typography>
                    <img
                        style={{ width: '100%', maxWidth: '400px' }}
                        src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-2.jpg"
                        alt=""
                    />
                </Typography>

                <Typography sx={{ p: 1, fontSize: '22px', fontFamily: 'inherit', fontWeight: 500 }}>
                    Random Explorations with <br /> Cinema 4D and Redshift
                </Typography>

                <Typography sx={{ p: 1, fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: 500 }}>
                    Nidia Dias is a 3D designer based in the <br />
                    Portugal with an incredible portfolio. <br />
                    From the professional work done with...
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ p: 1 }}>
                        <img
                            style={{ borderRadius: '100px', width: '40px' }}
                            src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-2.jpg"
                            alt=""
                        />
                    </Typography>

                    <Typography sx={{ pt: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: 500, color: '#757575' }}>
                        Emma Kandel
                    </Typography>

                    <Typography sx={{ pt: '18px', ml: { xs: 2, md: 10 }, fontFamily: 'inherit', color: '#757575', fontWeight: 500 }}>
                        August 2
                    </Typography>
                </Box>
            </Box>

            {/* CARD 3 */}
            <Box>
                <Typography>
                    <img
                        style={{ width: '100%', maxWidth: '400px' }}
                        src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-3.jpg"
                        alt=""
                    />
                </Typography>

                <Typography sx={{ p: 1, fontSize: '22px', fontFamily: 'inherit', fontWeight: 500 }}>
                    Visually Identity and Branding <br /> for Mexican Restaurant
                </Typography>

                <Typography sx={{ p: 1, fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: 500 }}>
                    Anta Petrenco shared a beautiful visual <br />
                    identity, branding and packaging design <br />
                    project on their Behance profile...
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ p: 1 }}>
                        <img
                            style={{ borderRadius: '100px', width: '40px' }}
                            src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-3.jpg"
                            alt=""
                        />
                    </Typography>

                    <Typography sx={{ pt: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: 500, color: '#757575' }}>
                        Thomas Johnson
                    </Typography>

                    <Typography sx={{ pt: '18px', ml: { xs: 2, md: 10 }, fontFamily: 'inherit', color: '#757575', fontWeight: 500 }}>
                        August 1
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default News1;
