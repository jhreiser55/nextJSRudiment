require("isomorphic-fetch");
import BPromise from "bluebird";

function getProfile(username){
	return fetch(`http://35.190.190.219/info?q=${username}`).then(function(resp){
		return resp.json();
	})
}

function handleError(error){
	console.warn(error);
	return null;
}

function getJson(url){
	return fetch(url).then(function(resp){
		console.log(url, resp);
		return resp.json();
	});
}

function getRepos(username){
	return getJson(`http://35.190.190.219/info?q=${username}`);
}

function getStarCount(repos){
	return repos.reduce(function(count, repo){
		return count + repo.stargazers_count;
	}, 0);
}

function getUserData(campground){
	return BPromise.all([getProfile(campground)]).then(function([profile]){
		return { profile };
	});
}

module.exports = {
	getInfo: function(campground){
		return getUserData(campground).catch(handleError);
	}
};