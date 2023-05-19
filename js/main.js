var Student = (function () {
    function Student() {
    }
    return Student;
}());
window.onload = function () {
    var stu = new Student();
    stu.age = 30;
    stu.name = "J. Doe";
    stu.email = "Somebody@website.com";
    var stuKey = "studentObject";
    var stuString = JSON.stringify(stu);
    console.log(stuString);
    localStorage.setItem(stuKey, stuString);
    var stuResult = localStorage.getItem("studentObject");
    var myStudent = JSON.parse(stuResult);
    alert("Reading: " + myStudent.name);
    localStorage.setItem("student", "J Doe. Age 30. Lakewood WA");
    var data = localStorage.getItem("student");
    alert(data);
};
