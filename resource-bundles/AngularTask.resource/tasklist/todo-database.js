var taskWrapper = function () {};

taskWrapper.fromRemoteObjectModel = function(model) {
	var task = new TaskWrapper();

	task.id = model.get('Id');
	task.dbTaskField = model.get('dbTaskField');
	task.createdDate = model.get('CreatedDate');

	return task;
};

taskWrapper.prototype.toRemoteOjectModelDetails = function () {
	var details = {};

	//grab id
	if(this.id){
		details.id = this.id;
	}

	details.dbTaskField = this.dbTaskField;

	return details;

};

taskWrapper.prototype.id = '';
taskWrapper.prototype.dbTaskField = '';
