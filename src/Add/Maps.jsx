import React from "react";
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    Stack,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const ContactUs = () => {
    return (
        <Box sx={{ px: { xs: 2, md: 8 }, py: 10 }}>
            {/* Header */}
            <Typography
                variant="caption"
                sx={{ letterSpacing: 2, color: "gray" }}
            >
                CONTACT US
            </Typography>

            <Typography
                variant="h3"
                sx={{ fontWeight: 600, mt: 2, mb: 6 }}
            >
                Let’s start the <br /> productive work.
            </Typography>

            {/* Main Section */}
            <Grid container spacing={6} alignItems="stretch">
                {/* LEFT SIDE */}
                <Grid item xs={12} md={6}>
                    <Stack spacing={4}>
                        {/* Contact Info */}
                        <Stack direction="row" spacing={2}>
                            <EmailOutlinedIcon />
                            <Box>
                                <Typography fontWeight={600}>Say hello</Typography>
                                <Typography color="text.secondary">
                                    elitethemes24@gmail.com
                                </Typography>
                                <Typography color="text.secondary">
                                    +1 837 652 8800
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <LocationOnOutlinedIcon />
                            <Box>
                                <Typography fontWeight={600}>Location</Typography>
                                <Typography color="text.secondary">
                                    123 King Street, London W6 9JG,
                                    <br />
                                    United Kingdom
                                </Typography>
                            </Box>
                        </Stack>

                        {/* Name & Email */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography>Name</Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter your name"
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Typography>Email</Typography>
                                <TextField
                                    fullWidth
                                    placeholder="Enter your email"
                                />
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>

                {/* RIGHT SIDE */}
                <Box sx={{ ml: 20 }}>
                    <Grid item xs={12} md={6} >
                        <Stack spacing={2} height="100%">
                            {/* Message */}
                            <Box>
                                <Typography>Message</Typography>
                                <TextField
                                    fullWidth
                                    multiline
                                    rows={1}
                                    placeholder="Enter your message"
                                />
                            </Box>

                            {/* Button */}
                            <Button
                                variant="contained"
                                sx={{
                                    width: "fit-content",
                                    backgroundColor: "#000",
                                    px: 4,
                                    py: 1.5,
                                    "&:hover": { backgroundColor: "#222" },
                                }}
                            >
                                SEND MESSAGE
                            </Button>

                            {/* Map */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    minHeight: 260,
                                    borderRadius: 2,
                                    overflow: "hidden",
                                }}
                            >
                                <iframe
                                    title="Google Map"
                                    src="https://www.google.com/maps?q=245%20Quigley%20Blvd%20New%20Castle%20DE&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                />
                            </Box>
                        </Stack>
                    </Grid>
                </Box>
            </Grid>
        </Box>
    );
};

export default ContactUs;
