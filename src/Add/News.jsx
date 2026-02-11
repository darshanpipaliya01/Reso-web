// import { Box, Typography } from "@mui/material";

// function News() {
//     return (

//         <Box sx={{ display: 'flex' }}>
//             <Box sx={{ padding: '50px', paddingTop: '100px' }}>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
//                     OUR BLOG
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontSize: '50px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     The latest news
//                 </Typography>
//             </Box>
//             <Box sx={{ padding: '50px', paddingTop: '160px', ml: 60 }}>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '500' }}>
//                     Read more in our Blog <i class="fa-solid fa-arrow-right"></i>
//                 </Typography>
//             </Box>
//         </Box>

//     );
// }


// export default News;


// ==========================================


import { Box, Typography } from "@mui/material";

function News() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-between',
                alignItems: { xs: 'flex-start', md: 'center' },
                px: { xs: 3, md: 6 },
                pt: { xs: 8, md: 12 }
            }}
        >
            {/* LEFT CONTENT */}
            <Box>
                <Typography
                    sx={{
                        fontFamily: 'inherit',
                        fontWeight: 500,
                        color: '#757575'
                    }}
                >
                    OUR BLOG
                </Typography>

                <Typography
                    sx={{
                        pt: 1,
                        fontSize: { xs: '36px', md: '50px' },
                        fontFamily: 'inherit',
                        fontWeight: 500
                    }}
                >
                    The latest news
                </Typography>
            </Box>

            {/* RIGHT LINK */}
            <Box
                sx={{
                    pt: { xs: 3, md: 6 }
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'inherit',
                        fontWeight: 500
                    }}
                >
                    Read more in our Blog <i className="fa-solid fa-arrow-right"></i>
                </Typography>
            </Box>
        </Box>
    );
}

export default News;
