'use strict';

var services = angular.module('myservices', ['ngResource']);


services.factory('UsersFactory', function ($resource) {
    return $resource('/api/voter-list', {}, {
        query: { method: 'GET', isArray: true },
        create: { method: 'POST' }
    })
});

services.factory('UserFactory', function ($resource) {
    return $resource('/api/voter/:id', {}, {
        show: { method: 'GET'},
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
