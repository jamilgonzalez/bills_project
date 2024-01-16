import { IconButton, Avatar, Skeleton, Badge } from "@mui/material";

const UserAccountButton = ({ avatarImg, isLoading, handleOnClick }) => {
  return (
    <IconButton onClick={handleOnClick} size="large" sx={{ ml: 2 }}>
      {isLoading ? (
        <Skeleton variant="circular" width={32} height={32} />
      ) : (
        <Badge variant="dot" badgeContent={1} color="error">
          <Avatar src={avatarImg} sx={{ width: 32, height: 32 }} />
        </Badge>
      )}
    </IconButton>
  );
};

export default UserAccountButton;
