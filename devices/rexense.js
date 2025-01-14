const extend = require('../lib/extend');

module.exports = [
    {
        zigbeeModel: ['RH0030'],
        model: 'RH0030',
        vendor: 'Rexense',
        description: 'Rexense Color bulb lamp',
        extend: extend.light_onoff_brightness_colortemp_color({colorTempRange: [153, 500]}),
    },
];
