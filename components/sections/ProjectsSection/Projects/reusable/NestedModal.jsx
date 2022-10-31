import React from "react"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import s from './NestedModal.module.scss';
import { Button } from "@mui/material";

const boxStyles = {
    width: 400,
    margin: '0 auto',
    background: "black"
}

const NestedModal = ({ open, setOpen, note, link }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      className={s.wrap}
      hideBackdrop
      sx={{zIndex: 99999}}
    >
      <Box sx={boxStyles} className={s.box}>
        <h2>Quick Note</h2>
        <p>{note}</p>
        <div className={s.btnWrap}>
            <Button variant="contained" href={link} target="_blank">Continue to Site</Button>
            <Button variant="contained" onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Box>
    </Modal>
  )
}

export default NestedModal
