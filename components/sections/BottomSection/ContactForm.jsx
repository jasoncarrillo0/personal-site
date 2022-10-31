import { useForm, ValidationError } from '@formspree/react';
import { TextField, Snackbar, Alert } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import s from './ContactForm.module.scss';

const ContactForm = () => {
    // get formspree react componentxs
    const [state, handleSubmit] = useForm('xgerernj');
    const [open, setOpen]       = useState(false);
    const [email, setEmail]     = useState("");
    const [msg, setMsg]         = useState("");

    useEffect(() => {
        if (state.succeeded) {
            setOpen(true);
        }
        setEmail("");
        setMsg("");
        return () => {
            setOpen(false);
        }
    }, [state.succeeded])
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    
    return (
        <div className={s.wrap}>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
                    type="email" 
                    name="email"
                    variant="outlined"
                    label="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
                <TextField
                    fullWidth
                    multiline
                    id="message"
                    name="message"
                    label="message"
                    rows={10}
                    onChange={(e) => setMsg(e.target.value)}
                    value={msg}
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
                <LoadingButton style={{justifySelf: 'center'}} loading={state.submitting}  size="large" variant="outlined" type="submit" disabled={state.submitting}>
                    Send Message
                </LoadingButton>
                <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Thank you for reaching out! I'll get back to you as soon as possible.
                    </Alert>
                </Snackbar>
            </form>
        </div>
    );
};

export default ContactForm;