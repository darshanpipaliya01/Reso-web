

import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Stack,
} from "@mui/material";

const Newsletter = () => {
    return (
        <Box
            sx={{
                paddingTop: '100px',
                minHeight: "350px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "radial-gradient(circle at top, #1a1a1a, #000)",
                color: "#fff",
                px: 2,
            }}
        >
            <Box sx={{ maxWidth: 700, width: "100%", textAlign: "center" }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 600,
                        mb: 4,
                    }}
                >
                    Stay informed with our <br /> newsletter.
                </Typography>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="center"
                >
                    <TextField
                        placeholder="Enter your email"
                        variant="outlined"
                        fullWidth
                        sx={{
                            maxWidth: 380,
                            input: { color: "#fff" },
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                backgroundColor: "rgba(255,255,255,0.05)",
                                "& fieldset": {
                                    borderColor: "rgba(255,255,255,0.3)",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#fff",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "#fff",
                                },
                            },
                        }}
                    />

                    <Button
                        variant="contained"
                        sx={{
                            px: 4,
                            py: 1.6,
                            borderRadius: "8px",
                            backgroundColor: "#fff",
                            color: "#000",
                            fontWeight: 600,
                            letterSpacing: "1px",
                            "&:hover": {
                                backgroundColor: "#e5e5e5",
                            },
                        }}
                    >
                        SUBSCRIBE NOW
                    </Button>
                </Stack>

                <Typography
                    variant="body2"
                    sx={{
                        mt: 2,
                        color: "rgba(255,255,255,0.6)",
                    }}
                >
                    ⓘ By sending the form you agree to the{" "}
                    <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                        Terms & Conditions
                    </span>{" "}
                    and{" "}
                    <span style={{ textDecoration: "underline", cursor: "pointer" }}>
                        Privacy Policy
                    </span>
                    .
                </Typography>
            </Box>
        </Box>
    );
};

export default Newsletter;
