module.exports = {
    IMAC_WIDTH: 2048,
    SMALL_LAPTOP_WIDTH: 1024,
    
    isOldSafari: function(isSafari, fullVersion) {
        if (!isSafari) return false
        const parts = fullVersion.split('.');
        if (parseInt(parts[0]) > 14) return false;
        const middle = parseInt(parts[1]);
        if (middle >= 1) return false
        return true
    },
}