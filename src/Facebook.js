import {
  AppBar,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
// import AddIcon from "@material-ui/icons/Add";
// import EditIcon from "@material-ui/icons/Edit";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles(() => ({
  inputBase: {
    border: "1px solid red",
    outlineColor: "green",
    margin: "5px",
    height: "6vh",
  },
  select: {
    width: "120px",
    height: "35px",
  },
}));

function Facebook() {
  let [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h2" style={{ flex: 1 }}>
                Facebook
              </Typography>
              <Paper style={{ padding: 10 }}>
                <form>
                  <TextField
                    label="UserName"
                    autoFocus={false}
                    variant="outlined"
                    size="small"
                    placeholder="userName"
                    style={{ color: "white", marginRight: "10px" }}
                  />
                  <TextField
                    variant="outlined"
                    autoFocus={false}
                    label="Password"
                    size="small"
                    placeholder="password"
                    style={{ color: "white", marginRight: "10px" }}
                  />
                  <Button variant="contained" color="primary">
                    Login
                  </Button>
                </form>
              </Paper>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid style={{ height: 100 }} item xs={12} sm={12} lg={12}></Grid>
        <Grid item container>
          <Grid item xs={false} sm={6} lg={8}></Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Paper style={{ height: 400, padding: 10 }}>
              <form>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="userName"
                  label="UserName"
                  style={{ marginBottom: 10 }}
                  size="small"
                />
                <TextField
                  placeholder="Email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: 10 }}
                  size="small"
                />
                <TextField
                  placeholder="Password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  style={{ marginBottom: 10 }}
                  size="small"
                />

                <Grid container>
                  <Grid item>
                    <FormControl>
                      <Select variant="outlined" className={classes.select}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <FormControl>
                      <Select variant="outlined" className={classes.select}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <FormControl>
                      <Select variant="outlined" className={classes.select}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    size="small"
                    disableToolbar
                    fullWidth
                    // variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>

                <FormControl component="fieldset" style={{marginBottom:10}}>
                  
                  <RadioGroup row  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      style={{marginRight:50}}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      style={{marginRight:50}}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  SignUp
                </Button>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Facebook;
