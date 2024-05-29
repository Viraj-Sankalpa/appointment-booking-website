
import { Button, Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

const ContactForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Name" fullWidth {...register('name', { required: true })} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" fullWidth {...register('email', { required: true })} />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Phone" fullWidth {...register('phone', { required: true })} />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
