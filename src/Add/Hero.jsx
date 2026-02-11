// import { Box, Typography } from "@mui/material";

// function Hero() {
//     return (

//         //   ======================        hero left side

//         <Box sx={{ paddingTop: '100px', padding: '30px', display: 'flex' }}>
//             <Box>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', color: '#757575' }}>
//                     RESONANCE CREATIVE STUDIO
//                 </Typography>

//                 <Typography sx={{ paddingTop: '20px', fontSize: '56px', fontFamily: 'inherit', fontWeight: '500', color: '#010101' }}>
//                     Grow your business <br /> with a new wesbite.
//                 </Typography>
//                 <Typography sx={{ fontSize: '20px', paddingTop: '20px', color: '#757575', fontFamily: 'inherit' }}>
//                     Resonance is a full-service creative studio creating <br /> beautiful digital experiences and products.
//                 </Typography>

//                 <Box sx={{ display: 'flex' }}>
//                     <Box sx={{ paddingTop: '50px' }}>
//                         <Typography sx={{ bgcolor: 'black', color: 'white', padding: '14px', width: '160px', borderRadius: '10px', fontSize: '14px', fontWeight: '500', textAlign: 'center', fontFamily: 'inherit', border: '1px solid' }}>
//                             DISCOVER NOW
//                         </Typography>
//                     </Box>

//                     <Box sx={{ paddingTop: '50px', marginLeft: '20px' }}>
//                         <Typography sx={{ padding: '14px', width: '160px', fontSize: '18px', fontWeight: '500', textAlign: 'center', fontFamily: 'inherit' }}>
//                             <i class="fa-solid fa-play"></i>  How it works?
//                         </Typography>
//                     </Box>
//                 </Box>
//             </Box>


//             {/* ========================= Hero Right Side    */}

//             <Box sx={{ ml: 30 }}>
//                 <Typography>
//                     <img style={{ width: '350px' }} src="	https://resonance-react-app.netlify.app/assets/images/stack-image-3.jpg" alt="" />
//                 </Typography>
//             </Box>




//         </Box>

//     )
// };


// export default Hero;


// ==============================================


import { Box, Typography } from "@mui/material";

function Hero() {
    return (
        <Box
            sx={{
                pt: { xs: 6, md: 12 },
                px: { xs: 2, sm: 4, md: 6 },
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                gap: { xs: 6, md: 0 },
            }}
        >
            {/* ================= LEFT SIDE ================= */}
            <Box
                sx={{
                    animation: "fadeLeft 1s ease",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 500,
                        color: "#757575",
                        letterSpacing: "1px",
                    }}
                >
                    RESONANCE CREATIVE STUDIO
                </Typography>

                <Typography
                    sx={{
                        pt: 2,
                        fontSize: { xs: "34px", sm: "44px", md: "56px" },
                        fontWeight: 500,
                        color: "#010101",
                        lineHeight: 1.2,
                    }}
                >
                    Grow your business <br /> with a new wesbite.
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        pt: 2,
                        color: "#757575",
                    }}
                >
                    Resonance is a full-service creative studio creating <br />
                    beautiful digital experiences and products.
                </Typography>

                {/* Buttons */}
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2,
                        pt: 5,
                    }}
                >
                    <Typography
                        sx={{
                            bgcolor: "black",
                            color: "white",
                            px: 3,
                            py: 1.7,
                            width: "160px",
                            borderRadius: "10px",
                            fontSize: "14px",
                            fontWeight: 500,
                            textAlign: "center",
                            cursor: "pointer",
                            border: "1px solid black",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                backgroundColor: "transparent",
                                color: "black",
                            },
                        }}
                    >
                        DISCOVER NOW
                    </Typography>

                    <Typography
                        sx={{
                            px: 3,
                            py: 1.7,
                            width: "160px",
                            fontSize: "16px",
                            fontWeight: 500,
                            textAlign: "center",
                            cursor: "pointer",
                            transition: "0.3s",
                            "&:hover": {
                                color: "#1976d2",
                                letterSpacing: "0.5px",
                            },
                        }}
                    >
                        <i className="fa-solid fa-play"></i> How it works?
                    </Typography>
                </Box>
            </Box>

            {/* ================= RIGHT SIDE ================= */}
            <Box
                sx={{
                    animation: "fadeRight 1.2s ease",
                }}
            >
                <img
                    src="https://resonance-react-app.netlify.app/assets/images/stack-image-3.jpg"
                    alt="hero"
                    style={{
                        width: "100%",
                        maxWidth: "350px",
                        borderRadius: "12px",
                        transition: "transform 0.4s ease",
                    }}
                    onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                    }
                />
            </Box>

            {/* ================= Animations ================= */}
            <style>
                {`
          @keyframes fadeLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeRight {
            from {
              opacity: 0;
              transform: translateX(30px);
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

export default Hero;
