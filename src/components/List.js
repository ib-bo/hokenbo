import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { 
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    List,
    ListItem, 
    Button
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
    scrollArea: {
        height: '70vh',
        flexWrap: 'nowrap',
        flex: 1,
        overflow: 'scroll',
    },
    title: {
        fontSize: 14,
        marginBottom: 4,
    },
    text: {
        fontSize: 14,
        marginLeft: 16,
    },
    btn: {
        marginTop: 8,
        marginBottom: 8,
        flexWrap: 'nowrap',
        flex: 1,
    },
};

class DataList extends React.Component {
    constructor(props) {
      super(props)
      this.classes = props.classes
      this.state = {
      }
    }

    render() {
        const { classes } = this.props;

        return (

        <div>保険
            {this.props.dataList.map(d => {
                console.log(d)
                return (
                    <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography className={classes.heading}>{d.name}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <List
                                dense
                                disablePadding
                                className={classes.list}
                            >
                                {d.item.map(data => {
                                    return (
                                        <ListItem
                                            dense
                                            disableGutters
                                            divider
                                        >
                                            <p className={classes.title}>{data.title}</p>
                                            <p className={classes.text}>{data.text}</p>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                );
            })}
        <Button
            className={classes.btn}
        >
            リストを追加する
          </Button>  
    </div >
  );
}
}

List.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DataList);