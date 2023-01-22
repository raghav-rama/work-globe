import * as React from "react";
import FreelanceNavBar from "../components/FreelanceNavBar";

import { Box, Paper, Typography, ButtonBase, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

import JobPostModal from "../components/PostJobModal";

const Item = styled(Paper)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    width: '80vw',
    height: '5vh',
  }
}));

const Text = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  }
}));

const Image = styled("img")(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    width: '10vw',
    height: '5vh',
  }
}));

const Freelancer = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const [jobs, setJobs] = React.useState([
    {
      company: "Netflix",
      role: "Senior Web Developer",
      experience: "3 yrs experience",
      logo: "netflix-512.png",
    },
    {
      company: "Tata",
      role: "Senior Software Engineer",
      experience: "5 yrs experience",
      logo: "tata-logo-blue.png",
    },
    {
      company: "Wipro",
      role: "Senior Software Engineer",
      experience: "2 yrs experience",
      logo: "wipro-logo.png",
    },
  ]);
  const [input, setInput] = React.useState({
    company: "Generic",
    role: "",
    experience: "",
    logo: "generic.png",
  });
  const onRoleChange = (e) => setInput({ ...input, role: e.target.value });
  const onExperienceChange = (e) =>
    setInput({ ...input, experience: e.target.value });
  const onSubmit = () => setJobs([...jobs, input]);
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <FreelanceNavBar
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        handleModalClose={handleModalClose}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          flexDirection: "column",
          gap: 1.2,
          mt: 2,
          mb: 2,
          width: "100%",
          minHeight: "50vh",
        }}
      >
        {jobs.map((job) =>
          job.role === "" || job.experience === "" ? (
            ""
          ) : (
            <ButtonBase
              onClick={() =>
                navigate("/jobpost", {
                  state: {
                    company: job.company,
                    role: job.role,
                    experience: job.experience,
                    logo: job.logo,
                  },
                })
              }
            >
              <Item
                elevation={3}
                sx={{
                  p: 2,
                  width: "30vw",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src={require(`../img/${job.logo}`)}
                  alt={job.logo}
                  height={100}
                  width={100}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Text
                    variant="h6"
                    component="p"
                    sx={{ textAlign: "left", ml: 1, color: "black" }}
                  >
                    {job.role}
                  </Text>
                  <Text
                    variant="subtitle2"
                    component="p"
                    sx={{ textAlign: "left", ml: 1, color: "black" }}
                  >
                    {job.experience}
                  </Text>
                </Box>
              </Item>
            </ButtonBase>
          )
        )}

        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <JobPostModal
            input={input}
            onRoleChange={onRoleChange}
            onExperienceChange={onExperienceChange}
            onSubmit={onSubmit}
            handleModalClose={handleModalClose}
          />
        </Modal>
      </Box>
    </Box>
  );
};

export default Freelancer;
