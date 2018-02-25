"use strict";

(function () {
    console.log("Hi");

    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getData = function () {
            return this.name + " " + this.surname;
        }
    }
    function Seat(number, category) {
        
        this.number = number || Math.floor(Math.random() * 90 + 10);
        this.cat = category;

        this.category = function () {
            var catLong;
            if (category == "b" || category == "B") {
                catLong = "business"
            } else {
                catLong = 'economy'

            } return catLong
        }
        this.getData = function () {
            return this.number + ", " + this.category();
        }
    }
    function Passenger(name, surname, number, category) {
        this.person = new Person(name, surname);
        this.category = category
        this.seat = new Seat(number, category);
        this.getData = function () {
            var passengerData = '\t\t' + this.seat.getData() + ", " + this.person.getData() + '\n';;
            return passengerData;
        }
    }
    function Flight(relation, date) {
        this.relation = relation;
        this.rn = function () {
            var relationSplit = this.relation.split(" - ");
            var relation1 = relationSplit[0];
            var relation2 = relationSplit[1];
            var index1;
            for (var i = 0; i < relation1.length; i++) {
                if (relation1[i].toUpperCase() != "A" && relation1[i].toUpperCase() != "E" && relation1[i].toUpperCase() != "U" && relation1[i].toUpperCase() != "O" && relation1[i].toUpperCase() != "I") {
                    index1 = i;
                }
            }
            var index2;
            for (var i = 0; i < relation2.length; i++) {
                if (relation2[i].toUpperCase() != "A" && relation2[i].toUpperCase() != "E" && relation2[i].toUpperCase() != "U" && relation2[i].toUpperCase() != "O" && relation2[i].toUpperCase() != "I") {
                    index2 = i;
                }
            }

            var rel1 = relation1[0] + relation1[index1]
            var rel2 = relation2[0] + relation2[index2]
            var relCut = rel1 + " - " + rel2;
            return relCut;

        };
        this.date = new Date(date);
        this.listOfPassengers = [];
        // ovo ne radi!
        // this.numOfbusiness = function () {
        //     var count = 0;
        //     console.log(count);
        //     for (var i = 0; i < this.listOfPassengers.length; i++) {
        //         if (this.listOfPassengers[i].category == "b") {
        //             count++;
        //             console.log(count);
        //         }

        //     }return count;
        //     console.log(count);

        // }
        // var numOfbusiness = this.numOfbusiness();
        // console.log(numOfbusiness);
        this.getData = function () {
            var flightData = '';
            var dataF = this.date.getDate() + "." + (1 + this.date.getMonth()) + "." + this.date.getFullYear();
            for (var i = 0; i < this.listOfPassengers.length; i++) {
                flightData += this.listOfPassengers[i].getData();

            } return "\t" + dataF + " " + this.rn().toUpperCase() + "\n" + flightData
        }
        this.addPassenger = function (passenger) {
            this.listOfPassengers.push(passenger)
        }
    }

    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        }
        this.getData = function () {

            var airportData = '';
            var flightData1 = ""
            var numOfPassengers = 0;
            for (var i = 0; i < this.listOfFlights.length; i++) {
                numOfPassengers += this.listOfFlights[i].listOfPassengers.length;
                flightData1 = flightData1 + this.listOfFlights[i].getData() + "\n"
                //flightData += this.listOfFlights[i].
            }
            airportData = 'Airport: ' + this.name + ', total passengers: ' + numOfPassengers + '\n' + flightData1;
            return airportData;
        }
    }

    function createFlight(relation, date) {
        var newFlight = new Flight(relation, date);
        return newFlight;
    }

    function createPassenger(name, surname, number, category) {
        var newPassenger = new Passenger(name, surname, number, category);
        return newPassenger;
    }

    var airport = new Airport();

    var flight1 = createFlight("Belgrade - New York", "Oct 25 2017");
    var flight2 = createFlight("Barcelona - Belgrade", "Nov 11 2017");

    var passenger1 = createPassenger("John", "Snow", 1, "b");
    var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
    var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    var passenger4 = createPassenger("Tyrion", "Lannister");

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    airport.addFlight(flight1);
    airport.addFlight(flight2);

    console.log(airport.getData());





})();


