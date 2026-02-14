import { Box, Typography } from "@mui/material";
import Header from "../Add/Header";

function Homepg() {
    return (


        <Box>
            <Header></Header>
            <Box sx={{ display: 'flex', padding: '50px', paddingTop: '100px' }}>
                <Box >
                    <Typography sx={{ fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                        RESONANCE CREATIVE STUDIO
                    </Typography>
                    <Typography sx={{ paddingTop: '30px', fontFamily: 'inherit', fontSize: '50px', lineHeight: '60px', fontWeight: '500', color: '#010101' }}>
                        Create your beautiful <br /> web presence easily
                    </Typography>
                    <Typography sx={{ paddingTop: '30px', fontSize: '22px', fontFamily: 'inherit', color: '#757575', fontWeight: '500' }}>
                        Resonance is a full-service creative studio creating <br /> beautiful digital experiences and products.
                    </Typography>
                    <Box sx={{ paddingTop: '30px', display: 'flex' }}>
                        <Typography sx={{ bgcolor: 'black', color: 'white', fontFamily: 'inherit', fontWeight: '500', border: '1px solid', width: '160px', borderRadius: '10px', padding: '16px', textAlign: 'center', fontSize: '14px' }}>
                            VIEW PORTFOLIO
                        </Typography>
                        <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', paddingTop: '16px', fontSize: '18px', marginLeft: '40px' }}>
                            <i class="fa-solid fa-play"></i>  How it works?
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ ml: 16 }}>
                    <Typography>
                        <img style={{ width: '500px', borderRadius: "250px 250px 10px 10px" }} src="https://resonance-react-app.netlify.app/assets/images/hs-image-1.jpg" alt="" />
                    </Typography>
                </Box>
            </Box>

            <Box>
                <Box sx={{ display: 'flex', paddingTop: '200px', padding: '50px' }}>
                    <Box>
                        <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                            OUR STORY
                        </Typography>
                        <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontWeight: '500', fontSize: '46px' }}>
                            Better way to create <br /> stanning layouts.
                        </Typography>
                        <Typography sx={{ paddingTop: '40px' }}>
                            <img style={{ width: '580px' }} src="https://resonance-react-app.netlify.app/assets/images/about-image.jpg" alt="" />
                        </Typography>
                    </Box>

                    {/* right side page .............  */}

                    <Box>
                        <Typography sx={{ paddingTop: '20px', marginLeft: '380px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
                            Learn more about us <i class="fa-solid fa-arrow-right"></i>
                        </Typography>
                        <Typography sx={{ paddingTop: '150px', marginLeft: '100px', fontSize: '20px', fontFamily: 'inherit', fontWeight: '600' }}>
                            Our Mission
                        </Typography>
                        <Typography sx={{ marginLeft: '100px', paddingTop: '20px', fontFamily: 'inherit', color: '#757575', fontWeight: '500', fontSize: '18px' }}>
                            We believe that a website is the foundation of a <br /> successful online presence, and our goal is to help <br /> businesses establish a strong digital presence. Our <br /> process begins with understanding your business goals.
                        </Typography>

                        <Typography sx={{ paddingTop: '30px', marginLeft: '100px', fontSize: '20px', fontFamily: 'inherit', fontWeight: '600' }}>
                            Our Vision
                        </Typography>
                        <Typography sx={{ marginLeft: '100px', paddingTop: '20px', fontFamily: 'inherit', color: '#757575', fontWeight: '500', fontSize: '18px' }}>
                            We then use this information to create a custom website <br /> that not only reflects your brand but also helps you <br /> achieve your business objectives. From responsive design <br /> to intuitive navigation, we focus on every detail.                </Typography>

                    </Box>
                </Box>
            </Box>

            <Box>

                <Box sx={{ display: 'flex', paddingTop: '200px', padding: '50px', bgcolor: '#EAEFEF' }}>
                    <Box>
                        <Typography sx={{ paddingTop: '100px', fontSize: '40px', fontFamily: 'inherit', fontWeight: '500' }}>
                            We are strong team who <br /> brings innovative ideas <br /> into production.
                        </Typography>
                        <Typography sx={{ paddingTop: '30px', fontWeight: '700' }}>
                            _____________
                        </Typography>
                        <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
                            Thomas Johnson
                        </Typography>
                        <Typography sx={{ paddingTop: '2px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500', color: '#757575' }}>
                            Developer, Co-founder
                        </Typography>
                    </Box>

                    {/* 2 img section ................ */}

                    <Box sx={{ marginLeft: '100px' }}>
                        <Typography sx={{ paddingTop: '50px' }}>
                            <img style={{ width: '280px' }} src="https://resonance-react-app.netlify.app/assets/images/team/team-1.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
                            Thomas Johnson
                        </Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '2px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500', color: '#757575' }}>
                            Developer, Co-founder
                        </Typography>
                    </Box>

                    {/* 3 img section ............ */}

                    <Box sx={{ marginLeft: '50px' }}>
                        <Typography sx={{ paddingTop: '50px' }}>
                            <img style={{ width: '280px' }} src="https://resonance-react-app.netlify.app/assets/images/team/team-2.jpg" alt="" />
                        </Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
                            Emma Johnson
                        </Typography>
                        <Typography sx={{ textAlign: 'center', paddingTop: '2px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500', color: '#757575' }}>
                            UI/UX Designer, co-founder
                        </Typography>
                    </Box>

                </Box>
            </Box>

            <Box>
                <Box sx={{ display: 'flex', padding: '50px', paddingTop: '50px' }}>
                    <Box>
                        <Typography>
                            <img style={{ width: '100px' }} src="https://resonance-react-app.netlify.app/assets/images/logo-dark.svg" alt="" />
                        </Typography>
                        <Typography sx={{ paddingTop: '4px', fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                            Integer auctor aliquet martor, sed <br /> lorem malesuada eros blandit eget. <br /> Proin lacinia mortoc id odio <br /> vestibulum.
                        </Typography>
                        <Typography sx={{ paddingTop: '20px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            T.+1 837 652 8800
                        </Typography>
                        <Typography sx={{ paddingTop: '2px', fontFamily: 'inherit', fontWeight: '400', color: '#757575' }}>
                            E.elitethemes24@gmail.com
                        </Typography>
                    </Box>

                    <Box sx={{ marginLeft: '180px' }}>
                        <Typography sx={{ fontWeight: '600', fontFamily: 'inherit', fontSize: '20px' }}>
                            Company
                        </Typography>
                        <Typography sx={{ paddingTop: '14px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            About
                        </Typography>
                        <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            Services
                        </Typography>
                        <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            Portfolio
                        </Typography>
                        <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            Blog
                        </Typography>
                        <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            Contact
                        </Typography>
                    </Box>


                    <Box sx={{ marginLeft: '180px' }}>
                        <Typography sx={{ fontWeight: '600', fontFamily: 'inherit', fontSize: '20px' }}>
                            Social Media
                        </Typography>
                        <Typography sx={{ paddingTop: '14px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            <i class="fa-brands fa-facebook"></i> Faceook
                        </Typography>
                        <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            <i class="fa-brands fa-youtube"></i> Youtube
                        </Typography>
                        <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            <i class="fa-brands fa-pinterest"></i> Pintrest
                        </Typography>
                        <Typography sx={{ paddingTop: '4px', color: '#757575', fontFamily: 'inherit', fontWeight: '500' }}>
                            <i class="fa-brands fa-linkedin"></i> Linkdin
                        </Typography>
                    </Box>



                    <Box sx={{ marginLeft: '180px' }}>
                        <Typography sx={{ fontWeight: '600', fontFamily: 'inherit', fontSize: '20px' }}>
                            Legal & Press
                        </Typography>
                        <Typography sx={{ paddingTop: '20px', fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                            Privacy & Policy
                        </Typography>
                        <Typography sx={{ paddingTop: '6px', fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                            Terms & Conditions
                        </Typography>
                        <Typography sx={{ paddingTop: '6px', fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                            PressKit
                        </Typography>
                    </Box>
                </Box>


                <Box sx={{ padding: '50px', paddingTop: '50px', display: 'flex' }}>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
                        © elite-themes24 2026.
                    </Typography>
                    <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575', ml: 40 }}>
                        Based in London, United Kingdom.
                    </Typography>
                </Box>

            </Box>
        </Box>


    );
}


export default Homepg;
