// import { Box, Typography } from "@mui/material";

// function Story() {
//     return (

//         // Left side Page ................

//         <Box sx={{ display: 'flex', paddingTop: '200px', padding: '50px' }}>
//             <Box>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
//                     OUR STORY
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontWeight: '500', fontSize: '46px' }}>
//                     Better way to create <br /> stanning layouts.
//                 </Typography>
//                 <Typography sx={{ paddingTop: '40px' }}>
//                     <img style={{ width: '580px' }} src="https://resonance-react-app.netlify.app/assets/images/about-image.jpg" alt="" />
//                 </Typography>
//             </Box>

//             {/* right side page .............  */}

//             <Box>
//                 <Typography sx={{ paddingTop: '20px', marginLeft: '380px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
//                     Learn more about us <i class="fa-solid fa-arrow-right"></i>
//                 </Typography>
//                 <Typography sx={{ paddingTop: '150px', marginLeft: '100px', fontSize: '20px', fontFamily: 'inherit', fontWeight: '600' }}>
//                     Our Mission
//                 </Typography>
//                 <Typography sx={{ marginLeft: '100px', paddingTop: '20px', fontFamily: 'inherit', color: '#757575', fontWeight: '500', fontSize: '18px' }}>
//                     We believe that a website is the foundation of a <br /> successful online presence, and our goal is to help <br /> businesses establish a strong digital presence. Our <br /> process begins with understanding your business goals.
//                 </Typography>

//                 <Typography sx={{ paddingTop: '30px', marginLeft: '100px', fontSize: '20px', fontFamily: 'inherit', fontWeight: '600' }}>
//                     Our Vision
//                 </Typography>
//                 <Typography sx={{ marginLeft: '100px', paddingTop: '20px', fontFamily: 'inherit', color: '#757575', fontWeight: '500', fontSize: '18px' }}>
//                     We then use this information to create a custom website <br /> that not only reflects your brand but also helps you <br /> achieve your business objectives. From responsive design <br /> to intuitive navigation, we focus on every detail.                </Typography>

//             </Box>
//         </Box>

//     );
// }

// export default Story;


// =========================================================


import { Box, Typography } from "@mui/material";

function Story() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // responsive only
                paddingTop: { xs: "80px", md: "200px" },
                padding: { xs: "20px", md: "50px" },
                gap: { xs: 6, md: 0 },
            }}
        >
            {/* LEFT SIDE (SEM TO SEM) */}
            <Box sx={{ animation: "fadeLeft 1s ease" }}>
                <Typography
                    sx={{
                        fontWeight: 500,
                        color: "#757575",
                    }}
                >
                    OUR STORY
                </Typography>

                <Typography
                    sx={{
                        paddingTop: "10px",
                        fontWeight: 500,
                        fontSize: { xs: "32px", md: "46px" }, // responsive only
                    }}
                >
                    Better way to create <br /> stanning layouts.
                </Typography>

                <Typography sx={{ paddingTop: "40px" }}>
                    <img
                        src="https://resonance-react-app.netlify.app/assets/images/about-image.jpg"
                        alt=""
                        style={{
                            width: "580px",
                            maxWidth: "100%", // responsive only
                            transition: "transform 0.4s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.transform = "scale(1.03)")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                        }
                    />
                </Typography>
            </Box>

            {/* RIGHT SIDE (SEM TO SEM) */}
            <Box
                sx={{
                    animation: "fadeRight 1.1s ease",
                    mt: { xs: 0, md: 0 },
                }}
            >
                <Typography
                    sx={{
                        paddingTop: "20px",
                        marginLeft: { xs: 0, md: "380px" }, // desktop same
                        fontWeight: 500,
                        fontSize: "18px",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": {
                            color: "#1976d2",
                            transform: "translateX(6px)",
                        },
                    }}
                >
                    Learn more about us <i className="fa-solid fa-arrow-right"></i>
                </Typography>

                <Typography
                    sx={{
                        paddingTop: { xs: "40px", md: "150px" },
                        marginLeft: { xs: 0, md: "100px" },
                        fontSize: "20px",
                        fontWeight: 600,
                    }}
                >
                    Our Mission
                </Typography>

                <Typography
                    sx={{
                        marginLeft: { xs: 0, md: "100px" },
                        paddingTop: "20px",
                        color: "#757575",
                        fontWeight: 500,
                        fontSize: "18px",
                    }}
                >
                    We believe that a website is the foundation of a <br />
                    successful online presence, and our goal is to help <br />
                    businesses establish a strong digital presence. Our <br />
                    process begins with understanding your business goals.
                </Typography>

                <Typography
                    sx={{
                        paddingTop: "30px",
                        marginLeft: { xs: 0, md: "100px" },
                        fontSize: "20px",
                        fontWeight: 600,
                    }}
                >
                    Our Vision
                </Typography>

                <Typography
                    sx={{
                        marginLeft: { xs: 0, md: "100px" },
                        paddingTop: "20px",
                        color: "#757575",
                        fontWeight: 500,
                        fontSize: "18px",
                    }}
                >
                    We then use this information to create a custom website <br />
                    that not only reflects your brand but also helps you <br />
                    achieve your business objectives. From responsive design <br />
                    to intuitive navigation, we focus on every detail.
                </Typography>
            </Box>

            {/* Animations */}
            <style>
                {`
          @keyframes fadeLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeRight {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
            </style>
        </Box>
    );
}

export default Story;
