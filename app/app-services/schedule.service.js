(function () {
    'use strict';

    angular
        .module('app')
        .factory('ScheduleService', Service);

    function Service($http) {

        var service = {};

        service.GetAll = GetAll;
        service.GetPredictions = GetPredictions;
        service.SetPredictions = SetPredictions;

        return service;

        function GetPredictions(username,handleSuccess,handleError){
            $http.get('/api/prediction/predictions/'+username).then(handleSuccess, handleError);
        }

        function SetPredictions(matchParam,handleSuccess,handleError){
            $http.post('/api/prediction/predictMatch',matchParam).then(handleSuccess, handleError);
        }

        function GetAll() {
          var result = {
            "Stages": [
              [
                [{
                  "match_id": 1,
                  "team1": "Fransa",
                  "team2": "Romanya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-10T19:00:00.000Z"
                }],
                [{
                  "match_id": 2,
                  "team1": "Arnavutluk",
                  "team2": "İsviçre",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-11T13:00:00.000Z"
                }, {
                  "match_id": 3,
                  "team1": "Galler",
                  "team2": "Slovakya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-11T16:00:00.000Z"
                }, {
                  "match_id": 4,
                  "team1": "İngiltere",
                  "team2": "Rusya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-11T19:00:00.000Z"
                }],
                [{
                  "match_id": 5,
                  "team1": "Türkiye",
                  "team2": "Hırvatistan",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-12T13:00:00.000Z"
                }, {
                  "match_id": 6,
                  "team1": "Polonya",
                  "team2": "Kuzey İrlanda",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-12T16:00:00.000Z"
                }, {
                  "match_id": 7,
                  "team1": "Almanya",
                  "team2": "Ukrayna",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-12T19:00:00.000Z"
                }],
                [{
                  "match_id": 8,
                  "team1": "İspanya",
                  "team2": "Çek Cumhuriyeti",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-13T13:00:00.000Z"
                }, {
                  "match_id": 9,
                  "team1": "İrlanda",
                  "team2": "İsveç",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-13T16:00:00.000Z"
                }, {
                  "match_id": 10,
                  "team1": "Belçika",
                  "team2": "İtalya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-13T19:00:00.000Z"
                }],
                [{
                  "match_id": 11,
                  "team1": "Avusturya",
                  "team2": "Macaristan",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-14T16:00:00.000Z"
                }, {
                  "match_id": 12,
                  "team1": "Portekiz",
                  "team2": "İzlanda",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-14T19:00:00.000Z"
                }]
              ],
              [
                [{
                  "match_id": 13,
                  "team1": "Rusya",
                  "team2": "Slovakya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-15T13:00:00.000Z"
                }, {
                  "match_id": 14,
                  "team1": "Romanya",
                  "team2": "İsviçre",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-15T16:00:00.000Z"
                }, {
                  "match_id": 15,
                  "team1": "Fransa",
                  "team2": "Arnavutluk",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-15T19:00:00.000Z"
                }],
                [{
                  "match_id": 16,
                  "team1": "İngiltere",
                  "team2": "Galler",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-16T13:00:00.000Z"
                }, {
                  "match_id": 17,
                  "team1": "Ukrayna",
                  "team2": "Kuzey İrlanda",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-16T16:00:00.000Z"
                }, {
                  "match_id": 18,
                  "team1": "Almanya",
                  "team2": "Polonya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-16T19:00:00.000Z"
                }],
                [{
                  "match_id": 19,
                  "team1": "İtalya",
                  "team2": "İsveç",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-17T13:00:00.000Z"
                }, {
                  "match_id": 20,
                  "team1": "Çek Cumhuriyeti",
                  "team2": "Hırvatistan",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-17T16:00:00.000Z"
                }, {
                  "match_id": 21,
                  "team1": "İspanya",
                  "team2": "Türkiye",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-17T19:00:00.000Z"
                }],
                [{
                  "match_id": 22,
                  "team1": "Belçika",
                  "team2": "İrlanda",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-18T13:00:00.000Z"
                }, {
                  "match_id": 23,
                  "team1": "İzlanda",
                  "team2": "Macaristan",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-18T16:00:00.000Z"
                }, {
                  "match_id": 24,
                  "team1": "Portekiz",
                  "team2": "Avusturya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-18T19:00:00.000Z"
                }]
              ],
              [
                [{
                  "match_id": 25,
                  "team1": "İsviçre",
                  "team2": "Fransa",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-19T19:00:00.000Z"
                }, {
                  "match_id": 26,
                  "team1": "Romanya",
                  "team2": "Arnavutluk",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-19T19:00:00.000Z"
                }],
                [{
                  "match_id": 27,
                  "team1": "Rusya",
                  "team2": "Galler",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-20T19:00:00.000Z"
                }, {
                  "match_id": 28,
                  "team1": "Slovakya",
                  "team2": "İngiltere",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-20T19:00:00.000Z"
                }],
                [{
                  "match_id": 29,
                  "team1": "Ukrayna",
                  "team2": "Polonya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-21T16:00:00.000Z"
                }, {
                  "match_id": 30,
                  "team1": "Kuzey İrlanda",
                  "team2": "Almanya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-21T16:00:00.000Z"
                }, {
                  "match_id": 31,
                  "team1": "Çek Cumhuriyeti",
                  "team2": "Türkiye",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-21T19:00:00.000Z"
                }, {
                  "match_id": 32,
                  "team1": "Hırvatistan",
                  "team2": "İspanya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-21T19:00:00.000Z"
                }],
                [{
                  "match_id": 33,
                  "team1": "İzlanda",
                  "team2": "Avusturya",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-22T16:00:00.000Z"
                }, {
                  "match_id": 34,
                  "team1": "Macaristan",
                  "team2": "Portekiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-22T16:00:00.000Z"
                }, {
                  "match_id": 35,
                  "team1": "İtalya",
                  "team2": "İrlanda",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-22T19:00:00.000Z"
                }, {
                  "match_id": 36,
                  "team1": "İsveç",
                  "team2": "Belçika",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-22T19:00:00.000Z"
                }]
              ],
              [
                [{
                  "match_id": 37,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-25T13:00:00.000Z"
                }, {
                  "match_id": 38,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-25T16:00:00.000Z"
                }, {
                  "match_id": 39,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-25T19:00:00.000Z"
                }],
                [{
                  "match_id": 40,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-26T13:00:00.000Z"
                }, {
                  "match_id": 41,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-26T16:00:00.000Z"
                }, {
                  "match_id": 42,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-26T19:00:00.000Z"
                }],
                [{
                  "match_id": 43,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-27T16:00:00.000Z"
                }, {
                  "match_id": 44,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-27T19:00:00.000Z"
                }]
              ],
              [
                [{
                  "match_id": 45,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-06-30T19:00:00.000Z"
                }],
                [{
                  "match_id": 46,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-07-01T19:00:00.000Z"
                }],
                [{
                  "match_id": 47,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-07-02T19:00:00.000Z"
                }],
                [{
                  "match_id": 48,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-07-03T19:00:00.000Z"
                }]
              ],
              [
                [{
                  "match_id": 49,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-07-06T19:00:00.000Z"
                }],
                [{
                  "match_id": 50,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-07-07T19:00:00.000Z"
                }]
              ],
              [
                [{
                  "match_id": 51,
                  "team1": "Belirsiz",
                  "team2": "Belirsiz",
                  "finished": false,
                  "team1_score": 0,
                  "team2_score": 0,
                  "date": "2016-07-10T19:00:00.000Z"
                }]
              ]
            ]
          };
          return result;
        }
    }
})();