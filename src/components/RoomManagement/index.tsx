import * as React from 'react';

import { connect } from "react-redux";
import { toggleModal } from "../../actions/main";

import Typography from '@material-ui/core/Typography';

import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TableRoom from './TableRoom';
import Modal from '../Modal';

import GeneralActions from "../../actions/generalActions";
import ITFGeneralActions from "../../interfaces/generalActions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    }
  }),
);

interface IRoomProps {
  toggleModal: (value: boolean) => void
}

const RoomManagement: React.FunctionComponent<IRoomProps & ITFGeneralActions> = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="content-admin__header">
        <Typography variant="h4" gutterBottom>
          All Rooms
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddCircleOutline />}
          onClick={() => {
            props.toggleModal(true);
            props.resetData("room")
          }}
        >
          New Room
        </Button>
      </div>
      <Modal />
      <TableRoom />

    </React.Fragment>
  );
};

export default connect(null, { toggleModal })(GeneralActions(RoomManagement));