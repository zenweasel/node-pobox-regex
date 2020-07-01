function matchAddressByRegex(destination, shippingAddress) {
  if (destination.addressPattern) {
    const { addressPatternShouldMatch = true } = destination;
    const fullAddress = [shippingAddress.address1, shippingAddress.address2].join(' ');
    const addressMatchesPattern = RegExp(destination.addressPattern, 'ig').test(fullAddress);
    if ((addressMatchesPattern && addressPatternShouldMatch)
      || (!addressMatchesPattern && !addressPatternShouldMatch)) {
      return true;
    }
  }
  return false;
}

module.exports = matchAddressByRegex;
