import React from 'react';
import styles from './Cards.module.css';
import { Card, Typography, Grid, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography className={styles.typo} color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={styles.typo}>
                            <CountUp start={0} duration={2.5} end={confirmed.value} separator=',' />
                        </Typography>
                        <Typography className={styles.typo} variant="body2">Number Of Active Cases Of COVID-19.</Typography>
                        <Typography  className={styles.typo}  color="textSecondary"><br />Last update date: <br />{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography  className={styles.typo}  color="textSecondary" gutterBottom>Recoveries</Typography>
                        <Typography variant="h5" className={styles.typo}>
                            <CountUp start={0} duration={2.5} end={recovered.value} separator=',' />
                        </Typography>
                        <Typography  className={styles.typo}  variant="body2">Number Of Recovered Cases Of COVID-19.</Typography>
                        <Typography  className={styles.typo}  color="textSecondary"><br />Last update date: <br />{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography  className={styles.typo}  color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" className={styles.typo}>
                            <CountUp start={0} duration={2.5} end={deaths.value} separator=',' />
                        </Typography>
                        <Typography  className={styles.typo} variant="body2">Number Of Deaths From COVID-19.</Typography>
                        <Typography  className={styles.typo}  color="textSecondary"><br />Last update date: <br />{new Date(lastUpdate).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;