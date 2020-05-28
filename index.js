/**
 * Cloudflare User Data.
 *
 * Get user trace data with IP, location, user agent, host, visit scheme, etc.
 *
 * @author Awais <https://twitter.com/MrAhmadAwais/>
 */
const hasFetch = require('has-fetch');

module.exports = async () => {
	if (hasFetch()) {
		const res = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
		const resText = await res.text();
		const resObj = {};

		// Convert text to JS Object.
		resText.split('\n').map((line) => {
			const single = line.split('=');
			if (single[0]) {
				resObj[single[0]] = single[1];
			}
		});

		return resObj;
	}
};
