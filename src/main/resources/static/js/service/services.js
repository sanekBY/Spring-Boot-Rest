'use strict';

var services = angular.module('myservices', ['ngResource']);


services.factory('VotersFactory', function ($resource) {
    return $resource('/api/voter-list', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('VoterFactory', function ($resource) {
    return $resource('/api/voter/:id', {}, {
        show: { method: 'GET'},
        update: { method: 'PUT', params: {id:'@id'} }
    })
});

services.factory('VoterFactorySec', function ($resource) {
    return $resource('/api/voter/:id', {}, {
        update: { method: 'PUT', params: {id:'@id'} }
    })
});


