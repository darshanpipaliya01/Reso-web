import { Box, Typography } from "@mui/material";
import Header from "../Add/Header";
import Footer from "../Add/Footer";

function Blogpg() {
    return (

        <Box>
            <Header></Header>
            <Box sx={{ padding: '50px', paddingTop: '100px' }}>
                <Typography sx={{ textAlign: 'center', fontSize: '60px', fontWeight: '500', fontFamily: 'inherit' }}>
                    Blog
                </Typography>
                <Typography sx={{ textAlign: 'center', paddingTop: '10px', color: '#757575', fontSize: '20px', fontWeight: '500' }}>
                    Discovering our brilliant insights and inspiration.
                </Typography>
            </Box>

            {/* 1 img .......................... */}

            <Box sx={{ display: 'flex' }}>
                <Box sx={{ padding: '20px', marginLeft: '50px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-1.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Spotlight — Equinox Collection <br /> by Shane Griffin
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Looking for inspiration to kick it off, I <br /> stumbled across the work of Shane <br /> Griffin, an artist and director based in <br /> New York...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
                            Admam Smith
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '30px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Adam Smith
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-2.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Random Explorations with <br /> Cinema 4D and Redshift
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Nidia Dias is a 3D designer based in <br /> the Portugal with an incredible portfolio. <br /> From the professional work done with...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
                            Emma Kandel
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '30px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Emma Kandel
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-3.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Visually Identity and Branding <br /> for Mexican Restaurant
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Anta Petrenco shared a beautiful visual <br /> identity, branding and packaging design <br /> project on their Behance profile...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500', color: '#757575' }}>
                            Thomas Johnson
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '20px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Thomas Johnson
                        </Typography>
                    </Box>
                </Box>
            </Box>


            {/* 2 img .............. */}

            <Box sx={{ display: 'flex' }}>
                <Box sx={{ padding: '20px', marginLeft: '50px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-4.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Spotlight — Equinox Collection <br /> by Shane Griffin
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Looking for inspiration to kick it off, I <br /> stumbled across the work of Shane <br /> Griffin, an artist and director based in <br /> New York...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
                            Admam Smith
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '30px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Adam Smith
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-5.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Random Explorations with <br /> Cinema 4D and Redshift
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Nidia Dias is a 3D designer based in <br /> the Portugal with an incredible portfolio. <br /> From the professional work done with...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
                            Emma Kandel
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '30px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Emma Kandel
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-6.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Random Explorations with <br /> Cinema 4D and Redshift
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Nidia Dias is a 3D designer based in the <br /> Portugal with an incredible portfolio. <br /> From the professional work done with...                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500', color: '#757575' }}>
                            Emma Kandel
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '20px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Emma Kandel
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* 3 img .............................. */}


            <Box sx={{ display: 'flex' }}>
                <Box sx={{ padding: '20px', marginLeft: '50px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-7.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Visually Identity and Branding for Mexican Restaurant
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Anta Petrenco shared a beautiful visual <br /> identity, branding and packaging design <br /> project on their Behance profile...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
                            Thomas Johnson
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '30px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Thomas Johnson
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-8.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Spotlight — Equinox Collection <br /> by Shane Griffin
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Looking for inspiration to kick it off, I <br /> stumbled across the work of Shane <br /> Griffin, an artist and director based in <br /> New York...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
                            Adam Smith
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '30px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Adam Smith
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-9.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Spotlight — Equinox Collection by Shane Griffin
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Anta Petrenco shared a beautiful visual <br /> identity, branding and packaging design <br /> project on their Behance profile...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500', color: '#757575' }}>
                            Thomas Johnson
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '20px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Thomas Johnson
                        </Typography>
                    </Box>
                </Box>
            </Box>

            {/* 4 img ................................ */}


            <Box sx={{ display: 'flex' }}>
                <Box sx={{ padding: '20px', marginLeft: '50px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-10.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Spotlight — Equinox Collection <br /> by Shane Griffin
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Looking for inspiration to kick it off, I <br /> stumbled across the work of Shane <br /> Griffin, an artist and director based in <br /> New York...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
                            Admam Smith
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '30px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Adam Smith
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-11.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Random Explorations with <br /> Cinema 4D and Redshift
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Nidia Dias is a 3D designer based in <br /> the Portugal with an incredible portfolio. <br /> From the professional work done with...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '16px', fontWeight: '500', color: '#757575' }}>
                            Emma Kandel
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '30px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Emma Kandel
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ padding: '20px' }}>
                    <Typography>
                        <img style={{ width: '350px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/post-prev-12.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ padding: '10px', paddingTop: '10px', fontSize: '22px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Visually Identity and Branding <br /> for Mexican Restaurant
                    </Typography>
                    <Typography sx={{ padding: '10px', fontSize: '16px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                        Anta Petrenco shared a beautiful visual <br /> identity, branding and packaging design <br /> project on their Behance profile...
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography sx={{ paddingTop: '10px', padding: '10px' }}>
                            <img style={{ borderRadius: '100px', width: '40px' }} src="https://resonance-react-app.netlify.app/assets/images/blog/author/author-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ padding: '6px', paddingTop: '16px', fontFamily: 'inherit', fontSize: '14px', fontWeight: '500', color: '#757575' }}>
                            Thomas Johnson
                        </Typography>
                        <Typography sx={{ padding: '10px', marginLeft: '20px', paddingTop: '18px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                            Thomas Johnson
                        </Typography>
                    </Box>
                </Box>

            </Box>


            <Footer></Footer>
        </Box>



    )
}


export default Blogpg;