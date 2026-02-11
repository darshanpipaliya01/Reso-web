// import { Box, Icon, Typography } from "@mui/material";

// function Acount() {
//     return (

//         <Box sx={{ paddingTop: '100px' }}>
//             <Box sx={{ paddingTop: '100px', padding: '100px', bgcolor: '#111', color: 'white', display: 'flex' }}>
//                 <Box sx={{ textAlign: 'center' }}>
//                     <Typography>
//                         <i style={{ fontSize: '60px' }} class="fa-solid fa-1"></i>
//                     </Typography>
//                     <Typography sx={{ paddingTop: '30px', fontFamily: 'inherit', fontSize: '22px', fontWeight: '500' }}>
//                         Simplicity
//                     </Typography>
//                     <Typography sx={{ paddingTop: '20px', fontWeight: '500', fontSize: '16px', fontFamily: 'inherit' }}>
//                         Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. Quisque <br />  congue rhoncus enim, in pharetra <br /> lacus.
//                     </Typography>
//                 </Box>

//                 <Box sx={{ textAlign: 'center', ml: 15 }}>
//                     <Typography>
//                         <i style={{ fontSize: '60px' }} class="fa-solid fa-2"></i>
//                     </Typography>
//                     <Typography sx={{ paddingTop: '30px', fontFamily: 'inherit', fontSize: '22px', fontWeight: '500' }}>
//                         Accountability
//                     </Typography>
//                     <Typography sx={{ paddingTop: '20px', fontWeight: '500', fontSize: '16px', fontFamily: 'inherit' }}>
//                         Class aptent taciti sociosqu ad <br /> litora torquent per conubia nostra, <br /> per inceptos himenaeos.
//                     </Typography>
//                 </Box>

//                 <Box sx={{ textAlign: 'center', ml: 15 }}>
//                     <Typography>
//                         <i style={{ fontSize: '60px' }} class="fa-solid fa-3"></i>
//                     </Typography>
//                     <Typography sx={{ paddingTop: '30px', fontFamily: 'inherit', fontSize: '22px', fontWeight: '500' }}>
//                         High Loyalty
//                     </Typography>
//                     <Typography sx={{ paddingTop: '20px', fontWeight: '500', fontSize: '16px', fontFamily: 'inherit' }}>
//                         Mauris a libero et diam sodales <br /> semper. Aenean elit leo, hendrerit <br /> nec dolor id, rutrum finibus velit.
//                     </Typography>
//                 </Box>
//             </Box>
//         </Box>

//     )
// };

// export default Acount;


// ===============================================



import { Box, Typography } from "@mui/material";

function Acount() {
    return (
        <Box sx={{ pt: '100px' }}>
            <Box
                sx={{
                    px: { xs: 2, md: 12 },
                    py: { xs: 6, md: 12 },
                    bgcolor: '#111',
                    color: 'white',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 6, md: 15 }
                }}
            >
                {/* Box 1 */}
                <Box sx={{ textAlign: 'center' }}>
                    <i style={{ fontSize: '60px' }} className="fa-solid fa-1"></i>

                    <Typography sx={{ pt: 3, fontSize: '22px', fontWeight: 500 }}>
                        Simplicity
                    </Typography>

                    <Typography sx={{ pt: 2, fontSize: '16px', fontWeight: 500 }}>
                        Lorem ipsum dolor sit amet, <br />
                        consectetur adipiscing elit. Quisque <br />
                        congue rhoncus enim, in pharetra <br />
                        lacus.
                    </Typography>
                </Box>

                {/* Box 2 */}
                <Box sx={{ textAlign: 'center' }}>
                    <i style={{ fontSize: '60px' }} className="fa-solid fa-2"></i>

                    <Typography sx={{ pt: 3, fontSize: '22px', fontWeight: 500 }}>
                        Accountability
                    </Typography>

                    <Typography sx={{ pt: 2, fontSize: '16px', fontWeight: 500 }}>
                        Class aptent taciti sociosqu ad <br />
                        litora torquent per conubia nostra, <br />
                        per inceptos himenaeos.
                    </Typography>
                </Box>

                {/* Box 3 */}
                <Box sx={{ textAlign: 'center' }}>
                    <i style={{ fontSize: '60px' }} className="fa-solid fa-3"></i>

                    <Typography sx={{ pt: 3, fontSize: '22px', fontWeight: 500 }}>
                        High Loyalty
                    </Typography>

                    <Typography sx={{ pt: 2, fontSize: '16px', fontWeight: 500 }}>
                        Mauris a libero et diam sodales <br />
                        semper. Aenean elit leo, hendrerit <br />
                        nec dolor id, rutrum finibus velit.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Acount;
