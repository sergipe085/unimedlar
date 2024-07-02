export function formToJson(formData: FormData) {
    var object: any = {};
    formData.forEach(function(value, key){
        object[key] = value;
    });
    
    return object;
}