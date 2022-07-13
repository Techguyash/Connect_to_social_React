import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const ImgUploader = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        onImageRemoveAll,
        onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          <button
            //style={isDragging ? { color: "red" } : undefined}
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={onImageUpload}
            {...dragProps}
          >
            <IconButton aria-label="delete">
              <Image color="secondary" />
            </IconButton>
          </button>
          &nbsp;
          {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              {/* <img src={image["data_url"]} alt="" width="100" /> */}
              {images && (
                <Typography
                  fontSize="12px"
                  alignItems="center"
                  textAlign="center"
                >
                  {images[0].file.name}
                </Typography>
              )}

              {/* <div className="image-item__btn-wrapper">
                <button onClick={() => onImageUpdate(index)}>Update</button>
                <button onClick={() => onImageRemove(index)}>Remove</button>
              </div> */}
            </div>
          ))}
        </div>
      )}
    </ImageUploading>
  );
};

const Add = () => {
  const [open, setopen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <React.Fragment>
      <Tooltip
        onClick={(e) => {
          setopen(true);
        }}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 20px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => {
          setopen(false);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          width={400}
          height={350}
          p={4}
          borderRadius={5}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{
                width: 30,
                height: 30,
              }}
              src="https://images.pexels.com/photos/4091205/pexels-photo-4091205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <Typography variant="span" fontWeight={500}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={2}
            placeholder="what's on your mind.."
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <IconButton aria-label="delete">
              <EmojiEmotions color="primary" />
            </IconButton>

            {/* <IconButton aria-label="delete">
              <Image color="secondary" />
            </IconButton> */}
            <ImgUploader />

            {/* this is file upload component */}

            {/* end of file upload component */}
            <IconButton aria-label="delete">
              <VideoCameraBack color="success" />
            </IconButton>

            <IconButton aria-label="delete">
              <PersonAdd color="error" />
            </IconButton>
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </React.Fragment>
  );
};

export default Add;
