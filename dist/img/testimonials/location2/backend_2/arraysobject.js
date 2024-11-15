const departments = {
    students: [
        {
            name: "John Doe",
            matNo: "123456",
            courses: {
                carryOver: [
                    "123", "124"
                ],
                currentCourse: [
                    {
                        courseName: "concept of pl",
                        lecturers: [
                            {
                                name: "God'spower",
                                degrees: [
                                    "PHD", "MSC"
                                ]
                            },
                            {
                                name: "Hod",
                                degrees: [
                                    "PHD", "MSC", "HND", "BSC", "DR", "OND", "BEdu", "BEng"
                                ]
                            }
                        ]
                    }

                ]
            }
        }
    ]
}

console.log(departments.students[0].courses.currentCourse[0].lecturers[1].degrees[5])

/*let StudentTranscript = {
    "100lvl": "uyutgh"
} */
