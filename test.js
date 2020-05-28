const assert = require('assert').strict;
const cloudflareUserData = require('./index.js');

(async () => {
	assert.strictEqual(undefined, await cloudflareUserData());
})();
