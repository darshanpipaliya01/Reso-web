// import { Box, Typography } from "@mui/material";

// function Footer() {
//     return (

//         <Box>
//             <Box sx={{ display: 'flex', padding: '50px', paddingTop: '50px' }}>
//                 <Box>
//                     <Typography>
//                         <img style={{ width: '100px' }} src="https://resonance-react-app.netlify.app/assets/images/logo-dark.svg" alt="" />
//                     </Typography>
//                     <Typography sx={{ paddingTop: '4px', fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
//                         Integer auctor aliquet martor, sed <br /> lorem malesuada eros blandit eget. <br /> Proin lacinia mortoc id odio <br /> vestibulum.
//                     </Typography>
//                     <Typography sx={{ paddingTop: '20px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         T.+1 837 652 8800
//                     </Typography>
//                     <Typography sx={{ paddingTop: '2px', fontFamily: 'inherit', fontWeight: '400', color: '#757575' }}>
//                         E.elitethemes24@gmail.com
//                     </Typography>
//                 </Box>

//                 <Box sx={{ marginLeft: '180px' }}>
//                     <Typography sx={{ fontWeight: '600', fontFamily: 'inherit', fontSize: '20px' }}>
//                         Company
//                     </Typography>
//                     <Typography sx={{ paddingTop: '14px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         About
//                     </Typography>
//                     <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         Services
//                     </Typography>
//                     <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         Portfolio
//                     </Typography>
//                     <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         Blog
//                     </Typography>
//                     <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         Contact
//                     </Typography>
//                 </Box>


//                 <Box sx={{ marginLeft: '180px' }}>
//                     <Typography sx={{ fontWeight: '600', fontFamily: 'inherit', fontSize: '20px' }}>
//                         Social Media
//                     </Typography>
//                     <Typography sx={{ paddingTop: '14px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         <i class="fa-brands fa-facebook"></i> Faceook
//                     </Typography>
//                     <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         <i class="fa-brands fa-youtube"></i> Youtube
//                     </Typography>
//                     <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         <i class="fa-brands fa-pinterest"></i> Pintrest
//                     </Typography>
//                     <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
//                         <i class="fa-brands fa-linkedin"></i> Linkdin
//                     </Typography>
//                 </Box>



//                 <Box sx={{ marginLeft: '180px' }}>
//                     <Typography sx={{ fontWeight: '600', fontFamily: 'inherit', fontSize: '20px' }}>
//                         Legal & Press
//                     </Typography>
//                     <Typography sx={{ paddingTop: '20px', fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
//                         Privacy & Policy
//                     </Typography>
//                     <Typography sx={{ paddingTop: '6px', fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
//                         Terms & Conditions
//                     </Typography>
//                     <Typography sx={{ paddingTop: '6px', fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
//                         PressKit
//                     </Typography>
//                 </Box>
//             </Box>


//             <Box sx={{ padding: '50px', paddingTop: '50px', display: 'flex' }}>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
//                     © elite-themes24 2026.
//                 </Typography>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575', ml: 40 }}>
//                     Based in London, United Kingdom.
//                 </Typography>
//             </Box>

//         </Box>

//     );
// }


// export default Footer;


// ==================================================


import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box>
            {/* TOP FOOTER */}
            <Box
                sx={{
                    px: { xs: 3, md: 8 },
                    py: 6,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: { xs: 6, md: 18 }
                }}
            >
                {/* Logo & Info */}
                <Box>
                    <img
                        style={{ width: '100px' }}
                        src="https://resonance-react-app.netlify.app/assets/images/logo-dark.svg"
                        alt=""
                    />
                    <Typography sx={{ pt: 1, color: '#757575', fontWeight: 500 }}>
                        Integer auctor aliquet martor, sed <br />
                        lorem malesuada eros blandit eget. <br />
                        Proin lacinia mortoc id odio <br />
                        vestibulum.
                    </Typography>
                    <Typography sx={{ pt: 2, color: '#757575', fontWeight: 500 }}>
                        T.+1 837 652 8800
                    </Typography>
                    <Typography sx={{ color: '#757575', fontWeight: 400 }}>
                        E.elitethemes24@gmail.com
                    </Typography>
                </Box>

                {/* Company */}
                <Box>
                    <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
                        Company
                    </Typography>
                    {['About', 'Services', 'Portfolio', 'Blog', 'Contact'].map(item => (
                        <Typography
                            key={item}
                            sx={{ pt: 1, color: '#757575', fontWeight: 500 }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Box>

                {/* Social */}
                <Box>
                    <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
                        Social Media
                    </Typography>
                    <Typography sx={{ pt: 1.5, color: '#757575', fontWeight: 500 }}>
                        <i className="fa-brands fa-facebook"></i> Facebook
                    </Typography>
                    <Typography sx={{ pt: 0.5, color: '#757575', fontWeight: 500 }}>
                        <i className="fa-brands fa-youtube"></i> Youtube
                    </Typography>
                    <Typography sx={{ pt: 0.5, color: '#757575', fontWeight: 500 }}>
                        <i className="fa-brands fa-pinterest"></i> Pinterest
                    </Typography>
                    <Typography sx={{ pt: 0.5, color: '#757575', fontWeight: 500 }}>
                        <i className="fa-brands fa-linkedin"></i> Linkedin
                    </Typography>
                </Box>

                {/* Legal */}
                <Box>
                    <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>
                        Legal & Press
                    </Typography>
                    <Typography sx={{ pt: 2, color: '#757575', fontWeight: 500 }}>
                        Privacy & Policy
                    </Typography>
                    <Typography sx={{ pt: 0.5, color: '#757575', fontWeight: 500 }}>
                        Terms & Conditions
                    </Typography>
                    <Typography sx={{ pt: 0.5, color: '#757575', fontWeight: 500 }}>
                        PressKit
                    </Typography>
                </Box>
            </Box>

            {/* BOTTOM FOOTER */}
            <Box
                sx={{
                    px: { xs: 3, md: 8 },
                    py: 4,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    gap: 2
                }}
            >
                <Typography sx={{ color: '#757575', fontWeight: 500 }}>
                    © elite-themes24 2026.
                </Typography>
                <Typography sx={{ color: '#757575', fontWeight: 500 }}>
                    Based in London, United Kingdom.
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
