// import { Box, Typography } from "@mui/material";

// function Team() {
//     return (

//         // 1 Section ............

//         <Box sx={{ display: 'flex', paddingTop: '200px', padding: '50px', bgcolor: '#EAEFEF' }}>
//             <Box>
//                 <Typography sx={{ paddingTop: '100px', fontSize: '40px', fontFamily: 'inherit', fontWeight: '500' }}>
//                     We are strong team who <br /> brings innovative ideas <br /> into production.
//                 </Typography>
//                 <Typography sx={{ paddingTop: '30px', fontWeight: '700' }}>
//                     _____________
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
//                     Thomas Johnson
//                 </Typography>
//                 <Typography sx={{ paddingTop: '2px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500', color: '#757575' }}>
//                     Developer, Co-founder
//                 </Typography>
//             </Box>

//             {/* 2 img section ................ */}

//             <Box sx={{ marginLeft: '100px' }}>
//                 <Typography sx={{ paddingTop: '50px' }}>
//                     <img style={{ width: '280px' }} src="https://resonance-react-app.netlify.app/assets/images/team/team-1.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
//                     Thomas Johnson
//                 </Typography>
//                 <Typography sx={{ textAlign: 'center', paddingTop: '2px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500', color: '#757575' }}>
//                     Developer, Co-founder
//                 </Typography>
//             </Box>

//             {/* 3 img section ............ */}

//             <Box sx={{ marginLeft: '50px' }}>
//                 <Typography sx={{ paddingTop: '50px' }}>
//                     <img style={{ width: '280px' }} src="https://resonance-react-app.netlify.app/assets/images/team/team-2.jpg" alt="" />
//                 </Typography>
//                 <Typography sx={{ textAlign: 'center', paddingTop: '10px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500' }}>
//                     Emma Johnson
//                 </Typography>
//                 <Typography sx={{ textAlign: 'center', paddingTop: '2px', fontFamily: 'inherit', fontSize: '18px', fontWeight: '500', color: '#757575' }}>
//                     UI/UX Designer, co-founder
//                 </Typography>
//             </Box>

//         </Box>

//     )
// }


// export default Team;

// ==========================================================



import { Box, Typography } from "@mui/material";

function Team() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // responsive only
                paddingTop: { xs: "80px", md: "200px" },
                padding: { xs: "20px", md: "50px" },
                bgcolor: "#EAEFEF",
                gap: { xs: 6, md: 0 },
            }}
        >
            {/* 1st Section – TEXT (SEM TO SEM) */}
            <Box
                sx={{
                    animation: "fadeLeft 1s ease",
                }}
            >
                <Typography
                    sx={{
                        paddingTop: { xs: "20px", md: "100px" },
                        fontSize: { xs: "28px", md: "40px" }, // responsive only
                        fontWeight: 500,
                    }}
                >
                    We are strong team who <br />
                    brings innovative ideas <br />
                    into production.
                </Typography>

                <Typography sx={{ paddingTop: "30px", fontWeight: 700 }}>
                    _____________
                </Typography>

                <Typography
                    sx={{
                        paddingTop: "10px",
                        fontSize: "18px",
                        fontWeight: 500,
                    }}
                >
                    Thomas Johnson
                </Typography>

                <Typography
                    sx={{
                        paddingTop: "2px",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#757575",
                    }}
                >
                    Developer, Co-founder
                </Typography>
            </Box>

            {/* 2nd Section – IMAGE 1 (SEM TO SEM) */}
            <Box
                sx={{
                    marginLeft: { xs: 0, md: "100px" },
                    animation: "fadeUp 1.1s ease",
                }}
            >
                <Typography sx={{ paddingTop: "50px" }}>
                    <img
                        src="https://resonance-react-app.netlify.app/assets/images/team/team-1.jpg"
                        alt=""
                        style={{
                            width: "280px",
                            maxWidth: "100%", // responsive only
                            transition: "transform 0.4s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                        }
                    />
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        paddingTop: "10px",
                        fontSize: "18px",
                        fontWeight: 500,
                    }}
                >
                    Thomas Johnson
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        paddingTop: "2px",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#757575",
                    }}
                >
                    Developer, Co-founder
                </Typography>
            </Box>

            {/* 3rd Section – IMAGE 2 (SEM TO SEM) */}
            <Box
                sx={{
                    marginLeft: { xs: 0, md: "50px" },
                    animation: "fadeUp 1.3s ease",
                }}
            >
                <Typography sx={{ paddingTop: "50px" }}>
                    <img
                        src="https://resonance-react-app.netlify.app/assets/images/team/team-2.jpg"
                        alt=""
                        style={{
                            width: "280px",
                            maxWidth: "100%",
                            transition: "transform 0.4s ease",
                        }}
                        onMouseOver={(e) =>
                            (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.style.transform = "scale(1)")
                        }
                    />
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        paddingTop: "10px",
                        fontSize: "18px",
                        fontWeight: 500,
                    }}
                >
                    Emma Johnson
                </Typography>

                <Typography
                    sx={{
                        textAlign: "center",
                        paddingTop: "2px",
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#757575",
                    }}
                >
                    UI/UX Designer, co-founder
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

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
            </style>
        </Box>
    );
}

export default Team;
