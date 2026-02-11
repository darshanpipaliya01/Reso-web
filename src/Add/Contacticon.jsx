// import { Box, Typography } from '@mui/material'
// import React from 'react'

// const Contacticon = () => {
//     return (

//         <Box sx={{ display: 'flex', paddingTop: '100px' }}>
//             <Box sx={{ paddingTop: '100px', padding: '40px' }}>
//                 <Typography sx={{ fontFamily: 'inherit', fontWeight: '500', fontSize: '16px', color: '#757575' }}>
//                     PRIMARY BENEFITS
//                 </Typography>
//                 <Typography sx={{ paddingTop: '20px', fontSize: '40px', lineHeight: '50px', fontWeight: '500' }}>
//                     Why choose <br /> Resonance?
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontWeight: '500' }}>
//                     _________
//                 </Typography>
//             </Box>


//             <Box sx={{ paddingTop: '100px', padding: '40px', marginLeft: '30px' }}>
//                 <Typography>
//                     <i style={{ fontSize: '50px' }} class="fa-brands fa-brave"></i>
//                 </Typography>
//                 <Typography sx={{ paddingTop: '20px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
//                     Unique Design
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontWeight: '500', color: '#757575', fontSize: '16px' }}>
//                     Fusce aliquet quam eget neque <br /> ultrices elementum felis id arcu <br /> blandit sagittis.
//                 </Typography>
//             </Box>


//             <Box sx={{ paddingTop: '100px', padding: '40px' }}>
//                 <Typography>
//                     <i style={{ fontSize: '50px' }} class="fa-regular fa-chess-queen"></i>
//                 </Typography>
//                 <Typography sx={{ paddingTop: '20px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
//                     Unique Design
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontWeight: '500', color: '#757575', fontSize: '16px' }}>
//                     Lorem ipsum dolor sit amet <br /> rembe adipiscing elite Inwege <br /> maximus ligula imsum.
//                 </Typography>
//             </Box>


//             <Box sx={{ paddingTop: '100px', padding: '40px' }}>
//                 <Typography>
//                     <i style={{ fontSize: '50px' }} class="fa-solid fa-seedling"></i>
//                 </Typography>
//                 <Typography sx={{ paddingTop: '20px', fontFamily: 'inherit', fontWeight: '500', fontSize: '18px' }}>
//                     Unique Design
//                 </Typography>
//                 <Typography sx={{ paddingTop: '10px', fontFamily: 'inherit', fontWeight: '500', color: '#757575', fontSize: '16px' }}>
//                     Maecenas volutpat, diam enime <br /> volutpa cramas luctus interdum <br /> sodales.
//                 </Typography>
//             </Box>


//         </Box>

//     )
// }

// export default Contacticon


// ==============================================



import { Box, Typography } from '@mui/material'
import React from 'react'

const Contacticon = () => {
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                paddingTop: '100px',
                justifyContent: 'center',
                gap: { xs: '20px', md: '0' }
            }}
        >

            {/* Left text section */}
            <Box
                sx={{
                    paddingTop: { xs: '40px', md: '100px' },
                    padding: '40px',
                    animation: 'fadeUp 1s ease'
                }}
            >
                <Typography sx={{ fontWeight: '500', fontSize: '16px', color: '#757575' }}>
                    PRIMARY BENEFITS
                </Typography>
                <Typography sx={{ paddingTop: '20px', fontSize: '40px', lineHeight: '50px', fontWeight: '500' }}>
                    Why choose <br /> Resonance?
                </Typography>
                <Typography sx={{ paddingTop: '10px', fontWeight: '500' }}>
                    _________
                </Typography>
            </Box>

            {/* Box 1 */}
            <Box
                sx={{
                    paddingTop: { xs: '40px', md: '100px' },
                    padding: '40px',
                    animation: 'fadeUp 1.2s ease',
                    transition: '0.4s',
                    '&:hover': {
                        transform: 'translateY(-8px)'
                    }
                }}
            >
                <Typography>
                    <i style={{ fontSize: '50px' }} className="fa-brands fa-brave"></i>
                </Typography>
                <Typography sx={{ paddingTop: '20px', fontWeight: '500', fontSize: '18px' }}>
                    Unique Design
                </Typography>
                <Typography sx={{ paddingTop: '10px', color: '#757575', fontSize: '16px' }}>
                    Fusce aliquet quam eget neque <br />
                    ultrices elementum felis id arcu <br />
                    blandit sagittis.
                </Typography>
            </Box>

            {/* Box 2 */}
            <Box
                sx={{
                    paddingTop: { xs: '40px', md: '100px' },
                    padding: '40px',
                    animation: 'fadeUp 1.4s ease',
                    transition: '0.4s',
                    '&:hover': {
                        transform: 'translateY(-8px)'
                    }
                }}
            >
                <Typography>
                    <i style={{ fontSize: '50px' }} className="fa-regular fa-chess-queen"></i>
                </Typography>
                <Typography sx={{ paddingTop: '20px', fontWeight: '500', fontSize: '18px' }}>
                    Unique Design
                </Typography>
                <Typography sx={{ paddingTop: '10px', color: '#757575', fontSize: '16px' }}>
                    Lorem ipsum dolor sit amet <br />
                    rembe adipiscing elite Inwege <br />
                    maximus ligula imsum.
                </Typography>
            </Box>

            {/* Box 3 */}
            <Box
                sx={{
                    paddingTop: { xs: '40px', md: '100px' },
                    padding: '40px',
                    animation: 'fadeUp 1.6s ease',
                    transition: '0.4s',
                    '&:hover': {
                        transform: 'translateY(-8px)'
                    }
                }}
            >
                <Typography>
                    <i style={{ fontSize: '50px' }} className="fa-solid fa-seedling"></i>
                </Typography>
                <Typography sx={{ paddingTop: '20px', fontWeight: '500', fontSize: '18px' }}>
                    Unique Design
                </Typography>
                <Typography sx={{ paddingTop: '10px', color: '#757575', fontSize: '16px' }}>
                    Maecenas volutpat, diam enime <br />
                    volutpa cramas luctus interdum <br />
                    sodales.
                </Typography>
            </Box>

            {/* animations */}
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
                `}
            </style>

        </Box>
    )
}

export default Contacticon
