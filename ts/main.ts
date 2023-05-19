class Student{
    name:string;
    email:string;
    age:number;
}

window.onload = function(){
    let stu = new Student();
    stu.age = 30;
    stu.name = "J. Doe";
    stu.email = "Somebody@website.com";

    const stuKey = "studentObject";

    let stuString = JSON.stringify(stu);
    console.log(stuString);

    //put the JSON string version of student in localStorage
    localStorage.setItem(stuKey, stuString);

    let stuResult = localStorage.getItem("studentObject");
    let myStudent:Student = JSON.parse(stuResult);

    alert("Reading: " + myStudent.name);

    //storing data in localStorage
    localStorage.setItem("student", "J Doe. Age 30. Lakewood WA");

    //reading from localStorage
    let data = localStorage.getItem("student");
    
    alert(data);
}