import React from 'react';
import { sizing } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import MoodIcon from '@material-ui/icons/Mood';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';

import { makeStyles } from '@material-ui/core/styles';
import RequiredParamTable from './RequiredParamTable';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 1450,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function TrainingPhraseOverlay() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [sentiment, setSentiment] = React.useState('');

  const handleChange = (event) => {
    setSentiment(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className={classes.root} onClick={handleClickOpen} width="auto">
        <CardActionArea>
          <CardContent style={{backgroundColor: "pink"}} >
            <CreateIcon  style={{ margin: 7 }}/>
            <Typography variant="body2" component="p">
              <AccountBoxOutlinedIcon /> Entity
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              <MoodIcon /> Sentiment
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              <LibraryBooksOutlinedIcon /> Required Parameter
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth="true" maxWidth="sm">
        <DialogTitle id="form-dialog-title">[insert intent name]</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Entities
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <RequiredParamTable />
        <DialogContent>
          <DialogContentText>
            Sentiment
          </DialogContentText>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Sentiment</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sentiment}
              onChange={handleChange}
              maxWidth = "sm"
            >
              <MenuItem value={10}>Positive</MenuItem>
              <MenuItem value={20}>Neutral</MenuItem>
              <MenuItem value={30}>Negative</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogContent>
          <DialogContentText>
            Required Parameters
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" >
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}