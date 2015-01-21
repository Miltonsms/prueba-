function controladorTareas($scope){
	$scope.tareas =[{texto: 'Ser Super Heroico con AgunalrJS', hecho: true},
					{texto: 'Crear una ap con angular', hecho: false}];

	$scope.agregarTarea = function(){
		$scope.tareas.push({texto: $scope.textoNuevaTarea,hecho: true});
		$scope.textoNuevaTarea = '';
	};
}