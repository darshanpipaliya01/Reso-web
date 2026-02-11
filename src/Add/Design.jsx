// import { Box, Typography } from "@mui/material";

// function Design() {
//     return (

//         <Box sx={{ display: 'flex', padding: '50px', paddingTop: '100px' }}>
//             <Box>
//                 <Typography sx={{ fontSize: '44px', fontFamily: 'inherit', fontWeight: '600' }}>
//                     Awesome Template <br /> With Clean Design
//                 </Typography>

//                 <Box sx={{ display: 'flex' }}>
//                     <Box sx={{ paddingTop: '50px' }}>
//                         <Typography>
//                             <i style={{ fontSize: '40px' }} class="fa-solid fa-layer-group"></i>
//                         </Typography>
//                         <Typography sx={{ paddingTop: '10px', fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
//                             Unique Design
//                         </Typography>
//                         <Typography sx={{ color: '#757575', paddingTop: '10px', fontSize: '16px', fontFamily: 'inherit', fontWeight: '500' }}>
//                             Fusce aliquet quam eget neque <br /> ultrices elementum felis id arcu <br /> blandit sagittis.
//                         </Typography>
//                     </Box>
//                     <Box sx={{ paddingTop: '50px', ml: 10 }}>
//                         <Typography>
//                             <i style={{ fontSize: '40px' }} class="fa-solid fa-users-viewfinder"></i>
//                         </Typography>
//                         <Typography sx={{ paddingTop: '10px', fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
//                             Quality Code
//                         </Typography>
//                         <Typography sx={{ color: '#757575', paddingTop: '10px', fontSize: '16px', fontFamily: 'inherit', fontWeight: '500' }}>
//                             Lorem ipsum dolor sit amet rembe <br /> adipiscing elite Inwege maximus <br /> ligula imsum.
//                         </Typography>
//                     </Box>
//                 </Box>

//                 <Box sx={{ display: 'flex' }}>
//                     <Box sx={{ paddingTop: '50px' }}>
//                         <Typography>
//                             <i style={{ fontSize: '40px' }} class="fa-solid fa-arrows-to-circle"></i>
//                         </Typography>
//                         <Typography sx={{ paddingTop: '10px', fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
//                             Clean and Minimal
//                         </Typography>
//                         <Typography sx={{ color: '#757575', paddingTop: '10px', fontSize: '16px', fontFamily: 'inherit', fontWeight: '500' }}>
//                             Maecenas volutpat, diam enime <br /> volutpa cramas luctus interdum <br /> sodales.
//                         </Typography>

//                     </Box>
//                     <Box sx={{ paddingTop: '50px', ml: 10 }}>
//                         <Typography>
//                             <i style={{ fontSize: '40px' }} class="fa-solid fa-recycle"></i>
//                         </Typography>
//                         <Typography sx={{ paddingTop: '10px', fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
//                             Easy Customization
//                         </Typography>
//                         <Typography sx={{ color: '#757575', paddingTop: '10px', fontSize: '16px', fontFamily: 'inherit', fontWeight: '500' }}>
//                             Praesent sed nisi eleifend lorem <br /> ember fermete acome ante lorem <br /> ipsum.
//                         </Typography>
//                     </Box>
//                 </Box>

//             </Box>




//             <Box>
//                 <Typography sx={{ ml: 20 }}>
//                     <img style={{ width: '400px' }} src="https://resonance-react-app.netlify.app/assets/images/promo-6.jpg" alt="" />
//                 </Typography>
//             </Box>

//         </Box>

//     )
// };



// export default Design;


// =======================================================


import { Box, Typography } from "@mui/material";

function Design() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                padding: '50px',
                paddingTop: '100px'
            }}
        >
            {/* LEFT CONTENT */}
            <Box>
                <Typography sx={{ fontSize: '44px', fontFamily: 'inherit', fontWeight: '600' }}>
                    Awesome Template <br /> With Clean Design
                </Typography>

                {/* ROW 1 */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' }
                    }}
                >
                    <Box sx={{ paddingTop: '50px' }}>
                        <Typography>
                            <i style={{ fontSize: '40px' }} className="fa-solid fa-layer-group"></i>
                        </Typography>
                        <Typography sx={{ paddingTop: '10px', fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                            Unique Design
                        </Typography>
                        <Typography sx={{ color: '#757575', paddingTop: '10px', fontSize: '16px', fontFamily: 'inherit', fontWeight: '500' }}>
                            Fusce aliquet quam eget neque <br />
                            ultrices elementum felis id arcu <br />
                            blandit sagittis.
                        </Typography>
                    </Box>

                    <Box sx={{ paddingTop: '50px', ml: { xs: 0, sm: 10 } }}>
                        <Typography>
                            <i style={{ fontSize: '40px' }} className="fa-solid fa-users-viewfinder"></i>
                        </Typography>
                        <Typography sx={{ paddingTop: '10px', fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                            Quality Code
                        </Typography>
                        <Typography sx={{ color: '#757575', paddingTop: '10px', fontSize: '16px', fontFamily: 'inherit', fontWeight: '500' }}>
                            Lorem ipsum dolor sit amet rembe <br />
                            adipiscing elite Inwege maximus <br />
                            ligula imsum.
                        </Typography>
                    </Box>
                </Box>

                {/* ROW 2 */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' }
                    }}
                >
                    <Box sx={{ paddingTop: '50px' }}>
                        <Typography>
                            <i style={{ fontSize: '40px' }} className="fa-solid fa-arrows-to-circle"></i>
                        </Typography>
                        <Typography sx={{ paddingTop: '10px', fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                            Clean and Minimal
                        </Typography>
                        <Typography sx={{ color: '#757575', paddingTop: '10px', fontSize: '16px', fontFamily: 'inherit', fontWeight: '500' }}>
                            Maecenas volutpat, diam enime <br />
                            volutpa cramas luctus interdum <br />
                            sodales.
                        </Typography>
                    </Box>

                    <Box sx={{ paddingTop: '50px', ml: { xs: 0, sm: 10 } }}>
                        <Typography>
                            <i style={{ fontSize: '40px' }} className="fa-solid fa-recycle"></i>
                        </Typography>
                        <Typography sx={{ paddingTop: '10px', fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                            Easy Customization
                        </Typography>
                        <Typography sx={{ color: '#757575', paddingTop: '10px', fontSize: '16px', fontFamily: 'inherit', fontWeight: '500' }}>
                            Praesent sed nisi eleifend lorem <br />
                            ember fermete acome ante lorem <br />
                            ipsum.
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* RIGHT IMAGE */}
            <Box sx={{ mt: { xs: 6, md: 0 } }}>
                <Typography sx={{ ml: { xs: 0, md: 20 } }}>
                    <img
                        style={{ width: '100%', maxWidth: '400px' }}
                        src="https://resonance-react-app.netlify.app/assets/images/promo-6.jpg"
                        alt=""
                    />
                </Typography>
            </Box>
        </Box>
    );
}

export default Design;
