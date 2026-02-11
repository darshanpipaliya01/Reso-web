// import { Box, Typography } from "@mui/material";

// function Trust(){
//     return(

//         <Box sx={{paddingTop:'100px',textAlign:'center'}}>

//                 <Typography sx={{fontSize:'20px',fontWeight:'500',fontFamily:'inherit'}}>
//                     Trusted by Leading Companies
//                 </Typography>
//                 <Box sx={{paddingTop:'30px',display:'flex'}}>
//                     <Typography sx={{ml:35}}>
//                         <img style={{width:'120px'}} src="https://resonance-react-app.netlify.app/assets/images/clients-logos/logo-grid/logo-1.png" alt="" />
//                     </Typography>
//                      <Typography sx={{ml:4}}>
//                         <img style={{width:'120px'}} src="https://resonance-react-app.netlify.app/assets/images/clients-logos/logo-grid/logo-2.png" alt="" />
//                     </Typography>
//                      <Typography sx={{ml:4}}>
//                         <img style={{width:'120px'}} src="https://resonance-react-app.netlify.app/assets/images/clients-logos/logo-grid/logo-3.png" alt="" />
//                     </Typography>
//                      <Typography sx={{ml:4}}>
//                         <img style={{width:'120px'}} src="https://resonance-react-app.netlify.app/assets/images/clients-logos/logo-grid/logo-4.png" alt="" />
//                     </Typography>
//                      <Typography sx={{ml:4}}>
//                         <img style={{width:'120px'}} src="https://resonance-react-app.netlify.app/assets/images/clients-logos/logo-grid/logo-5.png" alt="" />
//                     </Typography>
//                 </Box>
//         </Box>

//     )
// }

// export default Trust;


// =====================================================



import { Box, Typography } from "@mui/material";

function Trust() {
    return (

        <Box
            sx={{
                paddingTop: '100px',
                textAlign: 'center',
                animation: 'fadeUp 1s ease'
            }}
        >
            <Typography
                sx={{
                    fontSize: { xs: '18px', md: '20px' },
                    fontWeight: '500',
                    fontFamily: 'inherit'
                }}
            >
                Trusted by Leading Companies
            </Typography>

            <Box
                sx={{
                    paddingTop: '30px',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: { xs: '20px', md: '30px' }
                }}
            >
                {[
                    "logo-1.png",
                    "logo-2.png",
                    "logo-3.png",
                    "logo-4.png",
                    "logo-5.png",
                ].map((logo, index) => (
                    <Box
                        key={index}
                        sx={{
                            transition: '0.4s',
                            opacity: 0.6,
                            '&:hover': {
                                opacity: 1,
                                transform: 'scale(1.1)'
                            }
                        }}
                    >
                        <img
                            style={{ width: '120px', maxWidth: '100%' }}
                            src={`https://resonance-react-app.netlify.app/assets/images/clients-logos/logo-grid/${logo}`}
                            alt=""
                        />
                    </Box>
                ))}
            </Box>

            {/* animation */}
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

export default Trust;
