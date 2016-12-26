'use strict';

angular.module('myApp').factory('VoterService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'http://localhost:8080/api/';
    var voter;

    var factory = {
        fetchAllVoters: fetchAllVoters,
        fetchVoter: fetchVoter,
        createVoter: createVoter,
        updateVoter:updateVoter,
        deleteVoter:deleteVoter,
        getVoter : getVoter,
        addVoter : addVoter
    };

    return factory;

    function fetchAllVoters() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI + "voter-list")
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Voters');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function fetchVoter(id) {
        var deferred = $q.defer();
        $http.get('http://localhost:8080/api/voter?id='+id)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while fetching Voters');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function createVoter(voter) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, voter)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while creating Voter');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }


    function updateVoter(voter, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, voter)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while updating Voter');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function deleteVoter(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function(errResponse){
                    console.error('Error while deleting Voter');
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function addVoter() {
        voter = {"id":1,"title":"Пер","text":"Comment","votes":5,"start_date":1451595600000,"close_date":1454274000000,"isclosed":false};

    }

    function getVoter() {
        return voter;
    }

}]);