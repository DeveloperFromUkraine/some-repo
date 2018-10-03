/**
 *
 * defaultSeverity
 *  Any violations will be reported as warnings and will not hold up GIT pushes or CI
 *
 * stylelint-declaration-strict-value:
 *  A stylelint plugin that enforces either variables ($sass, @less, var(--cssnext)), functions or
 *  custom CSS keywords (inherit, none, etc.) for property's values.
 * (https://github.com/AndyOGo/stylelint-declaration-strict-value)
 *
 * Rules
 *  Report warning if the font-size, font-family or any property with "color" in it have values
 *  whcih are not a variable or function.
 *
 *  Report warning if hardcoded hex values to be used.
 *
 *  declaration-property-value-blacklist
 *  (https://github.com/stylelint/stylelint/tree/master/lib/rules/declaration-property-value-blacklist)
 *  Report a warning if the following property/value pair is used:
 *    color: ign-palette(...) anywhere within the value
 *    background-color: ign-palette(...) anywhere within the value
 *    background: ign-palette(...) at the beginning of the value
 *    box-shadow: ign-palette(...) anywhere within the value
 *    fill: ign-palette(...) anywhere within the value
 *
 * The above rule will prevent ign-palette from being used directly with a property
 * but will not produce a warning if it's stored in a variable:
 *
 *      $light-gray: ign-palette($ign-palette-gray, 200);
 *
 * Will the above is still discouraged, it is the recommended approach if forced to use a
 * palette color directly.
 */
module.exports = {
    defaultSeverity: 'warning',
    plugins: ['stylelint-declaration-strict-value'],
    rules: {
      'scale-unlimited/declaration-strict-value': [
        ['/color/', '/padding/', '/margin/', '/top/', '/left/', '/font/'],
        { ignoreKeywords: ['transparent'] }
      ],
      'color-no-hex': true,
      'declaration-property-value-blacklist': {
        '/color/': ['/ign\\-palette/'],
        '/background/': ['/^ign\\-palette/'],
        'box-shadow': ['/ign\\-palette/'],
        'fill': ['/ign\\-palette/'],
        '/border/': ['/ign\\-palette/'],
      }
    }
  };
