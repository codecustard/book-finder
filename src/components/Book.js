import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

class Book extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        const bull = <span className={classes.bullet}>•</span>;
      
        return (
          <Card className={classes.root} variant="outlined">
            <CardContent>
              {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography> */}
              <Typography variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Publisher: {this.props.publisher}
                <br />
                <h3>Author: {this.props.author}</h3>
              </Typography>
              {/* <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> */}
              <img src={this.props.image}></img>
            </CardContent>
            <CardActions>
              <Button size="small" href={this.props.link} target="_blank" color="secondary">Learn More</Button>
            </CardActions>
          </Card>
        );



        // return (
        //     <div style={cardContainerStyle}>
        //         <Card>
        //             <Card.Content>
                    
        //             {/* <Card.Meta>{this.props.}</Card.Meta> */}
        //             <Card.Description>
        //             {this.props.title}<br />
        //                 {this.props.author}
        //                 <br />
        //                 <h3>{this.props.publisher}</h3>
        //             </Card.Description>
        //             </Card.Content>
        //             <Card.Content extra>
        //             {/* <a>
        //                 <Icon name='user' />
        //                 10 Friends
        //             </a> */}
        //             <Image src={this.props.image} wrapped ui={false} />
        //             </Card.Content>
        //         </Card>  
        //     </div>
        // );
    }
}

export default withStyles(useStyles, {withTheme: true})(Book);