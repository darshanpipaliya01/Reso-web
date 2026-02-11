// import { Box, Typography } from "@mui/material";

// function Header() {
//     return (

//         // header 1 ==========================

//         <Box sx={{ padding: '40px', paddingTop: '30px', display: 'flex' }}>
//             <Box>
//                 <Typography>
//                     <img style={{ width: '50%' }} src="https://resonance-react-app.netlify.app/assets/images/logo-dark.svg" alt="" />
//                 </Typography>
//             </Box>

//         {/* header 2 ===========================  */}

//             <Box sx={{ display: 'flex', marginLeft: '80px', paddingTop: '10px' }}>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
//                     Home<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
//                 </Typography>
//                 <Typography sx={{ marginLeft: '40px', fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
//                     Pages<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
//                 </Typography>
//                 <Typography sx={{ marginLeft: '40px', fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
//                     Elements<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
//                 </Typography>
//                 <Typography sx={{ marginLeft: '40px', fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
//                     Portfolio<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
//                 </Typography>
//                 <Typography sx={{ marginLeft: '40px', fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
//                     Blog<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
//                 </Typography>
//             </Box>

//         {/* header 3 ===================  */}

//             <Box sx={{ display: 'flex', marginLeft: '100px', paddingTop: '10px' }}>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '600', fontSize: '16px' }}>
//                     En<i style={{ fontSize: '12px', marginLeft: '4px' }} class="fa-solid fa-chevron-down"></i>
//                 </Typography>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '600', fontSize: '16px', marginLeft: '30px' }}>
//                     Let's Work together
//                 </Typography>
//             </Box>


//         </Box>

//     )
// }

// export default Header;


// =============================================

import { Box, Typography, IconButton, Drawer, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

function Header() {
    const [open, setOpen] = useState(false);

    const menuItems = ["Home", "Pages", "Elements", "Portfolio", "Blog"];

    return (
        <>
            <Box
                sx={{
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 2, md: 4 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Box>
                    <img
                        src="https://resonance-react-app.netlify.app/assets/images/logo-dark.svg"
                        alt="logo"
                        style={{ width: "140px" }}
                    />
                </Box>

                {/* Desktop Menu */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: "40px",
                    }}
                >
                    {menuItems.map((item) => (
                        <Typography
                            key={item}
                            sx={{
                                fontWeight: 600,
                                fontSize: "16px",
                                cursor: "pointer",
                                position: "relative",
                                transition: "0.3s",
                                "&:hover": {
                                    color: "#1976d2",
                                    transform: "translateY(-2px)",
                                },
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    width: "0%",
                                    height: "2px",
                                    left: 0,
                                    bottom: -4,
                                    backgroundColor: "#1976d2",
                                    transition: "0.3s",
                                },
                                "&:hover::after": {
                                    width: "100%",
                                },
                            }}
                        >
                            {item}
                            <i
                                style={{ fontSize: "12px", marginLeft: "4px" }}
                                className="fa-solid fa-chevron-down"
                            ></i>
                        </Typography>
                    ))}
                </Box>

                {/* Desktop Right Side */}
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        gap: "30px",
                    }}
                >
                    <Typography sx={{ fontWeight: 600, cursor: "pointer" }}>
                        En
                        <i
                            style={{ fontSize: "12px", marginLeft: "4px" }}
                            className="fa-solid fa-chevron-down"
                        ></i>
                    </Typography>

                    <Typography
                        sx={{
                            fontWeight: 600,
                            cursor: "pointer",
                            "&:hover": { color: "#1976d2" },
                        }}
                    >
                        Let's Work together
                    </Typography>
                </Box>

                {/* Mobile Menu Button */}
                <IconButton
                    sx={{ display: { xs: "flex", md: "none" } }}
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon />
                </IconButton>
            </Box>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 260, p: 3 }}>
                    <Stack spacing={3}>
                        {menuItems.map((item) => (
                            <Typography
                                key={item}
                                sx={{
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    transition: "0.3s",
                                    "&:hover": {
                                        color: "#1976d2",
                                        paddingLeft: "6px",
                                    },
                                }}
                                onClick={() => setOpen(false)}
                            >
                                {item}
                            </Typography>
                        ))}

                        <Typography sx={{ fontWeight: 600 }}>En</Typography>
                        <Typography sx={{ fontWeight: 600 }}>
                            Let's Work together
                        </Typography>
                    </Stack>
                </Box>
            </Drawer>
        </>
    );
}

export default Header;
