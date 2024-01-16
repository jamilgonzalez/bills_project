import { Grid, Typography, Avatar, Divider } from "@mui/material";

import EditModal from "../EditModal";
import useBudget from "../../hooks/useBudget";

const MembersModal = ({ user, isOpen, handleClose }) => {
  const { household } = useBudget();
  const isAdmin = household?.members.find(
    (member) => member.role === "admin" && member.accountId === user?.accountId
  );

  return (
    <EditModal
      title={"Members"}
      isOpen={isOpen}
      handleClose={handleClose}
      handleOnSubmit={handleClose}
      withSubmitButtons={false}>
      <Grid container spacing={2} direction={"row"} item xs={12}>
        {/* invite link area where users will click to copy */}
        {isAdmin && (
          <Grid
            container
            direction={"row"}
            sx={{ marginBottom: "20px", marginTop: "20px" }}
            alignItems={"center"}
            item
            xs={12}>
            <Grid item xs={12}>
              <Typography variant="body2">Invite Link</Typography>
            </Grid>
            <Grid item xs={12} sx={{ marginTop: "5px", marginBlock: "5px" }}>
              <Typography color={"gray"} variant="caption">
                Invite a user to your household by sending them the link below.
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="body1">
                https://b2z.app/invite/asefe3298a7fe974s6
              </Typography>
            </Grid>
          </Grid>
        )}
        {/* a list of members with their role (if admin you will be able to remove from household) */}
        <Grid
          container
          sx={{ height: "50px" }}
          justifyItems={"center"}
          alignItems={"center"}
          item
          xs={12}>
          <Grid container item xs={12}>
            <Grid item xs={5}>
              <Typography variant="body2" color={"gray"}>
                User
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color={"gray"}>
                Role
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Divider
                sx={{ marginTop: "5px", marginBottom: "5px" }}
                orientation="horizontal"
              />
            </Grid>
          </Grid>
          <Grid container item xs={12}>
            {household?.members.map((member) => (
              <Grid container alignItems={"center"} item xs={12}>
                <Grid container justifyContent={"start"} item xs={1}>
                  <Avatar
                    sx={{ height: "34px", width: "34px" }}
                    src={member.avatar}
                  />
                </Grid>
                <Grid container direction={"row"} item xs={4}>
                  <Grid item xs={12}>
                    <Typography variant="body1">{member.name}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="caption">{member.email}</Typography>
                  </Grid>
                </Grid>
                <Grid container alignContent={"center"} item xs={3}>
                  <Typography variant="body1">{member.role}</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ marginTop: "5px", marginBottom: "5px" }}>
                  <Divider orientation="horizontal" />
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </EditModal>
  );
};

export default MembersModal;
