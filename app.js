/**
 * Author: Daniel Pearson
 * Last Updated: 9/19/2021
 * File: app.js
 * Purpose: Provide an API endpoint from the WPI HPRC Rocket downlink to ground station
 */
const exp = require('express');
const app = exp();
const port = 3000;

let telemetry = {
    rocket: {
        altitude: 0,
        //Getter and Setter added to update the web request when the data has changed, repeated for all values
        get alt() {
            return this.altitude;
        },
        set alt(val) {
            this.altitude = val;
            console.log(`Alt changed to: ${val}`);
            app.get('/api/telemetry', (req, res) => {
                res.send(telemetry);
            })
        },
        velocity: 0,
        get vel() {
            return this.veloicty;
        },
        set vel(val) {
            this.velocity = val;
            console.log(`Velocity changed to: ${val}`)
            app.get('/api/telemetry', (req, res) => {
                res.send(telemetry);
            })
        }
    },
    payload: {
        altitude: 0,
        get alt() {
            return this.altitude;
        },
        set alt(val) {
            this.altitude = val;
            console.log(`Alt changed to: ${val}`);
            app.get('/api/telemetry', (req, res) => {
                res.send(telemetry);
            })
        },
        velocity: 0,
        get vel() {
            return this.velocity;
        },
        set vel(val) {
            this.velocity = val;
            console.log(`Velocity changed to: ${val}`)
            app.get('/api/telemetry', (req, res) => {
                res.send(telemetry);
            })
        }
    }
};

app.get('/api/telemetry', (req, res) => {
    res.send(telemetry);
});

app.listen(port, () => {
    console.log(`Sending data on port ${port}...`);
});

app.get('/api/telemetry/:rocket', (req, res) => {

    var telem = telemetry.rocket;
    if(!telem) res.status(404).send('Not found!');
    res.send(telem);
});
app.get('/api/telemetry/:payload', (req, res) => {
    var telem = telemetry.payload;
    if(!telem) res.status(404).send('Not found!');
    res.send(telem);
});