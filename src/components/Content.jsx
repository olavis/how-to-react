/* eslint-disable no-useless-constructor */
import { Card, CardContent, CardActionArea, CardMedia, CardActions, Button, Typography } from '@mui/material';
import React from 'react';
import honeybadger from './../honey_badger.jpeg';


class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={honeybadger}
                        alt="honey badger"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Honey badger
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                               It is the only living species in the genus Mellivora and in the mustelid subfamily Mellivorinae. 
                               Despite its name, the honey badger does not closely resemble other badger species; instead, 
                               it bears more anatomical similarities to weasels.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                </Card>
            </div>
            </>
        );
    }    
}
export default Content;