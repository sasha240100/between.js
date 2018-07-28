import Color from 'color';

// plugins code
Between._plugins.color = {
  name: 'color',
  test(startValue) { // rgb(255, 0, 0)
    return startValue.indexOf('rgb') >= 0 || startValue.indexOf('#') >= 0 || startValue.indexOf('hsl') >= 0; // true
  },
  initialize(startValue, destValue) {
    return {
      data: {
        format: (startValue.indexOf('rgba') >= 0 && 'rgba')
         || (startValue.indexOf('rgb') >= 0 && 'rgb')
         || (startValue.indexOf('#') >= 0 && 'hex')
         || Color(startValue).model
      },
      startValue: Color(startValue).rgb(),
      destValue: Color(destValue).rgb()
    }
  },

  interpolate(startValue, destValue, progress, data) {
    const r = lerp(startValue.color[0], destValue.color[0], progress);
    const g = lerp(startValue.color[1], destValue.color[1], progress);
    const b = lerp(startValue.color[2], destValue.color[2], progress);
    const a = lerp(startValue.valpha, destValue.valpha, progress);

    const color = Color.rgb(r, g, b, a)[data.format === 'rgba' ? 'rgb' : data.format]();

    return typeof color === 'string' ? color : color.string();
  }
};
