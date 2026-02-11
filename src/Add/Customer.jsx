// import { Box, Typography } from '@mui/material'
// import React from 'react'

// const Customer = () => {
//     return (

//         <Box sx={{ bgcolor: '#EAEFEF', padding: '50px', paddingTop: '100px' }}>
//             <Box sx={{ textAlign: 'center' }}>
//                 <Typography sx={{ fontWeight: '500', fontFamily: 'inherit', fontSize: '46px', lineHeight: '50px' }}>
//                     Resonance is trusted by <br /> 10,000+customers.
//                 </Typography>
//                 <Typography sx={{ paddingTop: '20px', fontFamily: 'inherit', fontSize: '22px', fontWeight: '500' }}>
//                     This template is so beautiful and has such wonderful new <br /> options. It is updated often which gives me even more quality. <br /> The support is one of the absolute best I've ever had the <br /> pleasure of interacting with. Quick, courteous, and extremely helpful!
//                 </Typography>
//             </Box>

//             <Box sx={{ paddingTop: '40px', ml: 30 }}>
//                 <Typography sx={{ fontWeight: '500' }}>
//                     _________
//                 </Typography>
//                 <Box sx={{ display: 'flex' }}>
//                     <Typography sx={{ paddingTop: '20px' }}>
//                         <img style={{ borderRadius: '100px', width: '50px' }} src="https://resonance-react-app.netlify.app/assets/images/ts1-user.jpg" alt="" />
//                     </Typography>
//                     <Typography sx={{ fontFamily: 'inherit', fontSize: '18px', paddingTop: '20px', marginLeft: '20px', fontWeight: '500' }}>
//                         Adam Peterson
//                         <Typography>
//                             Business Owner
//                         </Typography>
//                     </Typography>

//                     <Typography sx={{ paddingTop: '20px', marginLeft: '500px' }}>
//                         <i style={{ fontSize: '50px' }} class="fa-solid fa-circle-arrow-left"></i>
//                     </Typography>
//                     <Typography sx={{ paddingTop: '20px', marginLeft: '10px' }}>
//                         <i style={{ fontSize: '50px' }} class="fa-solid fa-circle-arrow-right"></i>
//                     </Typography>
//                 </Box>
//             </Box>

//         </Box>


//     )
// }

// export default Customer


// =====================================================


import { Box, Typography } from '@mui/material'
import React from 'react'

const Customer = () => {
    return (

        <Box
            sx={{
                bgcolor: '#EAEFEF',
                padding: { xs: '30px', md: '50px' },
                paddingTop: { xs: '60px', md: '100px' },
                animation: 'fadeUp 1s ease'
            }}
        >
            {/* text section */}
            <Box sx={{ textAlign: 'center' }}>
                <Typography
                    sx={{
                        fontWeight: '500',
                        fontSize: { xs: '28px', sm: '36px', md: '46px' },
                        lineHeight: { xs: '36px', md: '50px' }
                    }}
                >
                    Resonance is trusted by <br /> 10,000+ customers.
                </Typography>

                <Typography
                    sx={{
                        paddingTop: '20px',
                        fontSize: { xs: '16px', sm: '18px', md: '22px' },
                        fontWeight: '500',
                        lineHeight: '32px'
                    }}
                >
                    This template is so beautiful and has such wonderful new <br />
                    options. It is updated often which gives me even more quality. <br />
                    The support is one of the absolute best I've ever had the <br />
                    pleasure of interacting with. Quick, courteous, and extremely helpful!
                </Typography>
            </Box>

            {/* bottom section */}
            <Box
                sx={{
                    paddingTop: '40px',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Box sx={{ width: { xs: '100%', md: '70%' } }}>
                    <Typography sx={{ fontWeight: '500' }}>
                        _________
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            gap: '20px'
                        }}
                    >
                        {/* profile */}
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                style={{ borderRadius: '100px', width: '50px' }}
                                src="https://resonance-react-app.netlify.app/assets/images/ts1-user.jpg"
                                alt=""
                            />
                            <Box sx={{ marginLeft: '20px' }}>
                                <Typography sx={{ fontSize: '18px', fontWeight: '500' }}>
                                    Adam Peterson
                                </Typography>
                                <Typography sx={{ color: '#757575' }}>
                                    Business Owner
                                </Typography>
                            </Box>
                        </Box>

                        {/* arrows */}
                        <Box
                            sx={{
                                marginLeft: { xs: '0', md: 'auto' },
                                display: 'flex',
                                gap: '10px'
                            }}
                        >
                            <i
                                style={{ fontSize: '50px', cursor: 'pointer', transition: '0.3s' }}
                                className="fa-solid fa-circle-arrow-left"
                            ></i>

                            <i
                                style={{ fontSize: '50px', cursor: 'pointer', transition: '0.3s' }}
                                className="fa-solid fa-circle-arrow-right"
                            ></i>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* animations & hover */}
            <style>
                {`
                @keyframes fadeUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                i:hover {
                    transform: scale(1.15);
                }
                `}
            </style>

        </Box>
    )
}

export default Customer
