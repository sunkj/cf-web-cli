module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise"
    ],
	  "env": {
	    "mocha": true,
	    "node": true
	  },
	  "rules": {
	    "arrow-parens": [2, "as-needed"],
	    "semi": ["error", "always"]
	  }
};