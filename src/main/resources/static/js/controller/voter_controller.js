'use strict';

angular.module('myApp').controller('VoterController', ['$scope', 'VoterService', function($scope, VoterService) {
    var self = this;
    // self.voter={"id":1,"title":"Пер","text":"Comment","votes":5,"start_date":1451595600000,"close_date":1454274000000,"isclosed":false};
    self.voters=[];
    // self.voter = {};

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
    self.fetchVoter = fetchVoter;


    fetchAllVoters();


    function fetchAllVoters(){
        VoterService.fetchAllVoters()
            .then(
                function(d) {
                    self.voters = d;
                },
                function(errResponse){
                    console.error('Error while fetching Voters');
                }
            );
    }


    function fetchVoter(id){
        VoterService.fetchVoter(id)
            .then(
                function(d) {
                    self.voter = d;
                    VoterService.addVoter();
                },
                function(errResponse){
                    console.error('Error while fetching Voters');
                }
            );
    }

    function createVoter(user){
        VoterService.createVoter(user)
            .then(
                fetchAllVoters,
                function(errResponse){
                    console.error('Error while creating Voter');
                }
            );
    }

    function updateVoter(user, id){
        VoterService.updateVoter(user, id)
            .then(
                fetchAllVoters,
                function(errResponse){
                    console.error('Error while updating Voter');
                }
            );
    }

    function deleteVoter(id){
        VoterService.deleteVoter(id)
            .then(
                fetchAllVoters,
                function(errResponse){
                    console.error('Error while deleting Voter');
                }
            );
    }

    function submit(id) {
       // fetchVoter(id);
       // VoterService.addVoter();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.voters.length; i++){
            if(self.voters[i].id === id) {
                self.user = angular.copy(self.voters[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.user.id === id) {//clean form if the user to be deleted is shown there.
            reset();
        }
        deleteVoter(id);
    }


    function reset(){
        self.user={id:null,username:'',address:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    }

}]);