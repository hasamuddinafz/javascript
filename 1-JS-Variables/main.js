var std1 = {
    name: "Ada Bilgi",
    DateOfBirth: 2012,
    MathResults: {
        midterm: 70,
        final: 70,
        makeUp: 80
    },
}

var std2 = {
    name: "Yiğit Bilgi",
    DateOfBirth: 2010,
    MathResults: {
        midterm: 40,
        final: 40,
        makeUp: 50
    },
}

function StudentInfo(student) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - student.DateOfBirth;

    const average = student.MathResults.midterm * 0.4 + student.MathResults.final * 0.6;

    const status = average >= 50 ? "Geçti" : "Kaldi";

    console.log(`Adı Soyadı: ${student.name}`);
    console.log(`Yaşı: ${age}`);
    console.log(`Ortalama: ${average.toFixed(2)}`);
    console.log(`Durum: ${status}`);
    console.log("-------------------------");
}

StudentInfo(std1);
StudentInfo(std2);