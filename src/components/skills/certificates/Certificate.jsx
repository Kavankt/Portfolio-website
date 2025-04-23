"use client";
import React, { useState } from "react";
import { Modal, IconButton, Box, Backdrop, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Tilt from "react-parallax-tilt";


const Certificate = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor="#ffffff"
      glarePosition="bottom"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={500}
    >
      <Box sx={{ width: "100%" }}>
        {/* Thumbnail */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: 3,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: 6,
              "& .overlay": { opacity: 1 },
              "& .hover-content": { transform: "translate(-50%, -50%)", opacity: 1 },
              "& .certificate-image": { filter: "contrast(1.05) brightness(1) saturate(1.1)" },
            },
          }}
        >
          {/* Certificate Image */}
          <Box sx={{ position: "relative" }}>
            <img
              className="certificate-image"
              src={ImgSertif}
              alt="Certificate"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                filter: "contrast(1.10) brightness(0.9) saturate(1.1)",
                transition: "filter 0.3s ease",
              }}
              onClick={() => setOpen(true)}
            />
          </Box>

          {/* Hover Overlay */}
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0,
              transition: "opacity 0.3s ease",
              cursor: "pointer",
              zIndex: 2,
            }}
            onClick={() => setOpen(true)}
          >
            {/* Hover Content */}
            <Box
              className="hover-content"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -60%)",
                opacity: 0,
                transition: "opacity 0.4s ease",
                textAlign: "center",
                color: "white",
              }}
            >
              <FullscreenIcon sx={{ fontSize: 40, mb: 1, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }} />
              <Typography variant="h6" sx={{ fontWeight: 600, textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
                View Certificate
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Modal */}
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 300,
            sx: { backgroundColor: "rgba(0, 0, 0, 0.9)", backdropFilter: "blur(5px)" },
          }}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: "90vw",
              maxHeight: "90vh",
            }}
          >
            {/* Close Button */}
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                right: 16,
                top: 16,
                color: "white",
                bgcolor: "rgba(0,0,0,0.6)",
                zIndex: 1,
                padding: 1,
                "&:hover": { bgcolor: "rgba(0,0,0,0.8)", transform: "scale(1.1)" },
              }}
              size="large"
            >
              <CloseIcon sx={{ fontSize: 24 }} />
            </IconButton>

            {/* Full-Screen Certificate Image */}
            <img
              src={ImgSertif}
              alt="Certificate Full View"
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "90vh",
                margin: "0 auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Modal>
      </Box>
    </Tilt>
  );
};

export default Certificate;