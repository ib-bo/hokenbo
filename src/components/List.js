import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { 
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography,
    List,
    ListItem, 
    Button,
    Avatar
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = {
    title: {
        fontSize: 14,
        marginBottom: 4,
    },
    text: {
        fontSize: 14,
        marginLeft: 16,
    },
    expansionPanel: {
        borderRadius: 5,
        marginTop: 4,
        zIndex: 0
    },
    bigAvatar: {
        width: 40,
        height: 40,
        margin: 4
    }
};

const CustomButton = withStyles(theme => ({
    root: {
        marginTop: 8,
        marginBottom: 8,
        flexWrap: 'nowrap',
        flex: 1,
    },
  }))(Button)

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
            <div>
                <CustomButton
                    onClick={this.props.addData}
                >
                    リストを追加する
                </CustomButton>  
                {this.props.dataList.map(d => {
                    return (
                        <ExpansionPanel className={classes.expansionPanel}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Avatar
                                    className={classes.bigAvatar}
                                    src='http://www.aeon.jp/sc/ayagawa/shop/store/img/logo/249.gif'
                                />
                                <Typography className={classes.heading}>{d.name}</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <List
                                    dense
                                    disablePadding
                                    className={classes.list}
                                >
                                    {d.item.map((data, index) => {
                                        return (
                                            <ListItem
                                                dense
                                                disableGutters
                                                divider
                                                key={index}
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
            </div >
        );
    }
}

export default withStyles(styles)(DataList);