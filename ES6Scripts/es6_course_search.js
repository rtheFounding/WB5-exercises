let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


// Title of the courses that cost 50 or less.
function coursesPrice(array) {
    if (array.Fee <= 50.00) {
        return true;
    } else {
        return false;
    }
}

let all50OrLess = courses.filter(coursesPrice)
console.log(all50OrLess.length)
for (let i = 0; i < all50OrLess.length; i++) {
    console.log("Courses Title: + " + all50OrLess[i].Title + ".");
}

// Start date of PROG200 course;
function startOf(array) {
    if (array.CourseId == "PROG200") {
        return true;
    } else
        return false;
}


let startDateOf = courses.find(startOf);
if (startDateOf != undefined) {
    console.log("Start date of course PROG200: " + startDateOf.StartDate);
} else {
    console.log("no such id")
}

//Title of PROJ500 course
function titleOf(array) {
    if (array.CourseId == "PROJ500") {
        return true;
    } else {
        return false;
    }
}

let titleOfCourse = courses.find(titleOf);
if (titleOfCourse != undefined) {
    console.log("Title of CourseId PROJ500: " + titleOfCourse.Title)
} else {
    console.log("no such id")
}

//Classes that meet in "Classroom 1"
function classesMeet(array) {
    if (array.Location == "Classroom 1") {
        return true;
    } else {
        return false;
    }
}

let classesThatMeetIn = courses.filter(classesMeet);
for (let i = 0; i < classesThatMeetIn.length; i++) {
    console.log("Classes that meet in Classroom 1 are: " + classesThatMeetIn[i].Title)
} 