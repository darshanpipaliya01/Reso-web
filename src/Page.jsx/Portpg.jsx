import { Box, Typography } from "@mui/material";
import Header from '../Add/Header';
import Footer from "../Add/Footer";

function Portpg() {
    return (

        <Box>
            <Header></Header>
            <Box sx={{ padding: '50px', paddingTop: '100px' }}>
                <Typography sx={{ textAlign: 'center', fontSize: '60px', fontWeight: '500', fontFamily: 'inherit' }}>
                    Portfolio
                </Typography>
                <Typography sx={{ textAlign: 'center', paddingTop: '10px', color: '#757575', fontSize: '20px', fontWeight: '500' }}>
                    Where every detail counts, our work stands out.
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', paddingTop: '140px', ml: 50 }}>
                <Typography sx={{ fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
                    All works
                </Typography>
                <Typography sx={{ color: '#757575', ml: 6, fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
                    Branding
                </Typography>
                <Typography sx={{ color: '#757575', ml: 6, fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
                    Design
                </Typography>
                <Typography sx={{ color: '#757575', ml: 6, fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
                    Devlopment
                </Typography>
            </Box>

            {/* 1 line ............... */}

            <Box sx={{ display: 'flex', padding: '50px', paddingTop: '60px', ml: 5 }}>
                <Box>
                    <Typography>
                        <img style={{ width: '500px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-1.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Medium Scene
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        Light Box
                    </Typography>
                </Box>
                <Box sx={{ marginLeft: '80px' }}>
                    <Typography>
                        <img style={{ width: '500px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-2.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Rise of Design
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        External Page
                    </Typography>
                </Box>
            </Box>

            {/* 2 line .................. */}


            <Box sx={{ display: 'flex', padding: '50px', paddingTop: '60px', ml: 5 }}>
                <Box>
                    <Typography>
                        <img style={{ width: '500px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-3.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Visual Stranger
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        External Page
                    </Typography>
                </Box>
                <Box sx={{ marginLeft: '80px' }}>
                    <Typography>
                        <img style={{ width: '500px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-4.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Amplitude
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        External Page
                    </Typography>
                </Box>
            </Box>

            {/* 3 line .................. */}


            <Box sx={{ display: 'flex', padding: '50px', paddingTop: '60px', ml: 5 }}>
                <Box>
                    <Typography>
                        <img style={{ width: '500px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-5.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Super Awards
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        External Page
                    </Typography>
                </Box>
                <Box sx={{ marginLeft: '80px' }}>
                    <Typography>
                        <img style={{ width: '500px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-6.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Design System
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        Lightbox
                    </Typography>
                </Box>
            </Box>

            {/* 4 line .................. */}

            <Box sx={{ display: 'flex', padding: '50px', paddingTop: '60px', ml: 5 }}>
                <Box>
                    <Typography>
                        <img style={{ width: '500px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-7.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Amplitude
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        External Page
                    </Typography>
                </Box>
                <Box sx={{ marginLeft: '80px' }}>
                    <Typography>
                        <img style={{ width: '500px' }} src="https://resonance-react-app.netlify.app/assets/images/portfolio/masonry/projects-8.jpg" alt="" />
                    </Typography>
                    <Typography sx={{ fontSize: '18px', fontFamily: 'inherit', fontWeight: '500' }}>
                        Super Awards
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        External Page
                    </Typography>
                </Box>
            </Box>

            <Footer></Footer>




        </Box>

    )
}

export default Portpg;