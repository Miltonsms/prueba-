function ControladoresFiltros($scope) {
	$scope.empleados = 
	[
		{
			nombre:'bviky', paterno: 'Ramires', materno:'ade Leon', primerDia: new Date(), salario: 12000, telefono:'55442233', bono:1.4528
		},
		{
			nombre:'dgaby',paterno: 'Ramires',materno:'bde Leon',primerDia: new Date(),salario: 12000,telefono:'6546516464',bono:1.4528
		},
		{
			nombre:'asergio', paterno: 'Ramires', materno:'cde Leon',primerDia: new Date(), salario: 12000, telefono:'8946498296',bono:1.4528
		},
		{
			nombre:'saul', paterno: 'Ramires', materno:'fde Leon', primerDia: new Date(), salario: 12000, telefono:'05641632184', bono:1.4528
		},
		{
			nombre:'cmilton', paterno: 'Ramires', materno:'bde Leon', primerDia: new Date(), salario: 12000, telefono:'912074',bono:1.4528
		}
	];
	$scope.ordenarPor=function(orden){
		$scope.ordenSeleccionado = orden;
	};

	//para hacer uso de $resource debemos colocarlo al crear el modulo
var app = angular.module("app", ["ngResource"]);
 
//con dataResource inyectamos la factoría
app.controller("appController", function ($scope, $http) {
    //hacemos uso de $http para obtener los datos del json
    $http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=05d4b311160508e4320ec650346e45c8&format=json').success(function (data) {
        //Convert data to array.
        //datos lo tenemos disponible en la vista gracias a $scope
        $scope.datos = data.tracks.track;
    });
    //datosResource lo tenemos disponible en la vista gracias a $scope
});


};